package com.Spring.Boot.HMS.controller;


import com.Spring.Boot.HMS.entity.Room;
import com.Spring.Boot.HMS.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/rooms")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @GetMapping
    public List<Room> getRooms() {
        return roomService.getAllRooms();
    }

    @GetMapping("/{id}")
    public Room getRoomById(@PathVariable int id) {
        return roomService.getRoomById(id);
    }

    @GetMapping("/filter")
    public List<Room> getRooms(@RequestParam(required = false) String type) {
        return roomService.getRoomsByType(type);  // Fetch rooms filtered by type if provided
    }
    @PostMapping
    public ResponseEntity<Room> createRoom(@RequestBody Room room) {
        Room savedRoom = roomService.saveRoom(room);
        return ResponseEntity.ok(savedRoom);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable int id, @RequestBody Room room) {
        Room existingRoom = roomService.getRoomById(id);
        existingRoom.setType(room.getType());
        existingRoom.setCapacity(room.getCapacity());
        existingRoom.setOccupiedBeds(room.getOccupiedBeds());
        Room updatedRoom = roomService.saveRoom(existingRoom);
        return ResponseEntity.ok(updatedRoom);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoom(@PathVariable int id) {
        roomService.deleteRoom(id);
        return ResponseEntity.noContent().build();
    }
}
