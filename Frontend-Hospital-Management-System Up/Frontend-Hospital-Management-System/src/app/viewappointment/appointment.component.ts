// // import { Component } from '@angular/core';
// // import { AppointmentService } from '../appointment.service';
// // import { Appointment } from '../appointment';

// // @Component({
// //   selector: 'app-appointment',
// //   templateUrl: './appointment.component.html',
// //   styleUrl: './appointment.component.css'
// // })
// // export class ViewAppointmentComponent {

// //   appointments:Appointment[]=[];
// //   constructor(private appointmentService:AppointmentService){}

// //   ngOnInit():void{

// //     this.getAppointments();
// //   }
// //   getAppointments(){

// //     this.appointmentService.getAllAppointmets().subscribe(data=>{

// //       this.appointments=data;
      
// //     })

// //   }

// //   delete(id:number){

// //     this.appointmentService.deleteAppointment(id).subscribe(data=>{
// //       console.log(data);
// //       this.getAppointments();
// //     })
// //   }

// // }
// import { Component, OnInit } from '@angular/core';  // Import OnInit for lifecycle hooks
// import { AppointmentService } from '../appointment.service';
// import { Appointment } from '../appointment';

// @Component({
//   selector: 'app-view-appointment', // Changed selector to be more descriptive
//   templateUrl: './appointment.component.html',
//   styleUrls: ['./appointment.component.css'] // Fixed 'styleUrl' to 'styleUrls'
// })
// export class ViewAppointmentComponent implements OnInit { // Implementing OnInit

//   appointments: Appointment[] = [];

//   constructor(private appointmentService: AppointmentService) { }

//   ngOnInit(): void {
//     this.getAppointments();
//   }

//   getAppointments(): void {
//     this.appointmentService.getAllAppointmets().subscribe(
//       (data: Appointment[]) => {
//         this.appointments = data;
//       },
//       (error) => {
//         console.error('Error fetching appointments:', error); // Error handling
//       }
//     );
//   }

//   delete(id: number): void {
//     this.appointmentService.deleteAppointment(id).subscribe(
//       () => {
//         this.getAppointments(); // Refresh the list after deletion
//       },
//       (error) => {
//         console.error('Error deleting appointment:', error); // Error handling
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment-service/appointment.service';
import { Appointment } from '../appointment-service/appointment';
import { DocauthService } from '../doc-auth-service/docauth.service';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  loggedInDoctor: string|null = null; // Store the logged-in doctor's username

  constructor(private appointmentService: AppointmentService, private authService: DocauthService) {}

  ngOnInit(): void {
    this.loggedInDoctor = this.authService.getLoggedInDoctor(); // Get the logged-in doctor's username
    this.loadAppointments();
  }

  // loadAppointments() {
  //   this.appointmentService.getAllAppointments().subscribe((data: Appointment[]) => {
  //     // Filter appointments based on the assigned doctor
  //     this.appointments = data.filter(appointment => appointment.assignedDoctor === this.loggedInDoctor);
  //   });
  // }
  loadAppointments() {
    this.appointmentService.getAllAppointments().subscribe((data) => {
        this.appointments = (data as Appointment[]).filter(
            (appointment) => appointment.assignedDoctor === this.loggedInDoctor
        );
    });
}


  delete(appointmentId: number) {
    this.appointmentService.deleteAppointment(appointmentId).subscribe(() => {
      this.loadAppointments(); // Reload appointments after deletion
    });
  }
  updateStatus(appointmentId: number, status: boolean): void {
    this.appointmentService.updateAppointmentStatus(appointmentId, status).subscribe({
      next: () => console.log("Status updated successfully"),
      error: (err) => console.error("Error updating status:", err)
    });
  }
}
