package apibackend.lambda;

import apibackend.dependency.App;
import apibackend.models.requests.CreateAssetRequest;
import apibackend.models.results.CreateAssetResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class CreateAssetActivityProvider implements RequestHandler<CreateAssetRequest, CreateAssetResult> {

    private static App app;

    public CreateAssetActivityProvider() {

    }

    @Override
    public CreateAssetResult handleRequest(final CreateAssetRequest createAssetRequest, Context context) {
        return getApp().provideCreateAssetActivity().handleRequest(createAssetRequest, context);
    }

    private App getApp() {
        if (app == null) {
            app = new App();
        }

        return app;
    }
}
