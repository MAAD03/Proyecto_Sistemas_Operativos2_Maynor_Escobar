package com.backend.proyecto.entity;

import java.util.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "usuario")
@Data

public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Long idUsuario;

    @Column(name = "correo", length = 100, nullable = false)
    private String correoUsuario;

    @Column(name = "contrasena", length = 255, nullable = false)
    private String contrasenaUsuario;

    @Column(name = "nombre", length = 100, nullable = true)
    private String nombreUsuario;

    @Column(name = "apellido", length = 100, nullable = true)
    private String apellidoUsuario;

    @Column(name = "fecha_nacimiento")
    private Date fechaNacimiento;

    @Column(name = "dpi", length = 30, nullable = true)
    private String dpiUsuario;

    @Column(name = "telefono", length = 30, nullable = true)
    private String telefonoUsuario;

    @Column(name = "genero", length = 30, nullable = true)
    private String generoUsuario;

    @Column(name = "direccion", length = 255, nullable = true)
    private String direccionUsuario;

    @Column(name = "id_rol", nullable = false)
    private Long idRol;
}
