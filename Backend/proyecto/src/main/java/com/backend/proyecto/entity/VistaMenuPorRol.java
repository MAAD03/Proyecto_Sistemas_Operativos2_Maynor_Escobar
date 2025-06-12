package com.backend.proyecto.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "VISTA_MENUS_POR_ROL")
@Data
public class VistaMenuPorRol {

    @Id
    @Column(name = "id_menu")
    private Long idMenu;

    @Column(name = "id_rol")
    private Long idRol;

    @Column(name = "nombre_rol")
    private String nombreRol;

    @Column(name = "nombre_menu")
    private String nombreMenu;

    @Column(name = "ruta_menu")
    private String rutaMenu;
}
