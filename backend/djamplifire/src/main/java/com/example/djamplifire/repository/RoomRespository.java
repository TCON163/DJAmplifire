package com.example.djamplifire.repository;

import com.example.djamplifire.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRespository extends JpaRepository<Room, String> {
}
