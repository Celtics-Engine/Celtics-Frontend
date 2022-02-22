package apibackend.s3;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;

public class S3Dao {

    private final AmazonS3 client = AmazonS3ClientBuilder
            .standard()
            .withRegion(Regions.US_EAST_2)
            .build();

    S3Presigner presigner = S3Presigner.create();

    private final String bucketName = "celtics-engine-asset-store";

    public S3Dao() {}


}
