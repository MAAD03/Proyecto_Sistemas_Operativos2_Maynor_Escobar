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

import com.backend.proyecto.entity.Usuario;
import com.backend.proyecto.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioServicio {

    @Autowired
    UsuarioRepository usuarioRepository;

    @GetMapping(path = "/buscar")
    public List<Usuario> buscar() {
        return usuarioRepository.findAll();

    }

    @PostMapping(path = "/guardar")
    public Usuario guardar(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @DeleteMapping(path = "/eliminar/{idUsuario}")
    public void eliminar(@PathVariable("idUsuario") Long idUsuario) {
        usuarioRepository.deleteById(idUsuario);
    }

    @PostMapping(path = "/login")
    public Usuario login(@RequestBody Usuario usuario) {

        List<Usuario> usuarios = usuarioRepository.findByCorreoUsuarioAndContrasenaUsuario(
                usuario.getCorreoUsuario(),
                usuario.getContrasenaUsuario());

        Usuario usuarioRetorno = null;
        if (!usuarios.isEmpty()) {
            usuarioRetorno = usuarios.get(0);
        }
        return usuarioRetorno;
    }

}
