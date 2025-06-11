package com.backend.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.proyecto.entity.Rol;

@Repository("rolRepository")
public interface RolRepository extends JpaRepository<Rol, Long> {

}