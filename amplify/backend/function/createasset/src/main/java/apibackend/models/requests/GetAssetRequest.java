package apibackend.models.requests;

import java.util.Objects;

public class GetAssetRequest {

    private String userId;
    private String assetId;

    public GetAssetRequest(){};

    public GetAssetRequest(String userId, String assetId) {
        this.userId = userId;
        this.assetId = assetId;
    }

    public GetAssetRequest(Builder builder) {this(builder.assetId, builder.userId);}

    public String getAssetId() {
        return assetId;
    }

    public void setAssetId(String assetId) {
        this.assetId = assetId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GetAssetRequest that = (GetAssetRequest) o;
        return getUserId().equals(that.getUserId()) && getAssetId().equals(that.getAssetId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUserId(), getAssetId());
    }

    public static final class Builder{

        private String assetId;
        private String userId;

        private Builder() {}

        public Builder withAssetId(String assetIdToUse) {
            this.assetId = assetIdToUse;
            return this;
        }

        public Builder withUserId(String userIdToUse) {
            this.userId = userIdToUse;
            return this;
        }

        public GetAssetRequest build() {return new GetAssetRequest(this);}
    }
}
