package com.geca.placement.repository;

import com.geca.placement.model.Drive;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DriveRepository extends MongoRepository<Drive, String> {
}