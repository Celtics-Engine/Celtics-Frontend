package apibackend.models.results;

import apibackend.dynamodb.models.CelticUser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

public class UpdatePasswordResult {
    private boolean passwordUpdated;
    private String jwt;
    private String dateUpdated;

    public UpdatePasswordResult() {
    }

    private UpdatePasswordResult(boolean passwordUpdated) {
        this.passwordUpdated = passwordUpdated;
    }

    private UpdatePasswordResult(boolean passwordUpdated, String jwt, String dateUpdated) {
        this.passwordUpdated = passwordUpdated;
        this.jwt = jwt;
        this.dateUpdated = dateUpdated;
    }

    public boolean getPasswordUpdated() {
        return passwordUpdated;
    }

    public void setPasswordUpdated(boolean passwordUpdated) {
        this.passwordUpdated = passwordUpdated;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public String getDateUpdated() {
        return dateUpdated;
    }

    public void setDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
    }

    public static UpdatePasswordResult.Builder builder() {
        return new Builder();
    }

    public static final class Builder {
        private boolean passwordUpdated;
        private CelticUser celticUser;
        private String dateUpdated;

        public Builder withPasswordUpdated(boolean flag) {
            this.passwordUpdated = flag;
            return this;
        }

        public Builder withCelticUser(CelticUser celticUser) {
            this.celticUser = celticUser;
            return this;
        }

        public Builder withDateUpdated(String dateUpdated) {
            this.dateUpdated = dateUpdated;
            return this;
        }

        public UpdatePasswordResult build() {
            return new UpdatePasswordResult(passwordUpdated);
        }

        public UpdatePasswordResult build(String passwordKey) {
            Key key = Keys.hmacShaKeyFor(passwordKey.getBytes(StandardCharsets.UTF_8));
            return new UpdatePasswordResult(passwordUpdated,
                    Jwts.builder()
                    .setSubject(celticUser.getUserId())
                    .claim("username", celticUser.getUsername())
                    .claim("date_created", celticUser.getDateCreated())
                    .setExpiration(new Date(System.currentTimeMillis() + 86400000))
                    .signWith(key)
                    .compact(),
                    dateUpdated);
        }
    }

}
