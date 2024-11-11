import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = "http://localhost:8080/api/v1/patients";

  constructor(private httpClient: HttpClient) { }

  // Get all patients
  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  // Get patients assigned to a specific doctor
  getPatientsByDoctor(assignedDoctor: string): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}/assignedDoctor/${assignedDoctor}`);
  }

  // Delete patient by ID
  delete(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  // Create a new patient
  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseUrl}`, patient);
  }

  // Get patient by ID
  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  // Update patient by ID
  updatePatient(id: number, patient: Patient): Observable<object> {
    return this.httpClient.put<Patient>(`${this.baseUrl}/${id}`, patient);
  }
}
