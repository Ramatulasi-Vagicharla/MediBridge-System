import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../room-service/room.model'; // Assuming you have a room model

@Injectable({
  providedIn: 'root'
})
export class AddRoomService {
   // Your backend endpoint
  private apiUrl = 'http://localhost:8080/api/rooms';
  constructor(private http: HttpClient) {}

  // Add a new room
  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  // Get all rooms (Optional for Room Management)
  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }
}
