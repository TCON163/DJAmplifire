package com.example.djamplifire.model;

import javax.persistence.*;
import java.util.UUID;


@Entity
@Table(name = "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "room_code")
    private UUID roomCode;

    @Column(name = "guest_can_pause")
    private boolean guestCanPause;

    @Column(name = "votes_to_skip")
    private int votesToSkip;

    public Room() {

    }


    public Room( boolean guestCanPause, int votesToSkip) {
       super();
        this.roomCode = UUID.randomUUID();
        this.guestCanPause = guestCanPause;
        this.votesToSkip = votesToSkip;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public UUID getRoomCode() {
        return roomCode;
    }

    public void setRoomCode(UUID roomCode) {
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
