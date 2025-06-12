package com.backend.proyecto.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "VISTA_RECETAS_POR_DOCTOR")
@Data
public class VistaRecetaD {

    @Id
    @Column(name = "id_recetas")
    private Long idRecetas;

    @Column(name = "id_doctor")
    private Long idDoctor;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "nombre_doctor")
    private String nombreDoctor;

    @Column(name = "apellido_doctor")
    private String apellidoDoctor;

    @Column(name = "id_usuario")
    private Long idUsuario;

    @Column(name = "nombre_usuario")
    private String nombreUsuario;

    @Column(name = "apellido_usuario")
    private String apellidoUsuario;
}
