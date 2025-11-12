package com.geca.placement.controller;

import com.geca.placement.model.Application;
import com.geca.placement.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    @Autowired
    private ApplicationRepository applicationRepository;

    @GetMapping
    public List<Application> all() {
        return applicationRepository.findAll();
    }

    @PostMapping
    public Application create(@RequestBody Application application) {
        application.setStatus("APPLIED");
        return applicationRepository.save(application);
    }

    @GetMapping("/student/{studentId}")
    public List<Application> forStudent(@PathVariable String studentId) {
        return applicationRepository.findByStudentId(studentId);
    }
}