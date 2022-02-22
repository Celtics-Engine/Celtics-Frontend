package apibackend.lambda;

import apibackend.dependency.App;
import apibackend.models.requests.GetAssetRequest;
import apibackend.models.results.CreateAssetResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;


public class GetAssetActivityProvider implements RequestHandler<GetAssetRequest, CreateAssetResult> {

    private static App app;

    public GetAssetActivityProvider() {

    }

    @Override
    public CreateAssetResult handleRequest(final GetAssetRequest getAssetRequest, Context context) {
        return getApp().providerGetAssetActivity().handleRequest(getAssetRequest, context);
    }

    private App getApp() {
        if (app == null) {
            app = new App();
        }

        return app;
    }
}
