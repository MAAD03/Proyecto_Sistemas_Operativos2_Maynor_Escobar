package com.backend.proyecto.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.proyecto.entity.Usuario;

@Repository("usuarioRepository")
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    List<Usuario> findByCorreoUsuarioAndContrasenaUsuario(String correoUsuario, String contrasenaUsuario);

}
