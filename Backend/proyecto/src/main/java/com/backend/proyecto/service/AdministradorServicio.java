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

import com.backend.proyecto.entity.Administrador;
import com.backend.proyecto.repository.AdministradorRepository;

@RestController
@RequestMapping("/administrador")
public class AdministradorServicio {

    @Autowired
    AdministradorRepository administradorRepository;

    @GetMapping(path = "/buscar")
    public List<Administrador> buscar() {
        return administradorRepository.findAll();

    }

    @PostMapping(path = "/guardar")
    public Administrador guardar(@RequestBody Administrador administrador) {
        return administradorRepository.save(administrador);
    }

    @DeleteMapping(path = "/eliminar/{idAdministrador}")
    public void eliminar(@PathVariable("idAdministrador") Long idAdministrador) {
        administradorRepository.deleteById(idAdministrador);
    }

    @PostMapping(path = "/login")
    public Administrador login(@RequestBody Administrador administrador) {

        List<Administrador> administradors = administradorRepository.findByCorreoUsuarioAndPasswordAdministradors(
                administrador.getCorreoAdministrador(),
                administrador.getContrasenaAdministrador());

        Administrador administradorRetorno = null;
        if (!administradors.isEmpty()) {
            administradorRetorno = administradors.get(0);
        }
        return administradorRetorno;
    }

}
