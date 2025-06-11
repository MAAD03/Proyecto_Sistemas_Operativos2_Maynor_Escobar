package com.backend.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.proyecto.entity.MenuRol;

@Repository("menurolRepository")
public interface MenuRolRepository extends JpaRepository<MenuRol, Long> {

}
