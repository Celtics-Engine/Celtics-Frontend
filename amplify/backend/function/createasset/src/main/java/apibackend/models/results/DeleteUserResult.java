package apibackend.models.results;

public class DeleteUserResult {
    private boolean userWasDeleted;
    private String jwt;
    private String dateDeleted;

    public DeleteUserResult() {
    }

    private DeleteUserResult (boolean userWasDeleted) {
        this.userWasDeleted = userWasDeleted;
    }

    private DeleteUserResult(boolean userWasDeleted, String jwt, String dateDeleted) {
        this.userWasDeleted = userWasDeleted;
        this.jwt = jwt;
        this.dateDeleted = dateDeleted;
    }

    public boolean getUserWasDeleted() {
        return userWasDeleted;
    }

    public void setUserWasDeleted(boolean userWasDeleted) {
        this.userWasDeleted = userWasDeleted;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public String getDateDeleted() {
        return dateDeleted;
    }

    public void setDateDeleted(String dateDeleted) {
        this.dateDeleted = dateDeleted;
    }

    public static DeleteUserResult.Builder builder() {
        return new Builder();
    }

    public static final class Builder {
        private boolean userWasDeleted;
        private String jwt;
        private String dateDeleted;

        public Builder withUserWasDeleted(boolean userWasDeleted) {
            this.userWasDeleted = userWasDeleted;
            return this;
        }

        public Builder withJwt(String jwt) {
            this.jwt = jwt;
            return this;
        }

        public Builder withDateDeleted(String dateDeleted) {
            this.dateDeleted = dateDeleted;
            return this;
        }

        public  DeleteUserResult build() {
            return new DeleteUserResult(userWasDeleted);
        }

        public DeleteUserResult build(String passwordKey) {
            return new DeleteUserResult(userWasDeleted, jwt, dateDeleted);
        }
    }
}
