package apibackend.lambda;

import apibackend.dependency.App;
import apibackend.models.requests.CreateUserRequest;
import apibackend.models.results.UserLoginResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class CreateUserActivityProvider implements RequestHandler<CreateUserRequest, UserLoginResult> {

	private static App app;

	public CreateUserActivityProvider() {
	}

	@Override
	public UserLoginResult handleRequest(final CreateUserRequest createPlaylistRequest, Context context) {
		return getApp().provideCreateUserActivity().handleRequest(createPlaylistRequest, context);
	}

	private App getApp() {
		if (app == null) {
			app = new App();
		}

		return app;
	}


}

