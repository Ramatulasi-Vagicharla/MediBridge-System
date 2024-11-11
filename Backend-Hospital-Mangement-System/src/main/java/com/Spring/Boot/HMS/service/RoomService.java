package com.Spring.Boot.HMS.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Spring.Boot.HMS.entity.Room;
import com.Spring.Boot.HMS.repository.RoomRepo;

import java.util.List;

@Service
public class RoomService {
    @Autowired
    private RoomRepo roomRepository;

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    public Room getRoomById(int id) {
        return roomRepository.findById(id).orElseThrow(() -> new RuntimeException("Room not found"));
    }

    public void deleteRoom(int id) {
        Room room = roomRepository.findById(id).orElseThrow(() -> new RuntimeException("Room not found"));
        roomRepository.delete(room);
    }
    public List<Room> getRoomsByType(String type) {
        if (type != null && !type.isEmpty()) {
            return roomRepository.findByType(type);  // Filter rooms by type
        }
        return roomRepository.findAll();  // Return all rooms if no type is selected
    }
}

