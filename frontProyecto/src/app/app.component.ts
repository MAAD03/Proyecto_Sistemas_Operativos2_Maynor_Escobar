import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn = false;
  title = 'frontProyecto';
  menuPorRolList: any[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private router: Router, private http: HttpClient) {
  
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  const doctor = JSON.parse(localStorage.getItem('doctor') || '{}');
  const administrador = JSON.parse(localStorage.getItem('administrador') || '{}');

  let idRol: number | null = null;

  if (usuario && Object.keys(usuario).length > 0) {
    idRol = usuario.idRol;
  } else if (doctor && Object.keys(doctor).length > 0) {
    idRol = doctor.idRol;
  } else if (administrador && Object.keys(administrador).length > 0) {
    idRol = administrador.idRol;
  } else {
    console.warn('Ningún usuario válido encontrado en localStorage');
  }

  if (idRol !== null) {
    this.buscarNavbar(idRol);
  }
}



  buscarNavbar(idRol: number): void {
    this.servicioBuscarMenuPorRol(idRol).subscribe({
      next: (menuPorRolList: any) => {
        this.menuPorRolList = Array.isArray(menuPorRolList) ? menuPorRolList : [];
      },
      error: (err) => {
        console.error('Error al buscar los menús:', err);
      },
    });
  }

  servicioBuscarMenuPorRol(idRol: number): Observable<any> {
    return this.http.get(`/api/MenusPorRol/porRol/${idRol}`, this.httpOptions);
  }

  ngOnInit(): void {
    this.checkAuthentication();
  }


  checkAuthentication(): void {
  const usuario = localStorage.getItem('usuario');
  const doctor = localStorage.getItem('doctor');
  const administrador = localStorage.getItem('administrador');

  this.isLoggedIn = !!usuario || !!doctor || !!administrador;
}



  logout(): void {
  localStorage.removeItem('usuario');
  localStorage.removeItem('doctor');
  localStorage.removeItem('administrador');
  this.isLoggedIn = false;
  this.router.navigate(['/login']);
}

}
