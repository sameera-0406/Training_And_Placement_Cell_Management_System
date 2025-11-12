package com.geca.placement.repository;

import com.geca.placement.model.Application;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ApplicationRepository extends MongoRepository<Application, String> {
    List<Application> findByStudentId(String studentId);
    List<Application> findByDriveId(String driveId);
}