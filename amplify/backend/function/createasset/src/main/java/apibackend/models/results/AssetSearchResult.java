package apibackend.models.results;

import apibackend.dynamodb.models.CelticAsset;

import java.util.List;
import java.util.Objects;


public class AssetSearchResult {

    private List<CelticAsset> celticAssetList;

    public AssetSearchResult() {
    }

    public AssetSearchResult(Builder builder) {
        this.celticAssetList = builder.celticAssetList;
    }

    public List<CelticAsset> getCelticAssetList() {
        return celticAssetList;
    }

    public void setCelticAssetList(List<CelticAsset> celticAssetList) {
        this.celticAssetList = celticAssetList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AssetSearchResult that = (AssetSearchResult) o;
        return getCelticAssetList().equals(that.getCelticAssetList());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCelticAssetList());
    }

    @Override
    public String toString() {
        return "AssetSearchResult{" +
                "celticAssetList=" + celticAssetList +
                '}';
    }

    public static Builder builder() {
        return new Builder();
    }

    public static final class Builder {

        private List<CelticAsset> celticAssetList;

        public Builder withCelticAssetList(List<CelticAsset> celticAssetList) {
            this.celticAssetList = celticAssetList;
            return this;
        }

        public AssetSearchResult build() {
            return new AssetSearchResult(this);
        }
    }
}
