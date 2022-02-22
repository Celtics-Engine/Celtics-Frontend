package apibackend.exception;

public class PresignedGetObjectRequestNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 3825228407125673526L;


    public PresignedGetObjectRequestNotFoundException(String message) {
        super(message);
    }

}
