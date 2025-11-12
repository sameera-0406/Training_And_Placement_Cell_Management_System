package com.geca.placement.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Data
@Document(collection = "drives")
public class Drive {
    @Id
    private String id;
    private String companyName;
    private String role;
    private double packageOffered;
    private LocalDate driveDate;
    private List<String> eligibleDepartments;
    private String description;
}