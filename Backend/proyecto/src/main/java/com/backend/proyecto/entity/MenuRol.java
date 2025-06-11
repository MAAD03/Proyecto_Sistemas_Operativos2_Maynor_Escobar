package com.backend.proyecto.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "MENU_ROL")
@Data
public class MenuRol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_menurol", nullable = false)
    private Long idMenuRol;

    @Column(name = "id_rol", nullable = false)
    private Long idRol;

    @Column(name = "id_menu", nullable = false)
    private Long idMenu;
}
