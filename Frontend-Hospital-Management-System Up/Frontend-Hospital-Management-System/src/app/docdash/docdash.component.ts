// import { Component, OnInit } from '@angular/core';
// import { Patient } from '../patient';
// import { PatientService } from '../patient.service';
// import { Router } from '@angular/router';
// import { DocauthService } from '../docauth.service';

// @Component({
//   selector: 'app-docdash',
//   templateUrl: './docdash.component.html',
//   styleUrls: ['./docdash.component.css']
// })
// export class DocdashComponent implements OnInit {

//   patients: Patient[] = [];
//   loggedInDoctor: string | null = null;

//   constructor(
//     private patientService: PatientService,
//     private router: Router,
//     private docauthService: DocauthService
//   ) { }

//   ngOnInit(): void {
//     this.loggedInDoctor = this.docauthService.getLoggedInDoctor();
//     if (this.loggedInDoctor) {
//       this.getPatientsByDoctor(this.loggedInDoctor);
//     } else {
//       // Optional: Handle the case where the doctor is not logged in
//       console.error("No doctor is logged in!");
//       this.router.navigate(['/login']); // Redirect to login page if no doctor is logged in
//     }
//   }

//   getPatientsByDoctor(assignedDoctor: string): void {
//     this.patientService.getPatientsByDoctor(assignedDoctor).subscribe(data => {
//       this.patients = data;
//     }, error => {
//       console.error('Error fetching patients:', error);
//     });
//   }

//   update(id: number): void {
//     this.router.navigate(['update-patient', id]);
//   }

//   delete(id: number): void {
//     this.patientService.delete(id).subscribe(data => {
//       console.log(data);
//       this.getPatientsByDoctor(this.loggedInDoctor!); // Refresh the patient list
//     });
//   }

//   view(id: number): void {
//     this.router.navigate(['view-patient', id]);
//   }

//   logout(): void {
//     this.docauthService.logout();
//     this.router.navigate(['home']);
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient-service/patient';
import { PatientService } from '../patient-service/patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../doc-auth-service/docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent implements OnInit {

  patients: Patient[] = [];
  loggedInDoctor: string | null = null;

  constructor(
    private patientService: PatientService,
    private router: Router,
    private docauthService: DocauthService
  ) { }

  ngOnInit(): void {
    this.loggedInDoctor = this.docauthService.getLoggedInDoctor();
    if (this.loggedInDoctor) {
      this.getPatientsByDoctor(this.loggedInDoctor);
    } else {
      // Optional: Handle the case where the doctor is not logged in
      console.error("No doctor is logged in!");
      this.router.navigate(['/login']); // Redirect to login page if no doctor is logged in
    }
  }

  getPatientsByDoctor(assignedDoctor: string): void {
    this.patientService.getPatientsByDoctor(assignedDoctor).subscribe(data => {
      this.patients = data;
    }, error => {
      console.error('Error fetching patients:', error);
    });
  }

  update(id: number): void {
    this.router.navigate(['update-patient', id]);
  }

  delete(id: number): void {
    this.patientService.delete(id).subscribe(data => {
      console.log(data);
      this.getPatientsByDoctor(this.loggedInDoctor!); // Refresh the patient list
    });
  }

  view(id: number): void {
    this.router.navigate(['view-patient', id]);
  }

  logout(): void {
    this.docauthService.logout();
    this.router.navigate(['home']);
  }

}
