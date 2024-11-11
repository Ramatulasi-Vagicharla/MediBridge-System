
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room.model'; // Ensure you have the room.model.ts file

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:8080/api/rooms';  // Backend API URL

  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }
  
  getRoomsByType(type?: string): Observable<Room[]> {
    let params = new HttpParams();
    if (type) {
      params = params.set('type', type);  // Add type parameter if provided
    }
    return this.http.get<Room[]>(`${this.apiUrl}/filter`, { params });
  }
  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${id}`);
  }

  createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  
  updateRoom(roomId: number, updatedRoom: Room): Observable<Room> {
    return this.http.put<Room>(`${this.apiUrl}/${roomId}`, updatedRoom);
  }
  

  deleteRoom(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
