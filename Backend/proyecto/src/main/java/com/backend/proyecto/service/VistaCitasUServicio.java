package com.backend.proyecto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.proyecto.entity.VistaCitasU;
import com.backend.proyecto.repository.VistaCitasURepository;

@RestController
@RequestMapping("/citasUsuario")
public class VistaCitasUServicio {
    @Autowired
    private VistaCitasURepository vistaCitasURepository;

    @GetMapping("/citasDeUsuario/{idUsuario}")
    public List<VistaCitasU> obtenerCitasDeUsuario(@PathVariable("idUsuario") Long idUsuario) {
        return vistaCitasURepository.findByIdUsuario(idUsuario);
    }
}
