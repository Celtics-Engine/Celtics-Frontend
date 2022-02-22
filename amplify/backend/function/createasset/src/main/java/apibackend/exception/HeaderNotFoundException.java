package apibackend.exception;

public class HeaderNotFoundException extends RuntimeException {


    private static final long serialVersionUID = 6214760530962781189L;

    public HeaderNotFoundException(String message) {
        super(message);
    }

}
