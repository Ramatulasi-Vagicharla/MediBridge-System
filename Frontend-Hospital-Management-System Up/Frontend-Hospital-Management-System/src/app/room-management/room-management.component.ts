// // room-management.component.ts
// import { Component, OnInit } from '@angular/core';
// import { RoomService } from '../room.service';
// import { Room } from '../room.model';


// @Component({
//   selector: 'app-room-management',
//   templateUrl: './room-management.component.html',
//   styleUrls: ['./room-management.component.css']
// })
// export class RoomManagementComponent implements OnInit {
//   rooms: Room[] = [];

//   constructor(private roomService: RoomService) {}

//   ngOnInit(): void {
//     this.loadRooms();
//   }

//   loadRooms(): void {
//     this.roomService.getRooms().subscribe(data => {
//       this.rooms = data;
//     });
//   }

//   createRoom(): void {
//     const newRoom: Room = { id: 0, type: 'General', capacity: 10, occupiedBeds: 0 };
//     this.roomService.createRoom(newRoom).subscribe(() => {
//       this.loadRooms();
//     });
//   }

//   updateRoom(id: number): void {
//     const updatedRoom: Room = { id, type: 'ICU', capacity: 5, occupiedBeds: 2 };
//     this.roomService.updateRoom(id, updatedRoom).subscribe(() => {
//       this.loadRooms();
//     });
//   }

//   deleteRoom(id: number): void {
//     this.roomService.deleteRoom(id).subscribe(() => {
//       this.loadRooms();
//     });
//   }
// }
// room-management.component.ts
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
