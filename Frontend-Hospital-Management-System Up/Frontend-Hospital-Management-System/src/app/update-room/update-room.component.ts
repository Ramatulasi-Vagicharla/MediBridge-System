import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Import ActivatedRoute to get the ID and Router to navigate
import { RoomService } from '../room-service/room.service';
import { Room } from '../room-service/room.model';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
  roomId: number = 0;
  room: Room = { id: 0, type: '', capacity: 0, occupiedBeds: 0 };

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the room ID from the route parameter
    this.roomId = +this.route.snapshot.paramMap.get('id')!;
    this.loadRoomDetails();
  }

  loadRoomDetails(): void {
    this.roomService.getRoomById(this.roomId).subscribe(data => {
      this.room = data;
    });
  }

  updateRoom(): void {
    this.roomService.updateRoom(this.roomId, this.room).subscribe(() => {
      // After update, navigate back to Room Management page
      this.router.navigate(['/roommanagement']);
    });
  }
}
