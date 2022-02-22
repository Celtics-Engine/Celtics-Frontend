package apibackend.lambda;

import apibackend.dependency.App;
import apibackend.models.requests.DeleteUserRequest;
import apibackend.models.results.DeleteUserResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class DeleteUserActivityProvider implements RequestHandler<DeleteUserRequest, DeleteUserResult> {

    private static App app;

    public DeleteUserActivityProvider() {
    }

    @Override
    public DeleteUserResult handleRequest(DeleteUserRequest deleteUserRequest, Context context) {
        return getApp().provideDeleteUserActivity().handleRequest(deleteUserRequest, context);
    }

    private App getApp() {
        if (app == null) {
            app = new App();
        }

        return app;
    }
}
