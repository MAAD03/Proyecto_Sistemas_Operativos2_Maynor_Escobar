package com.backend.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.proyecto.entity.VistaRecetaU;
import com.backend.proyecto.repository.VistaRecetaURepository;

@RestController
@RequestMapping("/recetasUsuario")
public class VistaRecetaUServicio {
    @Autowired
    private VistaRecetaURepository vistaRecetaURepository;

    @GetMapping("/recetasDeUsuario/{idUsuario}")
    public List<VistaRecetaU> obtenerRecetasDeUsuario(@PathVariable("idUsuario") Long idUsuario) {
        return vistaRecetaURepository.findByIdUsuario(idUsuario);
    }
}
