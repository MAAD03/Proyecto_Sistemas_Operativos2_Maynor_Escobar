package com.backend.proyecto.entity;

import java.time.LocalTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "citas")
@Data
public class Citas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_citas", nullable = false)
    private Long idCitas;

    @Column(name = "fecha", nullable = true)
    private Date fechaCitas;

    @Column(name = "hora", nullable = true)
    private LocalTime horaCitas;

    @Column(name = "descripcion", length = 255, nullable = true)
    private String descripcionCitas;

    @Column(name = "id_user", nullable = false)
    private Long idUsuario;

    @Column(name = "id_doctor", nullable = false)
    private Long idDoctor;

}
