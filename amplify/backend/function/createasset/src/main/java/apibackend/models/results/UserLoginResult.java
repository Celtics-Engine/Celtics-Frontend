package apibackend.models.results;

import apibackend.dynamodb.models.CelticUser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;


public class UserLoginResult {
	private boolean loginSuccessful;
	private String jwt;

	public UserLoginResult() {
	}

	private UserLoginResult(boolean loginSuccessful) {
		this.loginSuccessful = loginSuccessful;
	}

	private UserLoginResult(boolean loginSuccessful, String jwt) {
		this.loginSuccessful = loginSuccessful;
		this.jwt = jwt;
	}

	public boolean getLoginSuccessful() {
		return loginSuccessful;
	}

	public String getJwt() {
		return jwt;
	}

	public void setLoginSuccessful(boolean loginSuccessful) {
		this.loginSuccessful = loginSuccessful;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}

	public static UserLoginResult.Builder builder() {
		return new Builder();
	}

	public static final class Builder {
		private boolean loginSuccessful;
		private CelticUser celticUser;

		public Builder withLoginSuccessful(boolean flag) {
			this.loginSuccessful = flag;
			return this;
		}

		public Builder withCelticUser(CelticUser celticUser) {
			this.celticUser = celticUser;
			return this;
		}

		public UserLoginResult build() {
			return new UserLoginResult(loginSuccessful);
		}

		public UserLoginResult build(String passwordKey) {
			Key key = Keys.hmacShaKeyFor(passwordKey.getBytes(StandardCharsets.UTF_8));
			return new UserLoginResult(loginSuccessful, Jwts.builder()
					.setSubject(celticUser.getUserId())
					.claim("username", celticUser.getUsername())
					.claim("date_created", celticUser.getDateCreated())
					.setExpiration(new Date(System.currentTimeMillis() + 86400000))
					.signWith(key)
					.compact());
		}
	}
}

