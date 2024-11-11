package com.Spring.Boot.HMS.docLogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.Spring.Boot.HMS.docLogin.entity.Appointment;

import java.util.List;

@Repository
public interface AppointmentRespo extends JpaRepository<Appointment, Long> {

    // Custom query to find appointments by assigned doctor
    List<Appointment> findByAssignedDoctor(String assignedDoctor);
}
