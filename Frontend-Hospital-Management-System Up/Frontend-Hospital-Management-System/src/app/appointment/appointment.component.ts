import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment-service/appointment.service';
import { Appointment } from '../appointment-service/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = []; // Array to store filtered appointments
  //doctors: string[] = []; // Array to hold unique doctor names for dropdown
  selectedDoctor: string = ''; // Holds the selected doctor's name for filtering
  doctors: string[] = ['Dr. Akshaya (General Medicine)', 'Dr. Tulasi (Dermatologist)', 'Dr. Vinutna (Cardiologist)'];
  constructor(private appointmentService: AppointmentService, private router: Router) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  // Fetch all appointments and filter by status = 0
  getAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments = data;
      this.filteredAppointments = this.appointments.filter(appointment => appointment.status === false); // Filter appointments with status = 0
      this.extractUniqueDoctors(); // Get unique doctor names for the filter dropdown
    });
  }

  // Extract unique doctor names from appointments for the dropdown filter
  extractUniqueDoctors(): void {
    // You can choose to just display the predefined list of doctors
    // or use the appointments data to filter out any doctor with appointments.
    const doctorSet = new Set<string>(this.doctors); // Set initial doctors list
    
    this.filteredAppointments.forEach(appointment => {
      if (appointment.assignedDoctor) {
        doctorSet.add(appointment.assignedDoctor); // Add any doctor who has an appointment
      }
    });

    this.doctors = Array.from(doctorSet); // Convert Set to Array
  }

  // Filter appointments by selected doctor
  getAppointmentsByDoctor(): void {
    if (this.selectedDoctor) {
      // Filter appointments based on the selected doctor and status = 0
      this.filteredAppointments = this.appointments.filter(
        appointment => appointment.assignedDoctor === this.selectedDoctor && appointment.status === false
      );
    } else {
      // If no doctor is selected, show all appointments with status = 0
      this.filteredAppointments = this.appointments.filter(appointment => appointment.status === false);
    }
  }

  // Delete an appointment by ID
  delete(id: number): void {
    this.appointmentService.deleteAppointment(id).subscribe(() => {
      this.getAppointments(); // Refresh the list after deletion
    });
  }

  // Edit an appointment by ID
  editAppointment(id: number): void {
    this.router.navigate(['/edit-appointment', id]); // Navigate to the edit route, passing the ID
  }

  // Logout
  logout(): void {
    this.router.navigate(['home']); // Navigate to home on logout
  }
}
