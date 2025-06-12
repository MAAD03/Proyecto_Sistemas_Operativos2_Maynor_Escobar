import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rol-administrador',
  templateUrl: './rol-administrador.component.html',
  styleUrls: ['./rol-administrador.component.css']
})
export class RolAdministradorComponent {
  rol: any = {};
  rolList: any[] = [];
  

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.buscar();
  }

  // Crear Rol
  crear() {
    let validarFormulario: any = document.getElementById('formularioCrear');
    if (validarFormulario.reportValidity()) {
      this.servicioCrear().subscribe({
        next: () => {
          this.buscar();
          this.rol = {};
        },
        error: (err) => {
          console.error('Error al crear el rol:', err);
        },
      });
    }
  }

  servicioCrear(): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/rol/guardar',
      this.rol,
      this.httpOptions
    );
  }

  // Buscar Roles
  buscar() {
    this.servicioBuscar().subscribe({
      next: (rolList: any) => {
        this.rolList = Array.isArray(rolList) ? rolList : [];
      },
      error: (err) => {
        console.error('Error al buscar los roles:', err);
      },
    });
  }

  servicioBuscar(): Observable<any> {
    return this.http.get('http://localhost:8080/rol/buscar');
  }

  // Modificar rol
  modificar(rol: any) {
    this.rol = rol;
  }

  limpiar() {
    this.rol = {};
  }

  // Eliminar rol
  eliminar(rol: any) {
    if (confirm('¿Estás seguro de que deseas eliminar?')) {
      this.servicioEliminar(rol.idRol).subscribe({
        next: () => this.buscar(),
        error: (err) => {
          console.error('Error al eliminar:', err);
        },
      });
    }
  }

  servicioEliminar(idRol: number): Observable<any> {
    return this.http.delete(
      `http://localhost:8080/rol/eliminar/${idRol}`
    );
  }
}
