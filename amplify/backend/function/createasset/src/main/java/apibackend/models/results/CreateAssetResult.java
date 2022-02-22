package apibackend.models.results;

import io.jsonwebtoken.Jwts;

import java.util.Date;
import java.util.Set;

public class CreateAssetResult {

    private String jwt;

    public CreateAssetResult() {
    }
    public CreateAssetResult(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public static CreateAssetResult.Builder builder() {return new Builder();}

    public static final class Builder {
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

        public CreateAssetResult.Builder withUserId(String userId){
            this.userId = userId;
            return this;
        }
        public CreateAssetResult.Builder withAssetId(String assetId){
            this.assetId = assetId;
            return this;
        }
        public CreateAssetResult.Builder withName(String assetName){
            this.assetName = assetName;
            return this;
        }
        public CreateAssetResult.Builder withAssetLocation(String assetLocation){
            this.assetLocation = assetLocation;
            return this;
        }
        public CreateAssetResult.Builder withDescription(String description){
            this.description = description;
            return this;
        }
        public CreateAssetResult.Builder withImages(Set<String> images){
            this.images = images;
            return this;
        }
        public CreateAssetResult.Builder withFileSize(String fileSize){
            this.fileSize = fileSize;
            return this;
        }
        public CreateAssetResult.Builder withBucketId(String bucketId){
            this.bucketId = bucketId;
            return this;
        }
        public CreateAssetResult.Builder withCompatibleEngineVer(String compatibleEngineVer){
            this.compatibleEngineVer = compatibleEngineVer;
            return this;
        }
        public CreateAssetResult.Builder withDatePosted(String datePosted){
            this.datePosted = datePosted;
            return this;
        }

        public CreateAssetResult build() {
            return new CreateAssetResult(Jwts.builder()
                    .setSubject(userId)
                    .claim("asset_id", assetId)
                    .claim("asset_name", assetName)
                    .claim("asset_location", assetLocation)
                    .claim("description", description)
                    .claim("images", images)
                    .claim("file_size", fileSize)
                    .claim("bucket_id", bucketId)
                    .claim("compatible_engine_ver", compatibleEngineVer)
                    .claim("date_created", datePosted)
                    .setExpiration(new Date(System.currentTimeMillis() + 86400000))
                    .compact());
        }
    }
}
