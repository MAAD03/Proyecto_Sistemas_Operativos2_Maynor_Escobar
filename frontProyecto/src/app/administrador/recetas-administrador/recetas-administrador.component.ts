import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recetas-administrador',
  templateUrl: './recetas-administrador.component.html',
  styleUrls: ['./recetas-administrador.component.css']
})
export class RecetasAdministradorComponent {
  receta: any = {};
  recetaList: any[] = [];
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

  // Crear receta
  crear() {
    let validarFormulario: any = document.getElementById('formularioCrear');
    if (validarFormulario.reportValidity()) {
      this.servicioCrear().subscribe({
        next: () => {
          this.buscar();
          this.receta = {};
        },
        error: (err) => {
          console.error('Error al crear:', err);
        },
      });
    }
  }

  servicioCrear(): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/recetas/guardar',
      this.receta,
      this.httpOptions
    );
  }

  // Buscar receta
  buscar() {
    this.servicioBuscar().subscribe({
      next: (recetaList: any) => {
        this.recetaList = Array.isArray(recetaList) ? recetaList : [];
      },
      error: (err) => {
        console.error('Error al buscar:', err);
      },
    });
  }

  servicioBuscar(): Observable<any> {
    return this.http.get('http://localhost:8080/recetas/buscar');
  }

  // Modificar receta
  modificar(rol: any) {
    this.receta = rol;
  }

  limpiar() {
    this.receta = {};
  }
// Eliminar receta
eliminar(receta: any) {
  if (confirm('¿Estás seguro de que deseas eliminar?')) {
    this.servicioEliminar(receta.idRecetas).subscribe({
      next: () => this.buscar(), 
      error: (err) => {
        console.error('Error al eliminar:', err);
      },
    });
  }
}

servicioEliminar(idRecetas: number): Observable<any> {
  return this.http.delete(
    `http://localhost:8080/recetas/eliminar/${idRecetas}`
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
    return this.http.get('http://localhost:8080/usuario/buscar');
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
    return this.http.get('http://localhost:8080/doctor/buscar');
  }

  
}
