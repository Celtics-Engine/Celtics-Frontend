package apibackend.lambda;

import apibackend.dependency.App;
import apibackend.models.requests.UpdatePasswordRequest;
import apibackend.models.results.UpdatePasswordResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class UpdatePasswordActivityProvider implements RequestHandler<UpdatePasswordRequest, UpdatePasswordResult> {

    private static App app;

    @Override
    public UpdatePasswordResult handleRequest(UpdatePasswordRequest updatePasswordRequest, Context context) {
        return getApp().provideUpdatePasswordActivityProvider().handleRequest(updatePasswordRequest, context);
    }

    private App getApp() {
        if (app == null) {
            app = new App();
        }

        return app;
    }
}
