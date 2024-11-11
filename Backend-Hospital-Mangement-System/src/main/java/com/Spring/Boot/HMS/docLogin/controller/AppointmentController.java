package com.Spring.Boot.HMS.docLogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Spring.Boot.HMS.docLogin.entity.Appointment;
import com.Spring.Boot.HMS.docLogin.repository.AppointmentRespo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class AppointmentController {

    @Autowired
    AppointmentRespo respo;

    @PostMapping("/appointments")
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return respo.save(appointment);
    }

    @GetMapping("/appointments")
    public List<Appointment> getAllAppointments() {
        return respo.findAll();
    }

    @GetMapping("/appointments/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable Long id) throws AttributeNotFoundException {
        Appointment appointment = respo.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Appointment not found with id " + id));
        return ResponseEntity.ok(appointment);
    }

    @PutMapping("/appointments/{id}")
    public ResponseEntity<Appointment> updateAppointment(@PathVariable Long id, @RequestBody Appointment appointmentDetails) throws AttributeNotFoundException {
        Appointment appointment = respo.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Appointment not found with id " + id));

        // Update the appointment details
        appointment.setName(appointmentDetails.getName());
        appointment.setAge(appointmentDetails.getAge());
        appointment.setSymptoms(appointmentDetails.getSymptoms());
        appointment.setAppointmentDate(appointmentDetails.getAppointmentDate());
        appointment.setAssignedDoctor(appointmentDetails.getAssignedDoctor());
        appointment.setStatus(appointmentDetails.isStatus());

        // Save the updated appointment
        Appointment updatedAppointment = respo.save(appointment);
        return ResponseEntity.ok(updatedAppointment);
    }

    @PutMapping("/appointments/{id}/status")
    public ResponseEntity<Void> updateAppointmentStatus(@PathVariable Long id, @RequestBody Map<String, Boolean> status) throws AttributeNotFoundException {
        Appointment appointment = respo.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Appointment not found with id " + id));
        
        // Update only the status field
        appointment.setStatus(status.get("status"));
        respo.save(appointment);
        
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/appointments/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable Long id) throws AttributeNotFoundException {
        Appointment appointment = respo.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Appointment not found with id " + id));

        respo.delete(appointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/assignedDoctor/{doctorName}")
    public List<Appointment> getAppointmentsByDoctor(@PathVariable String doctorName) {
        return respo.findByAssignedDoctor(doctorName);
    }
}
