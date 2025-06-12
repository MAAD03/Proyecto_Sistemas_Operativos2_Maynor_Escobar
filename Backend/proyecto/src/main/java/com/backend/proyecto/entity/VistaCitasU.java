package com.backend.proyecto.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "VISTA_CITAS_POR_USUARIO")
@Data
public class VistaCitasU {

    @Id
    @Column(name = "id_citas")
    private Long idCitas;

    @Column(name = "id_usuario")
    private Long idUsuario;

    @Column(name = "fecha")
    private LocalDate fecha;

    @Column(name = "hora")
    private LocalTime hora;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "nombre_usuario")
    private String nombreUsuario;

    @Column(name = "apellido_usuario")
    private String apellidoUsuario;

    @Column(name = "id_doctor")
    private Long idDoctor;

    @Column(name = "nombre_doctor")
    private String nombreDoctor;

    @Column(name = "apellido_doctor")
    private String apellidoDoctor;
}
