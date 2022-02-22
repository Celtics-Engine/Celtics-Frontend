package apibackend.activity;

import apibackend.dynamodb.CelticUsersDao;
import apibackend.dynamodb.models.CelticUser;
import apibackend.exception.UserExistsException;
import apibackend.models.requests.CreateUserRequest;
import apibackend.models.results.UserLoginResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.inject.Inject;
import java.time.LocalDate;
import java.util.UUID;

public class CreateUserActivity implements RequestHandler<CreateUserRequest, UserLoginResult> {
	private final Logger log = LogManager.getLogger();
	private final CelticUsersDao celticUsersDao;

	@Inject
	public CreateUserActivity(CelticUsersDao celticUsersDao) {
		this.celticUsersDao = celticUsersDao;
	}

	@Override
	public UserLoginResult handleRequest(final CreateUserRequest createUserRequest, Context context) {
		log.info("Received CreateUserRequest {}", createUserRequest);

		try {
			if (celticUsersDao.getCelticUserFromUserName(createUserRequest.getUsername()) != null) {
				log.warn("User Already Exist");
				throw new UserExistsException("409: User Name Already Exist");
			}

			CelticUser celticUser = new CelticUser();
			celticUser.setUserId(UUID.randomUUID().toString());
			celticUser.setUsername(createUserRequest.getUsername());
			celticUser.setPassword(createUserRequest.getPassword());
			celticUser.setDateCreated(LocalDate.now().toString());

			celticUsersDao.saveCelticUsers(celticUser);

			return UserLoginResult.builder()
					.withCelticUser(celticUser)
					.build(celticUser.getPassword());

		} catch (UserExistsException e) {
			log.error("Invalid Attribute Exception", e);
		}

		return null;
	}
}
