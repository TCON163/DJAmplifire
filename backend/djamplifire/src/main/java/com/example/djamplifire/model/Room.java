package com.example.djamplifire.model;

import com.example.djamplifire.Utils.RoomKeyGenerator;

import javax.persistence.*;
import java.util.UUID;


@Entity
@Table(name = "rooms")
public class Room {

    @Id
    private String roomCode;

    @Column(name = "guest_can_pause")
    private boolean guestCanPause;

    @Column
    private String roomTitle;

    @Column
    private String roomToken;

    @Column
    private int numberOfSkips;


    public Room() {

    }

    public Room(String roomCode, boolean guestCanPause) {

        this.roomCode = roomCode;
        this.guestCanPause = guestCanPause;

    }

    public int getNumberOfSkips() {
        return numberOfSkips;
    }

    public void setNumberOfSkips(int numberOfSkips) {
        this.numberOfSkips = numberOfSkips;
    }

    public String getRoomTitle() {
        return roomTitle;
    }

    public String getRoomToken() {
        return roomToken;
    }

    public void setRoomTitle(String roomTitle) {
        this.roomTitle = roomTitle;
    }

    public void setRoomToken(String roomToken) {
        this.roomToken = roomToken;
    }

    public String getRoomCode() {
        return roomCode;
    }

    public void setRoomCode(String roomCode) {
        this.roomCode = roomCode;
    }


    public boolean isGuestCanPause() {
        return guestCanPause;
    }

    public void setGuestCanPause(boolean guestCanPause) {
        this.guestCanPause = guestCanPause;
    }

}
