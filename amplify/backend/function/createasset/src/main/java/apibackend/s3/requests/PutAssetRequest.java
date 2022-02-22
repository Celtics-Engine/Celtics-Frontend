package apibackend.s3.requests;

import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

import java.io.File;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.Iterator;
import java.util.stream.Stream;

public class PutAssetRequest {

    public PutAssetRequest() {}

    /**
     * this is only necessary if we want the user to be able to upload
     * bucket stuff other than compressed zip files (assets)
     *
     * As of now, the assets are to be stored in zip format, but if we want a user to
     * be able to store a profile pic for instance, then we can just reuse this same upload asset class
     *
     * the conversion of the object to be uploaded into bytes first
     * will allow for anything to be stored on the bucket
     *
     *
     * @param filePath file path to object to be uploaded
     * @return conversion into byte array of that object to be used in the upload asset method
     */
    public static byte[] convertFileTypeToByteArray(String filePath) throws IOException {
        return Files.readAllBytes(Paths.get(filePath));
    }


    public static void uploadPresignedAsset(S3Presigner presigner, String bucketName, String keyName,
                                     String contentType, File file) {
        try {
            PutObjectRequest objectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(keyName)
                    .contentType(contentType)
                    .build();

            PutObjectPresignRequest presignRequest = PutObjectPresignRequest.builder()
                    .signatureDuration(Duration.ofMinutes(10))
                    .putObjectRequest(objectRequest)
                    .build();

            PresignedPutObjectRequest presignedRequest = presigner.presignPutObject(presignRequest);

            System.out.println("Which HTTP method: " +
                    presignedRequest.httpRequest().method());

            // Upload content to the Amazon S3 bucket by using this URL
            URL url = presignedRequest.url();
            System.out.println("Presigned URL to upload a file to: " + url);

            // Create the connection and use it to upload the new object by using the presigned URL
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setDoOutput(true);
            connection.setRequestProperty("Content-Type", contentType);
            connection.setRequestMethod("PUT");
            connection.getOutputStream().write(convertFileTypeToByteArray(file.getPath()));
            connection.getResponseCode();
            System.out.println("HTTP response code is " + connection.getResponseCode());
            connection.disconnect();

        } catch (S3Exception | IOException e) {
            e.getStackTrace();
        }
    }

    // TODO: this is working but not uploading the assets from presigned urls also need it to be able to upload into a directory on the bucket if needed
    public static void multipartUpload(S3Client s3, String bucketName,  File... files) {
        try {
            int count = 0;
            Iterator<File> it = Stream.of(files).iterator();

            while (it.hasNext()) {
                File f = it.next();
                if (f.exists()) {

                    count++;
                    String key = f.getName();

                    CreateMultipartUploadRequest request = CreateMultipartUploadRequest.builder()
                            .bucket(bucketName)
                            .key(key)
                            .build();

                    CreateMultipartUploadResponse response = s3.createMultipartUpload(request);

                    String uploadId = response.uploadId();
                    System.out.println(uploadId);

                    UploadPartRequest uploadPartRequest = UploadPartRequest.builder()
                            .bucket(bucketName)
                            .key(key)
                            .uploadId(uploadId)
                            .partNumber(count)
                            .build();

                    String etg = s3.uploadPart(uploadPartRequest,
                            RequestBody.fromFile(f)).eTag();

                    CompletedPart part = CompletedPart.builder().partNumber(count).eTag(etg).build();

                    CompletedMultipartUpload completedMultipartUpload = CompletedMultipartUpload.builder()
                            .parts(part)
                            .build();

                    CompleteMultipartUploadRequest completeMultipartUploadRequest =
                            CompleteMultipartUploadRequest.builder()
                                    .bucket(bucketName)
                                    .key(key)
                                    .uploadId(uploadId)
                                    .multipartUpload(completedMultipartUpload)
                                    .build();

                    s3.completeMultipartUpload(completeMultipartUploadRequest);
                }
            }

        } catch (S3Exception e) {
            e.printStackTrace();
        }
    }

}
