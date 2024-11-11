package com.Spring.Boot.HMS.repository;


import java.util.List;

// RoomRepository.java

import org.springframework.data.jpa.repository.JpaRepository;

import com.Spring.Boot.HMS.entity.Room;

public interface RoomRepo extends JpaRepository<Room, Integer> {
    List<Room> findByType(String type);
}
