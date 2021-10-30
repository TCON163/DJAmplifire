package com.example.djamplifire.controller;

import com.example.djamplifire.model.Room;
import com.example.djamplifire.repository.RoomRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class RoomController {

    @Autowired
    private RoomRespository roomRespository;

    //get all rooms
    @GetMapping("/rooms")
    public List<Room> getAllRooms() {
        return roomRespository.findAll();

    }
}
