package com.backend.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.proyecto.entity.VistaMenuPorRol;
import com.backend.proyecto.repository.VistaMenuRolRepository;

@RestController
@RequestMapping("/MenusPorRol")
public class VistaMenuRolServicio {
    @Autowired
    private VistaMenuRolRepository vistaMenusPorRolRepository;

    @GetMapping("/porRol/{idRol}")
    public List<VistaMenuPorRol> obtenerMenusPorRol(@PathVariable("idRol") Long idRol) {
        return vistaMenusPorRolRepository.findByIdRol(idRol);
    }
}
