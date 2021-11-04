package com.example.djamplifire.Utils;

/**
 * This class is a static generator for a room key, for the time being it generates a key at random,
 * in the future it can make sure the room key is not in use.
 *
 * @author Chris Oh
 * @version 1.0
 * @since 11/2/2021
 */
public class RoomKeyGenerator {
    /*
    This is the method that makes a new room key (6 capital letters)
     */
    public static String newRoomKey () {
        String key = "";
        for (int i = 0; i < 6; i++) {
            int newLetter = ((int) (Math.random() * 26)) + 65;
            key = key + ((char) (newLetter));
        }
        return key;
    }

    public void checkRoomKey(){
        
    }
}
