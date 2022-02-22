package apibackend.exception;

public class CelticUsersNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 5253797068775129414L;

	/**
	 * Exception with no message or cause.
	 */
	public CelticUsersNotFoundException() {
		super();
	}

	/**
	 * Exception with a message, but no cause.
	 *
	 * @param message A descriptive message for this exception.
	 */
	public CelticUsersNotFoundException(String message) {
		super(message);
	}

	/**
	 * Exception with no message, but with a cause.
	 *
	 * @param cause The original throwable resulting in this exception.
	 */
	public CelticUsersNotFoundException(Throwable cause) {
		super(cause);
	}

	/**
	 * Exception with message and cause.
	 *
	 * @param message A descriptive message for this exception.
	 * @param cause   The original throwable resulting in this exception.
	 */
	public CelticUsersNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}
}
