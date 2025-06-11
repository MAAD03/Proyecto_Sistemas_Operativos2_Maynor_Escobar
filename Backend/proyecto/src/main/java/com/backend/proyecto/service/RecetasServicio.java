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

import com.backend.proyecto.entity.Recetas;
import com.backend.proyecto.repository.RecetasRepository;

@RestController
@RequestMapping("/recetas")
public class RecetasServicio {
    @Autowired
    RecetasRepository recetasRepository;

    @GetMapping(path = "/buscar")
    public List<Recetas> buscar() {
        return recetasRepository.findAll();

    }

    @PostMapping(path = "/guardar")
    public Recetas guardar(@RequestBody Recetas recetas) {
        return recetasRepository.save(recetas);
    }

    @DeleteMapping(path = "/eliminar/{idRecetas}")
    public void eliminar(@PathVariable("idRecetas") Long idRecetas) {
        recetasRepository.deleteById(idRecetas);

    }
}
