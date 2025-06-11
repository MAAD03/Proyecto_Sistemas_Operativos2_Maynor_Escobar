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

import com.backend.proyecto.entity.Citas;
import com.backend.proyecto.repository.CitasRepository;

@RestController
@RequestMapping("/citas")
public class CitasServicio {

    @Autowired
    CitasRepository citasRepository;

    @GetMapping(path = "/buscar")
    public List<Citas> buscar() {
        return citasRepository.findAll();

    }

    @PostMapping(path = "/guardar")
    public Citas guardar(@RequestBody Citas citas) {
        return citasRepository.save(citas);
    }

    @DeleteMapping(path = "/eliminar/{idCitas}")
    public void eliminar(@PathVariable("idCitas") Long idCitas) {
        citasRepository.deleteById(idCitas);

    }
}