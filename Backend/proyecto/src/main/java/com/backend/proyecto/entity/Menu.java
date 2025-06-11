package com.backend.proyecto.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "menu")
@Data
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_menu")
    private Long idMenu;

    @Column(name = "nombre_menu", length = 100, nullable = false)
    private String nombreMenu;

    @Column(name = "ruta_menu", length = 100, nullable = false)
    private String rutaMenu;
}
