package com.Spring.Boot.HMS.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


import java.util.List;

import com.Spring.Boot.HMS.entity.Patient;

public interface PatientRepo extends JpaRepository<Patient, Long> {
    List<Patient> findByAssignedDoctor(String assignedDoctor);
}