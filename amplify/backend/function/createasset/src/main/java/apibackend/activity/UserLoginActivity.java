package apibackend.activity;

import apibackend.dynamodb.CelticUsersDao;
import apibackend.dynamodb.models.CelticUser;
import apibackend.exception.CelticUsersNotFoundException;
import apibackend.exception.InvalidAttributeValueException;
import apibackend.models.requests.UserLoginRequest;
import apibackend.models.results.UserLoginResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class UserLoginActivity implements RequestHandler<UserLoginRequest, UserLoginResult> {
	private final Logger log = LogManager.getLogger();
	private final CelticUsersDao celticUsersDao;

	public UserLoginActivity(CelticUsersDao celticUsersDao) {
		this.celticUsersDao = celticUsersDao;
	}

	@Override
	public UserLoginResult handleRequest(UserLoginRequest userLoginRequest, Context context) {
		log.info("Requested UserLoginRequest {}", userLoginRequest);

		try {
			CelticUser celticUser = celticUsersDao.getCelticUserFromUserName(userLoginRequest.getUsername());

			if (celticUser == null) {
				log.warn("Invalid Username {}", userLoginRequest.getUsername());
				throw new CelticUsersNotFoundException("Invalid Username");
			}

			if (userLoginRequest.getPassword() == null || !celticUser.getPassword().equals(userLoginRequest.getPassword())) {
				log.warn("Invalid Password {}", userLoginRequest.getPassword());
				throw new InvalidAttributeValueException("Invalid Password");
			}

			return UserLoginResult.builder().withLoginSuccessful(true)
					.withCelticUser(celticUser)
					.build(celticUser.getPassword());

		} catch (CelticUsersNotFoundException e) {
			log.error("Invalid Username {}", e.getMessage());

		} catch (InvalidAttributeValueException e) {
			log.error("Invalid Password {}", e.getMessage());
		}

		return UserLoginResult.builder().withLoginSuccessful(false).build();
	}
}
