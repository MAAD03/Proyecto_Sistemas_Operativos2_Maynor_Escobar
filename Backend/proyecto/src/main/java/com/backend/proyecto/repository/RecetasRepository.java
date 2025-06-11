package com.backend.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.proyecto.entity.Recetas;

@Repository("recetasRepository")
public interface RecetasRepository extends JpaRepository<Recetas, Long> {

}
