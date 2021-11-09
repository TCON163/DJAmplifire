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

    @Column(name = "votes_to_skip")
    private int votesToSkip;

    @Column
    private String roomTitle;

    @Column
    private String roomToken;

    public Room() {

    }

    public Room(String roomCode, boolean guestCanPause, int votesToSkip) {

        this.roomCode = roomCode;
        this.guestCanPause = guestCanPause;
        this.votesToSkip = votesToSkip;
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

    public int getVotesToSkip() {
        return votesToSkip;
    }

    public void setVotesToSkip(int votesToSkip) {
        this.votesToSkip = votesToSkip;
    }
}
