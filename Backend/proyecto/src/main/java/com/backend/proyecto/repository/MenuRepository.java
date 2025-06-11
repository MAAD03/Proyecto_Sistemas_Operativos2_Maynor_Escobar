package com.backend.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.proyecto.entity.Menu;

@Repository("menuRepository")
public interface MenuRepository extends JpaRepository<Menu, Long> {

}
