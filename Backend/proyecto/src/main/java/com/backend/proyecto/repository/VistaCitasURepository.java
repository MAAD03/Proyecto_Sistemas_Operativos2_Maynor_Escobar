package com.backend.proyecto.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.proyecto.entity.VistaCitasU;

@Repository("VistaCitasURepository")
public interface VistaCitasURepository extends JpaRepository<VistaCitasU, Long> {

    List<VistaCitasU> findByIdUsuario(Long idUsuario);

}