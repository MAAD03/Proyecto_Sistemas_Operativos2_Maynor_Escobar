import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-citas-administrador',
  templateUrl: './citas-administrador.component.html',
  styleUrls: ['./citas-administrador.component.css']
})
export class CitasAdministradorComponent {
  cita: any = {};
  citaList: any[] = [];
  usuarioList: any = {};
  doctorList: any = {};

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.buscar();
    this.BuscarUsuarios();
    this.BuscarDoctores();
  }

  // Crear cita
  crear() {
    let validarFormulario: any = document.getElementById('formularioCrear');
    if (validarFormulario.reportValidity()) {
      this.servicioCrear().subscribe({
        next: () => {
          this.buscar();
          this.cita = {};
        },
        error: (err) => {
          console.error('Error al crear:', err);
        },
      });
    }
  }

  servicioCrear(): Observable<any> {
    return this.http.post<any>(
      '/api/citas/guardar',
      this.cita,
      this.httpOptions
    );
  }

  // Buscar cita
  buscar() {
    this.servicioBuscar().subscribe({
      next: (citaList: any) => {
        this.citaList = Array.isArray(citaList) ? citaList : [];
      },
      error: (err) => {
        console.error('Error al buscar:', err);
      },
    });
  }

  servicioBuscar(): Observable<any> {
    return this.http.get('/api/citas/buscar');
  }

  // Modificar cita
  modificar(cita: any) {
    this.cita = cita;
  }

  limpiar() {
    this.cita = {};
  }
  // Eliminar cita
  eliminar(cita: any) {
    if (confirm('¿Estás seguro de que deseas eliminar?')) {
      this.servicioEliminar(cita.idCitas).subscribe({
        next: () => this.buscar(),
        error: (err) => {
          console.error('Error al eliminar:', err);
        },
      });
    }
  }

  servicioEliminar(idCitas: number): Observable<any> {
    return this.http.delete(
      `/api/citas/eliminar/${idCitas}`
    );
  }


  // Buscar usuarios
  BuscarUsuarios() {
    this.servicioBuscarUsuarios().subscribe({
      next: (usuarios: any) => {
        this.usuarioList = Array.isArray(usuarios) ? usuarios : [];
      },
      error: (err) => {
        console.error('Error al buscar los menús:', err);
      },
    });
  }

  servicioBuscarUsuarios(): Observable<any> {
    return this.http.get('/api/usuario/buscar');
  }

  // Buscar doctores
  BuscarDoctores() {
    this.servicioBuscarDoctor().subscribe({
      next: (doctores: any) => {
        this.doctorList = Array.isArray(doctores) ? doctores : [];
      },
      error: (err) => {
        console.error('Error al buscar los menús:', err);
      },
    });
  }

  servicioBuscarDoctor(): Observable<any> {
    return this.http.get('/api/doctor/buscar');
  }


}
