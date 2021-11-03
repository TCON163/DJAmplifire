package com.example.djamplifire.service;

import com.example.djamplifire.exception.ResourceNotFoundException;
import com.example.djamplifire.model.Room;
import com.example.djamplifire.repository.RoomRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    @Autowired
    private RoomRespository roomRespository;

    //get all rooms
    public List<Room> getAllRooms() {
       return roomRespository.findAll();
    }

    //get room by key
    public Room getRoomByCode(String key){

        return roomRespository.findById(key).orElseThrow(() -> new ResourceNotFoundException("Room code does not exist with :" + key));

    }

    //create room
    public Room createRoom(Room room){
        return roomRespository.save(room);
    }















    //new room code
    public static String newRoomKey () {
        String key = "";
        for (int i = 0; i < 6; i++) {
            int newLetter = ((int) (Math.random() * 26)) + 65;
            key = key + ((char) (newLetter));
        }
        return key;
    }

    public String getNewRoomKey(){

        String result = "";
        boolean keyNotUnique = true;
        while(keyNotUnique) {
            String key = newRoomKey();

            try {
                roomRespository.findById(key).orElseThrow(() -> new ResourceNotFoundException("Room code does not exist with :" + key));
            } catch (ResourceNotFoundException e) {
                result = key;
                keyNotUnique = false;
            }
        }

        return result;
    }



}
