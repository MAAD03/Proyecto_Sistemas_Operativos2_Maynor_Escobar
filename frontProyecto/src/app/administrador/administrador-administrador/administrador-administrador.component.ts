import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-administrador-administrador',
  templateUrl: './administrador-administrador.component.html',
  styleUrls: ['./administrador-administrador.component.css']
})
export class AdministradorAdministradorComponent {
  rolList: any = {};
  administrador: any = {};
  administradorList: any[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.buscar();
    this.BuscarRoles();
  }

  // Crear administrador
  crear() {
    let validarFormulario: any = document.getElementById('formularioCrear');
    if (validarFormulario.reportValidity()) {
      this.servicioCrear().subscribe({
        next: () => {
          this.buscar();
          this.administrador = {};
        },
        error: (err) => {
          console.error('Error al crear:', err);
        },
      });
    }
  }

  servicioCrear(): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/administrador/guardar',
      this.administrador,
      this.httpOptions
    );
  }

  // Buscar administrador
  buscar() {
    this.servicioBuscar().subscribe({
      next: (administradorList: any) => {
        this.administradorList = Array.isArray(administradorList) ? administradorList : [];
      },
      error: (err) => {
        console.error('Error al buscar:', err);
      },
    });
  }

  servicioBuscar(): Observable<any> {
    return this.http.get('http://localhost:8080/administrador/buscar');
  }

  // Modificar administrador
  modificar(rol: any) {
    this.administrador = rol;
  }

  limpiar() {
    this.administrador = {};
  }
  // Eliminar administrador
  eliminar(administrador: any) {
    if (confirm('¿Estás seguro de que deseas eliminar?')) {
      this.servicioEliminar(administrador.idAdministrador).subscribe({
        next: () => this.buscar(),
        error: (err) => {
          console.error('Error al eliminar:', err);
        },
      });
    }
  }

  servicioEliminar(idAdministrador: number): Observable<any> {
    return this.http.delete(
      `http://localhost:8080/administrador/eliminar/${idAdministrador}`
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
    return this.http.get('http://localhost:8080/rol/buscar');
  }

}
