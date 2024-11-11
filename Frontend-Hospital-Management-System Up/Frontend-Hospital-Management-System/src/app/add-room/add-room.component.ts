import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../room-service/room.service';  // Import the RoomService
import { Room } from '../room-service/room.model'; // Import the Room model
import { AddRoomService } from '../add-room-service/add-room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  roomTypes = ['General', 'ICU', 'Private', 'Shared'];  // Example room types
  roomAdded = false;  // Flag to show success message
  newRoom: Room = {
    id: 0,
    type: '',
    capacity: 0,
    occupiedBeds: 0
  };

  constructor(private roomService: AddRoomService, private router: Router) {}

  ngOnInit(): void {}

  
addRoom(): void {
  if (this.newRoom.type && this.newRoom.capacity > 0) {
    this.roomService.addRoom(this.newRoom).subscribe(
      response => {
        this.roomAdded = true; // Show success message
        console.log('Room added successfully:', response);
        this.newRoom = { id: 0, type: '', capacity: 0, occupiedBeds: 0 };
        // Redirect or show success message
      },
      error => {
        console.error('Error adding room:', error);
        // Handle the error properly
        alert('There was an error adding the room!');
      }
    );
  }
}

}
