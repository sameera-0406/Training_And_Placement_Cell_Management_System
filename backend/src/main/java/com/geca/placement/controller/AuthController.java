package com.geca.placement.controller;

import com.geca.placement.dto.AuthRequest;
import com.geca.placement.dto.AuthResponse;
import com.geca.placement.model.Role;
import com.geca.placement.model.User;
import com.geca.placement.repository.UserRepository;
import com.geca.placement.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already in use");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(Collections.singleton(Role.ROLE_STUDENT));
        User saved = userRepository.save(user);
        String token = tokenProvider.createToken(saved.getId(), saved.getEmail(), "ROLE_STUDENT");
        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        return userRepository.findByEmail(request.getEmail())
                .map(user -> {
                    if (passwordEncoder.matches(request.getPassword(), user.getPassword())) {
                        String token = tokenProvider.createToken(user.getId(), user.getEmail(), user.getRoles().toString());
                        return ResponseEntity.ok(new AuthResponse(token));
                    } else {
                        return ResponseEntity.status(401).body("Invalid credentials");
                    }
                }).orElseGet(() -> ResponseEntity.status(401).body("Invalid credentials"));
    }
}