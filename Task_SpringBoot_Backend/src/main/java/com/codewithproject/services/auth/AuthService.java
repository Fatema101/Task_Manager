package com.codewithproject.services.auth;

import com.codewithproject.dto.SignupRequest;
import com.codewithproject.dto.UserDto;

public interface AuthService {
    UserDto signupUser(SignupRequest signupRequest);

    boolean hasUserWithEmail(String email);
}
