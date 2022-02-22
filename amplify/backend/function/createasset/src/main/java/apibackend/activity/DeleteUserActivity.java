package apibackend.activity;

import apibackend.dynamodb.CelticUsersDao;
import apibackend.dynamodb.models.CelticUser;
import apibackend.exception.CelticUsersNotFoundException;
import apibackend.exception.InvalidAttributeValueException;
import apibackend.models.requests.DeleteUserRequest;
import apibackend.models.results.DeleteUserResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.LocalDate;

public class DeleteUserActivity implements RequestHandler<DeleteUserRequest, DeleteUserResult> {
    private final Logger log = LogManager.getLogger();
    private final CelticUsersDao celticUsersDao;

    public DeleteUserActivity(CelticUsersDao celticUsersDao) {
        this.celticUsersDao = celticUsersDao;
    }

    @Override
    public DeleteUserResult handleRequest(DeleteUserRequest deleteUserRequest, Context context) {
        log.info("Requested DeleteUserRequest {}", deleteUserRequest);

        int i = deleteUserRequest.getJwt().lastIndexOf('.');
        String withoutSignature = deleteUserRequest.getJwt().substring(0, i+1);
        String userId = Jwts.parserBuilder().build().parseClaimsJwt(withoutSignature).getBody().getSubject();

        try {
            CelticUser celticUser = celticUsersDao.getUserById(userId);

            if (celticUser == null) {
                log.warn("Invalid User Id {}", userId);
                throw new CelticUsersNotFoundException("The userId does not exist");
            }

            if (celticUser.getPassword() == null || !celticUser.getPassword().equals(deleteUserRequest.getPassword())) {
                log.warn("Invalid Password {}", deleteUserRequest.getPassword());
                throw new InvalidAttributeValueException("Invalid Password");
            }

            Key key = Keys.hmacShaKeyFor(deleteUserRequest.getPassword().getBytes(StandardCharsets.UTF_8));
            String jwtSigned = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(deleteUserRequest.getJwt()).toString();

            celticUsersDao.deleteCelticUser(celticUser);

            return DeleteUserResult.builder()
                    .withUserWasDeleted(true)
                    .withJwt(jwtSigned)
                    .withDateDeleted(LocalDate.now().toString())
                    .build(deleteUserRequest.getPassword());

        } catch (CelticUsersNotFoundException e) {
            log.error("Invalid User Id {}", e.getMessage());
        } catch (InvalidAttributeValueException e) {
            log.error("Invalid Password {}", e.getMessage());
        }

        return DeleteUserResult.builder().withUserWasDeleted(false).build();
    }
}
