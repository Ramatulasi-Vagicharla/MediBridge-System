package com.Spring.Boot.HMS.docLogin.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private String age;

    @Column(name = "symptoms")
    private String symptoms;

    @Column(name = "appointment_date") // New date field
    private LocalDate appointmentDate; // Using LocalDate for the date

    @Column(name = "assigned_doctor") // New field for assigned doctor
    private String assignedDoctor; // Field to store assigned doctor's name

    @Column(nullable = false)
    private boolean status;
    
    public Appointment() {
        
    }

    public Appointment(String name, String age, String symptoms, LocalDate appointmentDate, String assignedDoctor, boolean status) { // Updated constructor
        super();
        this.name = name;
        this.age = age;
        this.symptoms = symptoms;
        this.appointmentDate = appointmentDate; // New field
        this.assignedDoctor = assignedDoctor; // New field
        this.status=status;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public LocalDate getAppointmentDate() { // Getter for appointment date
        return appointmentDate; // New field
    }

    public void setAppointmentDate(LocalDate appointmentDate) { // Setter for appointment date
        this.appointmentDate = appointmentDate; // New field
    }

    public String getAssignedDoctor() { // Getter for assigned doctor
        return assignedDoctor; // New field
    }

    public void setAssignedDoctor(String assignedDoctor) { // Setter for assigned doctor
        this.assignedDoctor = assignedDoctor; // New field
    }
}
