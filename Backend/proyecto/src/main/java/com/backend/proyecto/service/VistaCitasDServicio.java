package com.backend.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.proyecto.entity.VistaCitasD;
import com.backend.proyecto.repository.VistaCitasDRepository;

@RestController
@RequestMapping("/citasDoctor")
public class VistaCitasDServicio {
    @Autowired
    private VistaCitasDRepository vistaCitasDRepository;

    @GetMapping("/citasDeDoctor/{idDoctor}")
    public List<VistaCitasD> obtenerCitasDeDoctor(@PathVariable("idDoctor") Long idDoctor) {
        return vistaCitasDRepository.findByIdDoctor(idDoctor);
    }
}
