import { Component } from '@angular/core';
import { PatientService } from '../patient-service/patient.service';
import { Patient } from '../patient-service/patient';
import { Router } from '@angular/router';
import { AdminauthService } from '../admin-auth-service/adminauth.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {

  patients: Patient[] = [];
  doctors: string[] = [
    'Dr. Akshaya (General Medicine)', 
    'Dr. Tulasi (Dermatologist)', 
    'Dr. Vinutna (Cardiologist)'
  ];  // List of doctors
  selectedDoctor: string = ''; // Store the selected doctor

  constructor(
    private patientService: PatientService,
    private adminauthService: AdminauthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPatients();  // Get all patients initially
  }

  // Fetch all patients
  getPatients(): void {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    });
  }

  // Fetch patients by assigned doctor
  getPatientsByDoctor(): void {
    if (this.selectedDoctor) {
      this.patientService.getPatientsByDoctor(this.selectedDoctor).subscribe(data => {
        this.patients = data;
      });
    } else {
      this.getPatients(); // If no doctor is selected, get all patients
    }
  }

  // Delete a patient by ID
  delete(id: number): void {
    this.patientService.delete(id).subscribe(() => {
      console.log('Patient deleted');
      this.getPatients(); // Refresh the list
    });
  }

  // Handle logout
  logout(): void {
    this.adminauthService.logout();
    this.router.navigate(['home']);
  }
}

