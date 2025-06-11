package com.backend.proyecto.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "recetas")
@Data
public class Recetas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_recetas", nullable = false)
    private Long idRecetas;

    @Column(name = "descripcion", length = 255, nullable = true)
    private String descripcionRecetas;

    @Column(name = "id_usuario", nullable = false)
    private Long idUsuario;

    @Column(name = "id_doctor", nullable = false)
    private Long idDoctor;
}
