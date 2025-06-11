package com.backend.proyecto.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.proyecto.entity.Administrador;

@Repository("administradorRepository")
public interface AdministradorRepository extends JpaRepository<Administrador, Long> {

    List<Administrador> findByCorreoUsuarioAndPasswordAdministradors(String correoAdministrador,
            String contrasenaAdministrador);

}
