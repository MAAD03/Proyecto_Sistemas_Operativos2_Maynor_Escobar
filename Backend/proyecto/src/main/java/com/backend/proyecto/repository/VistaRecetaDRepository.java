package com.backend.proyecto.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.proyecto.entity.VistaRecetaD;

@Repository("VistaRecetaDRepository")
public interface VistaRecetaDRepository extends JpaRepository<VistaRecetaD, Long> {

    List<VistaRecetaD> findByIdDoctor(Long idDoctor);

}
