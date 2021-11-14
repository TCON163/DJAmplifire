package com.example.djamplifire.repository;

import com.example.djamplifire.model.LoggedObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogRepo extends JpaRepository<LoggedObject, Integer> {
}
