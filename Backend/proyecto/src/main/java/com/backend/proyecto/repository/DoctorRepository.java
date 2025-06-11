package com.backend.proyecto.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.proyecto.entity.Doctor;

@Repository("doctorRepository")
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    List<Doctor> findByCorreoDoctorAndContrasenaDoctor(String correoDoctor, String contrasenaDoctor);

}