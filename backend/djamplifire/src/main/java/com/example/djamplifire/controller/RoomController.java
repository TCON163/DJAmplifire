package com.example.djamplifire.controller;

import com.example.djamplifire.model.Room;
import com.example.djamplifire.repository.RoomRespository;
import com.example.djamplifire.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class RoomController {

    @Autowired
    private RoomService roomService;

    //get all rooms
    @GetMapping("/rooms")
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();

    }

    //create a room
    @PostMapping("/rooms")
    public Room createRoom(@RequestBody Room room){
        return roomService.createRoom(room);
    }

    //delete room
    @DeleteMapping("rooms/{roomCode}")
    public void deleteRoom(@PathVariable("roomCode") String roomCode){
        this.roomService.deleteRoom(roomCode);
    }

    //update room
    @PutMapping("/rooms/{roomCode}")
    public Room updateRoom(@RequestBody Room room, @PathVariable("roomCode") String roomCode){

        this.roomService.updateRoom(room, roomCode);
        return room;
    }


}
