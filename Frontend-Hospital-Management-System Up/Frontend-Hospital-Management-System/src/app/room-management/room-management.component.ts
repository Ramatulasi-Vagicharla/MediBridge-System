
import { Component, OnInit } from '@angular/core';
import { Room } from '../room-service/room.model';
import { RoomService } from '../room-service/room.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.css']
})
export class RoomManagementComponent implements OnInit {
  rooms: Room[] = [];
  roomTypes = ['General', 'ICU', 'Private', 'Shared'];  // Example room types
  selectedRoomType: string = '';

  constructor(private roomService: RoomService,private router: Router,private location: Location) {}

  ngOnInit(): void {
    this.loadRoomsByType();
  }

  loadRoomsByType(): void {
    this.roomService.getRoomsByType(this.selectedRoomType).subscribe(data => {
      this.rooms = data;
    });
  }

  

  deleteRoom(id: number): void {
    this.roomService.deleteRoom(id).subscribe(() => {
      this.loadRoomsByType();  // Reload rooms after deletion
    });
  }
  updateRoom(id: number): void {
    this.router.navigate(['/update-room', id]);  // Navigate to the update page with the room ID
  }
  onFilterChange(): void {
    this.loadRoomsByType();  // Reload rooms when the filter changes
  }
  // When a room is updated successfully, navigate back to the Room Management page
  
  
}
