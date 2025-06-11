package com.backend.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.proyecto.entity.Doctor;
import com.backend.proyecto.repository.DoctorRepository;

@RestController
@RequestMapping("/doctor")
public class DoctorServicio {
    @Autowired
    DoctorRepository doctorRepository;

    @GetMapping(path = "/buscar")
    public List<Doctor> buscar() {
        return doctorRepository.findAll();

    }

    @PostMapping(path = "/guardar")
    public Doctor guardar(@RequestBody Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @DeleteMapping(path = "/eliminar/{idDoctor}")
    public void eliminar(@PathVariable("idDoctor") Long idDoctor) {
        doctorRepository.deleteById(idDoctor);
    }

    @PostMapping(path = "/login")
    public Doctor login(@RequestBody Doctor doctor) {

        List<Doctor> doctors = doctorRepository.findByCorreoDoctorAndContrasenaDoctor(
                doctor.getCorreoDoctor(),
                doctor.getContrasenaDoctor());

        Doctor doctorRetorno = null;
        if (!doctors.isEmpty()) {
            doctorRetorno = doctors.get(0);
        }
        return doctorRetorno;
    }
}
