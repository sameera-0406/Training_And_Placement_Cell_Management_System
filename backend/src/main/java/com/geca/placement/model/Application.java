package com.geca.placement.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Data
@Document(collection = "applications")
public class Application {
    @Id
    private String id;
    private String studentId;
    private String driveId;
    private String status; // APPLIED, SHORTLISTED, REJECTED, HIRED
    private Instant appliedAt = Instant.now();
}