package apibackend.models.requests;

import org.apache.commons.codec.digest.DigestUtils;

import java.util.Base64;
import java.util.Objects;

public class DeleteUserRequest {
    private String jwt;
    private String password;

    public DeleteUserRequest() {
    }

    public DeleteUserRequest(String jwt, String password) {
        this.jwt = jwt;
        this.password = Base64.getEncoder().encodeToString(DigestUtils.sha512(password));
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = Base64.getEncoder().encodeToString(DigestUtils.sha512(password));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DeleteUserRequest that = (DeleteUserRequest) o;
        return getJwt().equals(that.getJwt()) && getPassword().equals(that.getPassword());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getJwt(), getPassword());
    }
}
