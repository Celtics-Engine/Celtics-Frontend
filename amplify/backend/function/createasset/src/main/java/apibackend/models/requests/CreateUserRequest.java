package apibackend.models.requests;

import org.apache.commons.codec.digest.DigestUtils;

import java.util.Base64;
import java.util.Objects;

public class CreateUserRequest {
	private String username;
	private String password;

	public CreateUserRequest(String username, String password) {
		this.username = username;
		this.password = Base64.getEncoder().encodeToString(DigestUtils.sha512(password));
	}

	public CreateUserRequest() {
	}

	public CreateUserRequest(Builder builder) {
		this(builder.username, builder.password);
	}

	public static Builder builder() {
		return new Builder();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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
		CreateUserRequest that = (CreateUserRequest) o;
		return getUsername().equals(that.getUsername()) && Objects.equals(getPassword(), that.getPassword());
	}

	@Override
	public int hashCode() {
		return Objects.hash(getUsername(), getPassword());
	}

	public static final class Builder {

		private String username;
		private String password;

		private Builder() {

		}

		public Builder withUsername(String usernameToUse) {
			this.username = usernameToUse;
			return this;
		}

		public Builder withPassword(String passwordToUse) {
			this.password = passwordToUse;
			return this;
		}

		public CreateUserRequest build() {
			return new CreateUserRequest(this);
		}
	}
}
