package apibackend.activity;

import apibackend.dynamodb.CelticUsersDao;
import apibackend.dynamodb.models.CelticUser;
import apibackend.exception.CelticUsersNotFoundException;
import apibackend.exception.InvalidAttributeValueException;
import apibackend.models.requests.UpdatePasswordRequest;
import apibackend.models.results.UpdatePasswordResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.LocalDate;

public class UpdatePasswordActivity implements RequestHandler<UpdatePasswordRequest, UpdatePasswordResult> {
    private final Logger log = LogManager.getLogger();
    private final CelticUsersDao celticUsersDao;

    public UpdatePasswordActivity(CelticUsersDao celticUsersDao) {
        this.celticUsersDao = celticUsersDao;
    }

    @Override
    public UpdatePasswordResult handleRequest(UpdatePasswordRequest updatePasswordRequest , Context context) {
        log.info("Requested UpdatePasswordRequest {}", updatePasswordRequest);

        int i = updatePasswordRequest.getJwt().lastIndexOf('.');
        String withoutSignature = updatePasswordRequest.getJwt().substring(0, i+1);
        String userId = Jwts.parserBuilder().build().parseClaimsJwt(withoutSignature).getBody().getSubject();

        try {
            CelticUser celticUser = celticUsersDao.getUserById(userId);

            if (celticUser == null) {
                log.warn("Invalid User Id {}", userId);
                throw new CelticUsersNotFoundException("The userId does not exist");
            }

            if (celticUser.getPassword() == null || !celticUser.getPassword().equals(updatePasswordRequest.getPassword())) {
                log.warn("Invalid Password {}", celticUser.getPassword());
                throw new InvalidAttributeValueException("Invalid Password");
            }

            Key key = Keys.hmacShaKeyFor(celticUser.getPassword().getBytes(StandardCharsets.UTF_8));
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(updatePasswordRequest.getJwt());

            celticUser.setPassword(updatePasswordRequest.getNewPassword());
            celticUsersDao.saveCelticUsers(celticUser);

            return UpdatePasswordResult.builder().
                    withPasswordUpdated(true)
                    .withCelticUser(celticUser)
                    .withDateUpdated(LocalDate.now().toString())
                    .build(updatePasswordRequest.getNewPassword());

        } catch (InvalidAttributeValueException e) {
            log.error("Invalid User Id {}", userId);
        } catch (CelticUsersNotFoundException e) {
            log.error("Invalid Password {}", updatePasswordRequest.getPassword());
        }

        return UpdatePasswordResult.builder().withPasswordUpdated(false).build();
    }
}
