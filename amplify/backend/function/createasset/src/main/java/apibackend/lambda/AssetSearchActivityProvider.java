package apibackend.lambda;

import apibackend.dependency.App;
import apibackend.models.requests.AssetSearchRequest;
import apibackend.models.results.AssetSearchResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class AssetSearchActivityProvider implements RequestHandler<AssetSearchRequest, AssetSearchResult> {
    private static App app;

    public AssetSearchActivityProvider() {}

    @Override
    public AssetSearchResult handleRequest(final AssetSearchRequest assetSearchRequest, Context context) {
        return getApp().provideAssetSearchActivity().handleRequest(assetSearchRequest, context);
    }

    private App getApp() {
        if (app == null) {
            app = new App();
        }
        return app;
    }
}
