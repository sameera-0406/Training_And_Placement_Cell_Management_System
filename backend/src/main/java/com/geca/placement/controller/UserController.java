package com.geca.placement.controller;

import com.geca.placement.model.User;
import com.geca.placement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable String id) {
        return userRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User updated) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(updated.getName());
                    user.setDepartment(updated.getDepartment());
                    user.setResumeUrl(updated.getResumeUrl());
                    userRepository.save(user);
                    return ResponseEntity.ok(user);
                }).orElse(ResponseEntity.notFound().build());
    }
}