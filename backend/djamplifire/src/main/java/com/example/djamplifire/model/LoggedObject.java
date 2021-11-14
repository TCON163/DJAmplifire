package com.example.djamplifire.model;


import javax.persistence.*;

@Entity
public class LoggedObject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private Integer threshold;

    @Column(columnDefinition = "varchar(20000)")
    private String message;

    @Column
    private String dateTime;

    public LoggedObject() {
    }

    public LoggedObject(String dateTime, String message, int threshold) {
        this.dateTime = dateTime;
        this.message = message;
        this.threshold = threshold;
    }

    public Integer getThreshold() {
        return threshold;
    }

    public void setThreshold(Integer threshold) {
        this.threshold = threshold;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
