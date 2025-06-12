import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor-administrador',
  templateUrl: './doctor-administrador.component.html',
  styleUrls: ['./doctor-administrador.component.css']
})
export class DoctorAdministradorComponent {
  rolList: any = {};
  doctor: any = {};
  doctorList: any[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.buscar();
    this.BuscarRoles();
  }

  // Crear doctor
  crear() {
    let validarFormulario: any = document.getElementById('formularioCrear');
    if (validarFormulario.reportValidity()) {
      this.servicioCrear().subscribe({
        next: () => {
          this.buscar();
          this.doctor = {};
        },
        error: (err) => {
          console.error('Error al crear:', err);
        },
      });
    }
  }

  servicioCrear(): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/doctor/guardar',
      this.doctor,
      this.httpOptions
    );
  }

  // Buscar doctor
  buscar() {
    this.servicioBuscar().subscribe({
      next: (doctorList: any) => {
        this.doctorList = Array.isArray(doctorList) ? doctorList : [];
      },
      error: (err) => {
        console.error('Error al buscar:', err);
      },
    });
  }

  servicioBuscar(): Observable<any> {
    return this.http.get('http://localhost:8080/doctor/buscar');
  }

  // Modificar doctor
  modificar(doctor: any) {
    this.doctor = doctor;
  }

  limpiar() {
    this.doctor = {};
  }
  // Eliminar doctor
  eliminar(doctor: any) {
    if (confirm('¿Estás seguro de que deseas eliminar?')) {
      this.servicioEliminar(doctor.idDoctor).subscribe({
        next: () => this.buscar(),
        error: (err) => {
          console.error('Error al eliminar:', err);
        },
      });
    }
  }

  servicioEliminar(idDoctor: number): Observable<any> {
    return this.http.delete(
      `http://localhost:8080/doctor/eliminar/${idDoctor}`
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
