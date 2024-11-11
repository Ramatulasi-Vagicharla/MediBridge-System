
// import { Component } from '@angular/core';
// import { PatientService } from '../patient.service';
// import { ActivatedRoute } from '@angular/router';
// import { Patient } from '../patient';
// import emailjs from 'emailjs-com'

// @Component({
//   selector: 'app-view-patient',
//   templateUrl: './view-patient.component.html',
//   styleUrls: ['./view-patient.component.css'] // Fix 'styleUrl' to 'styleUrls'
// })
// export class ViewPatientComponent {
  
//   id: number = 0;
//   patient: Patient = new Patient();
//   userEmail: string = ''; 

//   constructor(private patientService: PatientService, private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];
//     this.patientService.getPatientById(this.id).subscribe(data => {
//       this.patient = data;
//     });
//   }

//   downloadReport() {
//     // Prepare report content
//     const reportContent = `
//       Patient ID: ${this.patient.id}
//       Name: ${this.patient.name}
//       Age: ${this.patient.age}
//       Blood Group: ${this.patient.blood}
//       Prescription: ${this.patient.prescription}
//       Dose: ${this.patient.dose}
//       Fees: ${this.patient.fees}
//     `;

//     // Create a Blob from the report content
//     const blob = new Blob([reportContent], { type: 'text/plain' });

//     // Create a link element
//     const link = document.createElement('a');
//     const url = window.URL.createObjectURL(blob);
//     link.href = url;
//     link.download = `patient_report_${this.patient.id}.txt`; // Specify the file name dynamically using patient ID

//     // Append to the body
//     document.body.appendChild(link);

//     // Programmatically click the link to trigger the download
//     link.click();

//     // Clean up and remove the link
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
//   }
//   sendEmailReport() {
//     const templateParams = {
//       to_name: this.patient.name,
//       to_email: this.userEmail, // Use the user's input email
//       patient_id: this.patient.id,
//       age: this.patient.age,
//       blood_group: this.patient.blood,
//       prescription: this.patient.prescription,
//       dose: this.patient.dose,
//       fees: this.patient.fees
//     };
//     console.log(templateParams); // Debugging line
    
    
//     emailjs.send('service_1', 'template_buefqtc', templateParams, 'Dq9jD-i0oqvri6kNg')
//       .then((response) => {
//         alert('Email sent successfully!');
//       }, (err) => {
//         alert('Failed to send email. Please try again.');
//         console.error(err);
//       });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient-service/patient.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient-service/patient';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  
  id: number = 0;
  patient: Patient = new Patient();
  userEmail: string = ''; 
  needScan: boolean = false;
  scanType: string = ''; // New property for scan type
  doctor1: boolean = false;
  doctor2: boolean = false;
  doctor3: boolean = false;

  constructor(private patientService: PatientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    });
  }

  downloadReport() {
    let reportContent = `
      Patient ID: ${this.patient.id}
      Name: ${this.patient.name}
      Age: ${this.patient.age}
      Blood Group: ${this.patient.blood}
      Prescription: ${this.patient.prescription}
      Dose: ${this.patient.dose}
      Fees: ${this.patient.fees}
    `;

    if (this.needScan) {
      reportContent +=  `\nNeed Scan: Yes\nType of Scan: ${this.scanType}\nReferred Doctors:\n`;
      if (this.doctor1) reportContent += `- Dr. Smith\n`;
      if (this.doctor2) reportContent += `- Dr. Johnson\n`;
      if (this.doctor3) reportContent += `- Dr. Williams\n`;
    } else {
      reportContent += `\nNeed Scan: No\n`;
    }

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const link = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = `patient_report_${this.patient.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  sendEmailReport() {
    const templateParams = {
      to_name: this.patient.name,
      to_email: this.userEmail,
      patient_id: this.patient.id,
      age: this.patient.age,
      blood_group: this.patient.blood,
      prescription: this.patient.prescription,
      dose: this.patient.dose,
      fees: this.patient.fees,
      need_scan: this.needScan ? 'Yes' : 'No',
      scan_type: this.scanType,
      referred_doctors: this.getReferredDoctors()
    };

    emailjs.send('service_1', 'template_buefqtc', templateParams, 'Dq9jD-i0oqvri6kNg')
      .then((response) => {
        alert('Email sent successfully!');
      }, (err) => {
        alert('Failed to send email. Please try again.');
        console.error(err);
      });
  }

  private getReferredDoctors(): string {
    const doctors = [];
    if (this.doctor1) doctors.push('Dr. Smith');
    if (this.doctor2) doctors.push('Dr. Johnson');
    if (this.doctor3) doctors.push('Dr. Williams');
    return doctors.length > 0 ? doctors.join(', ') : 'None';
  }
}
