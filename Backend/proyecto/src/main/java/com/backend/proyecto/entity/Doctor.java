package com.backend.proyecto.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "doctor")
@Data

public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_doctor")
    private Long idDoctor;

    @Column(name = "correo", length = 100, nullable = false)
    private String correoDoctor;

    @Column(name = "contrasena", length = 255, nullable = false)
    private String contrasenaDoctor;

    @Column(name = "nombre", length = 100, nullable = true)
    private String nombreDoctor;

    @Column(name = "apellido", length = 100, nullable = true)
    private String apellidoDoctor;

    @Column(name = "dpi", length = 30, nullable = true)
    private String dpiDoctor;

    @Column(name = "no_colegiado", length = 50, nullable = true)
    private String colegiadoDoctor;

    @Column(name = "id_rol")
    private Long idRol;
}
