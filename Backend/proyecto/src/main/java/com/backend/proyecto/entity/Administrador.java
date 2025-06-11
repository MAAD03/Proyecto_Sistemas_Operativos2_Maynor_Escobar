package com.backend.proyecto.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "administrador")
@Data
public class Administrador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_administrador")
    private Long idAdministrador;

    @Column(name = "correo", length = 100, nullable = false)
    private String correoAdministrador;

    @Column(name = "contrasena", length = 255, nullable = false)
    private String contrasenaAdministrador;

    @Column(name = "id_rol", nullable = false)
    private Long idRol;
}
