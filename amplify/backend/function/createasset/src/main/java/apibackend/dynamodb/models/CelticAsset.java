package apibackend.dynamodb.models;

import com.amazonaws.services.dynamodbv2.datamodeling.*;

import java.util.Set;

@DynamoDBTable(tableName = "celtic_assets")
public class CelticAsset {

   private String userId;
   private String assetId;
   private String assetName;
   private String assetLocation;
   private String description;
   private Set<String> images;
   private String fileSize;
   private String bucketId;
   private String compatibleEngineVer;
   private String datePosted;

    @DynamoDBHashKey(attributeName = "user_id")
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @DynamoDBRangeKey(attributeName = "asset_id")
    public String getAssetId() {
        return assetId;
    }

    public void setAssetId(String assetId) {
        this.assetId = assetId;
    }

    @DynamoDBAttribute(attributeName = "asset_name")
    public String getAssetName() {
        return assetName;
    }

    public void setAssetName(String assetName) {
        this.assetName = assetName;
    }

    @DynamoDBAttribute(attributeName = "asset_location")
    public String getAssetLocation() {
        return assetLocation;
    }

    public void setAssetLocation(String assetLocation) {
        this.assetLocation = assetLocation;
    }

    @DynamoDBAttribute(attributeName = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @DynamoDBAttribute(attributeName = "images")
    public Set<String> getImages() {
        return images;
    }

    public void setImages(Set<String> images) {
        this.images = images;
    }

    @DynamoDBAttribute(attributeName = "file_size")
    public String getFileSize() {
        return fileSize;
    }

    public void setFileSize(String fileSize) {
        this.fileSize = fileSize;
    }

    @DynamoDBAttribute(attributeName = "bucket_id")
    public String getBucketId() {
        return bucketId;
    }

    public void setBucketId(String bucketId) {
        this.bucketId = bucketId;
    }

    @DynamoDBAttribute(attributeName = "compatible_engine_ver")
    public String getCompatibleEngineVer() {
        return compatibleEngineVer;
    }

    public void setCompatibleEngineVer(String compatibleEngineVer) {
        this.compatibleEngineVer = compatibleEngineVer;
    }

    @DynamoDBAttribute(attributeName = "date_created")
    public String getDatePosted() {
        return datePosted;
    }

    public void setDatePosted(String datePosted) {
        this.datePosted = datePosted;
    }

    public S3Link assetImage;

    @DynamoDBAttribute(attributeName = "asset_image")
    public S3Link getProductImage() {
        return assetImage;
    }

    public void setProductImage(S3Link assetImage) {
        this.assetImage = assetImage;
    }
}
