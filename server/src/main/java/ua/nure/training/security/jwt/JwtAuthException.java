package ua.nure.training.security.jwt;

import javax.security.sasl.AuthenticationException;

public class JwtAuthException extends AuthenticationException {
    public JwtAuthException(String detail) {
        super(detail);
    }

    public JwtAuthException(String detail, Throwable ex) {
        super(detail, ex);
    }

}
