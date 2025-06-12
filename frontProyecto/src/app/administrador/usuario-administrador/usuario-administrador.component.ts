import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario-administrador',
  templateUrl: './usuario-administrador.component.html',
  styleUrls: ['./usuario-administrador.component.css']
})
export class UsuarioAdministradorComponent {
  rolList: any = {};
  usuario: any = {};
  usuarioList: any[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.buscar();
    this.BuscarRoles();
  }

  // Crear usuario
  crear() {
    let validarFormulario: any = document.getElementById('formularioCrear');
    if (validarFormulario.reportValidity()) {
      this.servicioCrear().subscribe({
        next: () => {
          this.buscar();
          this.usuario = {};
        },
        error: (err) => {
          console.error('Error al crear:', err);
        },
      });
    }
  }

  servicioCrear(): Observable<any> {
    return this.http.post<any>(
      '/api/usuario/guardar',
      this.usuario,
      this.httpOptions
    );
  }

  // Buscar usuario
  buscar() {
    this.servicioBuscar().subscribe({
      next: (usuarioList: any) => {
        this.usuarioList = Array.isArray(usuarioList) ? usuarioList : [];
      },
      error: (err) => {
        console.error('Error al buscar:', err);
      },
    });
  }

  servicioBuscar(): Observable<any> {
    return this.http.get('/api/usuario/buscar');
  }

  // Modificar usuario
  modificar(usuario: any) {
    this.usuario = usuario;
  }

  limpiar() {
    this.usuario = {};
  }
  // Eliminar usuario
  eliminar(usuario: any) {
    if (confirm('¿Estás seguro de que deseas eliminar?')) {
      this.servicioEliminar(usuario.idUsuario).subscribe({
        next: () => this.buscar(),
        error: (err) => {
          console.error('Error al eliminar:', err);
        },
      });
    }
  }

  servicioEliminar(idUsuario: number): Observable<any> {
    return this.http.delete(
      `/api/usuario/eliminar/${idUsuario}`
    );
  }
  // Buscar Roles
  BuscarRoles() {
    this.servicioBuscarRoles().subscribe({
      next: (rolList: any) => {
        this.rolList = Array.isArray(rolList) ? rolList : [];
      },
      error: (err) => {
        console.error('Error al buscar los roles:', err);
      },
    });
  }

  servicioBuscarRoles(): Observable<any> {
    return this.http.get('/api/rol/buscar');
  }

}