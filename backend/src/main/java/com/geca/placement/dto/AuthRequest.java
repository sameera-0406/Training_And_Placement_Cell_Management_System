package com.geca.placement.dto;

public class AuthRequest {
    private String token;

    public AuthRequest() {}

    public AuthRequest(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getEmail() {
        throw new UnsupportedOperationException("Unimplemented method 'getEmail'");
    }

    public CharSequence getPassword() {
        throw new UnsupportedOperationException("Unimplemented method 'getPassword'");
    }
}
