package com.backend.proyecto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.proyecto.entity.VistaRecetaU;

@Repository("VistaRecetaURepository")
public interface VistaRecetaURepository extends JpaRepository<VistaRecetaU, Long> {

    List<VistaRecetaU> findByIdUsuario(Long idUsuario);
}
