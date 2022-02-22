package apibackend.s3.requests;

import apibackend.exception.HeaderNotFoundException;
import software.amazon.awssdk.services.s3.presigner.model.PresignedGetObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class HttpHeadRequest {

    public static void printPresignedHeaders(PresignedGetObjectRequest presignedGetObjectRequest) {
        presignedGetObjectRequest.signedHeaders().forEach((k, v) ->
                System.out.println(k + ": " + v)
        );
    }

    public static void printPresignedHeaders(PresignedPutObjectRequest presignedPutObjectRequest) {
        presignedPutObjectRequest.signedHeaders().forEach((k, v) ->
                System.out.println(k + ": " + v)
        );
    }


    private static Map<String, String> getHeader(PresignedGetObjectRequest presignedGetObjectRequest,
                                          String headerKey) {
        try {
            presignedGetObjectRequest.signedHeaders().forEach((k, v) -> {
                if (k.equals(headerKey)) {
                    new HashMap<String, String>() {
                        @Override
                        public Set<String> keySet() {
                            return super.keySet();
                        }
                    };
                }
            });
        } catch (HeaderNotFoundException e) {
            System.out.println("Headers not found");
        }
        return null;
    }
}
