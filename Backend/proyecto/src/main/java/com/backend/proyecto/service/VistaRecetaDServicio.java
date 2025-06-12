package com.backend.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.proyecto.entity.VistaRecetaD;
import com.backend.proyecto.repository.VistaRecetaDRepository;

@RestController
@RequestMapping("/recetasDoctor")
public class VistaRecetaDServicio {

    @Autowired
    private VistaRecetaDRepository vistaRecetaDRepository;

    @GetMapping("/recetasDeDoctor/{idDoctor}")
    public List<VistaRecetaD> obtenerRecetasDeDoctor(@PathVariable("idDoctor") Long idDoctor) {
        return vistaRecetaDRepository.findByIdDoctor(idDoctor);
    }
}
