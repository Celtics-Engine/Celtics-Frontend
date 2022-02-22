package apibackend.models.requests;

import java.util.Objects;

public class AssetSearchRequest {

    private String name;

    public AssetSearchRequest() {}

    public AssetSearchRequest(String name) {
        this.name = name;
    }

    public AssetSearchRequest(Builder builder){this(builder.name);}


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AssetSearchRequest that = (AssetSearchRequest) o;
        return getName().equals(that.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getName());
    }

    @Override
    public String toString() {
        return "AssetSearchRequest{" +
                "name='" + name + '\'' +
                '}';
    }

    public static final class Builder {

        private String name;


        private Builder(){}

        public Builder withName(String nameToUse) {
            this.name = nameToUse;
            return this;
        }



        public AssetSearchRequest build() { return new AssetSearchRequest(this);}

    }
}
