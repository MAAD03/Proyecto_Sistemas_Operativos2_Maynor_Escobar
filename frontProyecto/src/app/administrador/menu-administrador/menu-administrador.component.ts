import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent {
  menu: any = {};
  menuList: any[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.buscarMenu();
  }

  // Crear menú
  crearMenu() {
    let validarFormulario: any = document.getElementById('formularioCrear');
    if (validarFormulario.reportValidity()) {
      this.servicioCrear().subscribe({
        next: () => {
          this.buscarMenu();
          this.menu = {};
        },
        error: (err) => {
          console.error('Error al crear el menú:', err);
        },
      });
    }
  }

  servicioCrear(): Observable<any> {
    return this.http.post<any>(
      '/api/menu/guardar',
      this.menu,
      this.httpOptions
    );
  }

  // Buscar menús
  buscarMenu() {
    this.servicioBuscarMenu().subscribe({
      next: (menus: any) => {
        this.menuList = Array.isArray(menus) ? menus : [];
      },
      error: (err) => {
        console.error('Error al buscar los menús:', err);
      },
    });
  }

  servicioBuscarMenu(): Observable<any> {
    return this.http.get('/api/menu/buscar');
  }

  // Modificar menú
  modificar(menu: any) {
    this.menu = menu;
  }

  limpiar() {
    this.menu = {};
  }

 // Eliminar menu_rol
eliminar(menu: any) {
  if (confirm('¿Estás seguro de que deseas eliminar?')) {
    this.servicioEliminar(menu.idMenu).subscribe({
      next: () => this.buscarMenu(), 
      error: (err) => {
        console.error('Error al eliminar:', err);
      },
    });
  }
}

servicioEliminar(idMenu: number): Observable<any> {
  return this.http.delete(
    `/api/menu/eliminar/${idMenu}`
  );
}
}
