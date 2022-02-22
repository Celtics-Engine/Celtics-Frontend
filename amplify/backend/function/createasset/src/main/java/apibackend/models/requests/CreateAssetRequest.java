package apibackend.models.requests;

import java.util.Objects;
import java.util.Set;

public class CreateAssetRequest {

    private String jwt;
    private String assetName;
    private String description;
    private Set<String> image;
    private String compatibleEngineVer;

    public CreateAssetRequest(String jwt, String assetName, String description,
                              Set<String> image, String compatibleEngineVer) {
        this.jwt = jwt;
        this.assetName = assetName;
        this.description = description;
        this.image = image;
        this.compatibleEngineVer = compatibleEngineVer;
    }
    public CreateAssetRequest(){}

    public CreateAssetRequest(Builder builder) {this(builder.jwt, builder.assetName,
            builder.description, builder.image, builder.compatibleEngineVer);}

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public String getAssetName() {
        return assetName;
    }

    public void setAssetName(String assetName) {
        this.assetName = assetName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<String> getImage() {
        return image;
    }

    public void setImage(Set<String> image) {
        this.image = image;
    }

    public String getCompatibleEngineVer() {
        return compatibleEngineVer;
    }

    public void setCompatibleEngineVer(String compatibleEngineVer) {
        this.compatibleEngineVer = compatibleEngineVer;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CreateAssetRequest that = (CreateAssetRequest) o;
        return getJwt().equals(that.getJwt()) && Objects.equals(getAssetName(),
                that.getAssetName()) && Objects.equals(getDescription(),
                that.getDescription()) && Objects.equals(getImage(),
                that.getImage()) && Objects.equals(getCompatibleEngineVer(),
                that.getCompatibleEngineVer());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getJwt(), getAssetName(), getDescription(), getImage(),
                                                  getCompatibleEngineVer());
    }

    public static final class Builder {
        private String jwt;
        private String assetName;
        private String description;
        private Set<String> image;
        private String compatibleEngineVer;

        private Builder() {}

        public Builder withJwt(String jwtToUse) {
            this.jwt = jwtToUse;
            return this;
        }

        public Builder withName(String assetNameToUse) {
            this.assetName = assetNameToUse;
            return this;
        }

        public Builder withDescription(String descriptionToUse) {
            this.description = descriptionToUse;
            return this;
        }

        public Builder withImage(Set<String> imageToUse) {
            this.image = imageToUse;
            return this;
        }

        public Builder withCompatibleEngineVer(String compatibleEngineVerToUse) {
            this.compatibleEngineVer = compatibleEngineVerToUse;
            return this;
        }

        public CreateAssetRequest build() { return new CreateAssetRequest(this);}
    }
}
