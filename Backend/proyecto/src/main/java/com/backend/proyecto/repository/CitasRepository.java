package com.backend.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.proyecto.entity.Citas;

@Repository("citasRepository")
public interface CitasRepository extends JpaRepository<Citas, Long> {

}
