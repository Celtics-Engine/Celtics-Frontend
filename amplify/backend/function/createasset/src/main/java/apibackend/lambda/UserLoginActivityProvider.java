package apibackend.lambda;

import apibackend.dependency.App;
import apibackend.models.requests.UserLoginRequest;
import apibackend.models.results.UserLoginResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class UserLoginActivityProvider implements RequestHandler<UserLoginRequest, UserLoginResult> {
	private static App app;

	public UserLoginActivityProvider() {

	}


	@Override
	public UserLoginResult handleRequest(UserLoginRequest userLoginRequest, Context context) {
		return getApp().provideUserLoginActivityProvider().handleRequest(userLoginRequest, context);
	}

	private App getApp() {
		if (app == null) {
			app = new App();
		}

		return app;
	}
}
