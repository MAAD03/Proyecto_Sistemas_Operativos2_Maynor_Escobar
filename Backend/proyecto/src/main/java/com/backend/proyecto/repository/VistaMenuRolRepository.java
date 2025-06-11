package com.backend.proyecto.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.proyecto.entity.VistaMenuPorRol;

@Repository("vistamenuRepository")
public interface VistaMenuRolRepository extends JpaRepository<VistaMenuPorRol, Long> {

    List<VistaMenuPorRol> findByIdRol(Long idRol);

}
