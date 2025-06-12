import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

 constructor(private router: Router) {
  this.recargar();
}

ngOnInit(): void {
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  const doctor = JSON.parse(localStorage.getItem('doctor') || '{}');
  const administrador = JSON.parse(localStorage.getItem('administrador') || '{}');

  const estaAutenticado =
    (usuario && usuario.idUsuario) ||
    (doctor && doctor.idDoctor) ||
    (administrador && administrador.idAdministrador);

  if (!estaAutenticado) {
    this.router.navigate(['/loginU']);
  }
}

recargar(): void {
  const hasReloaded = localStorage.getItem('hasReloaded');
  if (!hasReloaded) {
    localStorage.setItem('hasReloaded', 'true');
    window.location.reload();
  } else {
    localStorage.removeItem('hasReloaded');
  }
}

cerrarSesion(): void {
  localStorage.removeItem('usuario');
  localStorage.removeItem('doctor');
  localStorage.removeItem('administrador');
  this.router.navigate(['/loginU']);
}
}


