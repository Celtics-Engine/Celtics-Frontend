package apibackend.models.requests;

import org.apache.commons.codec.digest.DigestUtils;

import java.util.Base64;
import java.util.Objects;

public class UpdatePasswordRequest {

    private String jwt;
    private String password;
    private String newPassword;

    public UpdatePasswordRequest() {
    }

    public UpdatePasswordRequest(String jwt, String password, String newPassword) {
        this.jwt = jwt;
        this.password = password;
        this.newPassword = Base64.getEncoder().encodeToString(DigestUtils.sha512(newPassword));
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
        this.password = password;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = Base64.getEncoder().encodeToString(DigestUtils.sha512(newPassword));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UpdatePasswordRequest that = (UpdatePasswordRequest) o;
        return getJwt().equals(that.getJwt()) && getPassword().equals(that.getPassword()) && getNewPassword().equals(that.getNewPassword());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getJwt(), getPassword(), getNewPassword());
    }
}
