import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../appointment-service/appointment';
import { AppointmentService } from '../appointment-service/appointment.service';

@Component({
    selector: 'app-edit-appointment',
    templateUrl: './edit-appointment.component.html',
    styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
    appointment: Appointment = new Appointment();
    id!: number; // ID of the appointment to edit

    constructor(
        private appointmentService: AppointmentService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id')!; // Get the appointment ID from the route
        this.loadAppointment();
    }

    loadAppointment() {
        this.appointmentService.getAppointmentById(this.id).subscribe(data => {
            this.appointment = data; // Load the appointment data
        }, error => {
            console.error("Error loading appointment!", error);
        });
    }

    onSubmit() {
        // Call the updateAppointment method and pass the id and appointment object
        this.appointmentService.updateAppointment(this.id, this.appointment).subscribe(
            data => {
                console.log("Appointment updated successfully!", data);
                this.goToAppointmentList();
            },
            error => {
                console.error("Error updating appointment!", error);
            }
        );
    }

    goToAppointmentList() {
        this.router.navigate(['/appointmentlist']); // Navigate back to the appointment list
    }
}
