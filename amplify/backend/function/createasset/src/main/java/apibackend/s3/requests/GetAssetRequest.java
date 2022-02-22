package apibackend.s3.requests;

import apibackend.exception.PresignedGetObjectRequestNotFoundException;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.GetObjectPresignRequest;
import software.amazon.awssdk.services.s3.presigner.model.PresignedGetObjectRequest;
import software.amazon.awssdk.utils.IoUtils;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.time.Duration;

public class GetAssetRequest {

    public static PresignedGetObjectRequest getPresignedAsset(S3Presigner presigner,
                                                              String bucketName, String keyName ) {
        try {
            GetObjectRequest getObjectRequest =
                    GetObjectRequest.builder()
                            .bucket(bucketName)
                            .key(keyName)
                            .build();

            GetObjectPresignRequest getObjectPresignRequest =  GetObjectPresignRequest.builder()
                    .signatureDuration(Duration.ofMinutes(10))
                    .getObjectRequest(getObjectRequest)
                    .build();

            // Generate the presigned request
            return presigner.presignGetObject(getObjectPresignRequest);

        } catch (S3Exception | PresignedGetObjectRequestNotFoundException e) {
            System.out.println("Error occurred while presigning the request: " + e.getMessage());
            e.getStackTrace();
        }

        return null;
    }


    public static PresignedGetObjectRequest getPresignedAssetWithHeaders(S3Presigner presigner,
                                                                String bucketName, String keyName) {

        try {
            GetObjectRequest getObjectRequest =
                    GetObjectRequest.builder()
                            .bucket(bucketName)
                            .key(keyName)
                            .build();

            GetObjectPresignRequest getObjectPresignRequest =  GetObjectPresignRequest.builder()
                    .signatureDuration(Duration.ofMinutes(10))
                    .getObjectRequest(getObjectRequest)
                    .build();

            PresignedGetObjectRequest request = presigner.presignGetObject(getObjectPresignRequest);

            HttpURLConnection connection = (HttpURLConnection) request.url().openConnection();
            request.httpRequest().headers().forEach((header, values) -> {
                values.forEach(value -> {
                    connection.addRequestProperty(header, value);
                });
            });

            // Send any request payload that the service needs (not needed when isBrowserExecutable is true)
            if (request.signedPayload().isPresent()) {
                connection.setDoOutput(true);
                try (InputStream signedPayload = request.signedPayload().get().asInputStream();
                     OutputStream httpOutputStream = connection.getOutputStream()) {
                    IoUtils.copy(signedPayload, httpOutputStream);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

        } catch (S3Exception | PresignedGetObjectRequestNotFoundException | IOException e) {
            System.out.println("Error occurred while presigning the request: " + e.getMessage());
            e.getStackTrace();
        }

        return null;
    }



}
