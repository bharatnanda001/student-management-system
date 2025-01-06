package com.sms.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Student {
    @Id
    private int id;
    private String name;
    private String email;
    private String password;
    private String dob;
    private String gender;

    // Getters and Setters
}
