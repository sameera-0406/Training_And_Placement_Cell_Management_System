package com.geca.placement.controller;

import com.geca.placement.model.Drive;
import com.geca.placement.repository.DriveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drives")
public class DriveController {

    @Autowired
    private DriveRepository driveRepository;

    @GetMapping
    public List<Drive> getAll() {
        return driveRepository.findAll();
    }

    @PostMapping
    public Drive create(@RequestBody Drive drive) {
        return driveRepository.save(drive);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Drive> getById(@PathVariable String id) {
        return driveRepository.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Drive> update(@PathVariable String id, @RequestBody Drive updated) {
        return driveRepository.findById(id)
                .map(d -> {
                    d.setCompanyName(updated.getCompanyName());
                    d.setRole(updated.getRole());
                    d.setPackageOffered(updated.getPackageOffered());
                    d.setDriveDate(updated.getDriveDate());
                    d.setEligibleDepartments(updated.getEligibleDepartments());
                    d.setDescription(updated.getDescription());
                    driveRepository.save(d);
                    return ResponseEntity.ok(d);
                }).orElse(ResponseEntity.notFound().build());
    }
}