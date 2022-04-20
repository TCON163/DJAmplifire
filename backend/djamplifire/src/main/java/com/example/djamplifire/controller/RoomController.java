package com.example.djamplifire.controller;

import com.example.djamplifire.model.Room;
import com.example.djamplifire.repository.RoomRespository;
import com.example.djamplifire.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class RoomController {


    private RoomService roomService;

    @Autowired
    public RoomController(RoomService service){
        this.roomService = service;
    }

    //get all rooms
    @CrossOrigin("https://dj.tcon.app")
    @GetMapping("/rooms")
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();

    }

    @CrossOrigin("https://dj.tcon.app")
    @GetMapping("/rooms/{roomCode}")
    public Room getRoomByKey(@PathVariable("roomCode") String roomCode) {
        return roomService.getRoomByCode(roomCode);
    }

    //create a room
    @CrossOrigin("https://dj.tcon.app")
    @PostMapping("/rooms")
    public Room createRoom(@RequestBody Room room){
        return roomService.createRoom(room);
    }

    //delete room
    @CrossOrigin("https://dj.tcon.app")
    @DeleteMapping("rooms/{roomCode}")
    public void deleteRoom(@PathVariable("roomCode") String roomCode){
        this.roomService.deleteRoom(roomCode);
    }

    //update room
    @CrossOrigin("https://dj.tcon.app")
    @PutMapping("/rooms/{roomCode}")
    public Room updateRoom(@RequestBody Room room, @PathVariable("roomCode") String roomCode){

        this.roomService.updateRoom(room);
        return room;
    }


}
