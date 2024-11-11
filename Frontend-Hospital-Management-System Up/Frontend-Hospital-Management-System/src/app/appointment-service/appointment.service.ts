import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = "http://localhost:8080/api/v2/appointments"; // Base URL for your API

  constructor(private httpClient: HttpClient) { }

  // Get all appointments
  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }

  // Get appointment by ID
  getAppointmentById(id: number): Observable<Appointment> {
    return this.httpClient.get<Appointment>(`${this.baseUrl}/${id}`);
  }

  // Create a new appointment
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(this.baseUrl, appointment);
  }

  // Update an existing appointment by ID
  updateAppointment(id: number, appointment: Appointment): Observable<Appointment> {
    return this.httpClient.put<Appointment>(`${this.baseUrl}/${id}`, appointment);
  }

  // Delete an appointment by ID
  deleteAppointment(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  // Get appointments by assigned doctor
  getAppointmentsByDoctor(doctorName: string): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}/assignedDoctor/${doctorName}`);
  }
  updateAppointmentStatus(appointmentId: number, status: boolean) {
    return this.httpClient.put(`${this.baseUrl}/${appointmentId}/status`, { status });
  }

  
}
