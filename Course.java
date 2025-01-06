package com.sms.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {
    @Id
    private int id;
    private String courseName;
    private String description;

    // Getters and Setters
}
