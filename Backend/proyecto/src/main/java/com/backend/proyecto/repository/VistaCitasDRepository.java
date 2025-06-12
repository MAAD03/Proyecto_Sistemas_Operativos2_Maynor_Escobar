package com.backend.proyecto.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.proyecto.entity.VistaCitasD;

@Repository("VistaCitasDRepository")
public interface VistaCitasDRepository extends JpaRepository<VistaCitasD, Long> {

    List<VistaCitasD> findByIdDoctor(Long idDoctor);

}