import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css']
})
export class LoginAdministradorComponent {
 administrador: any = {};
  constructor(private http: HttpClient, private router: Router) {

    this.recargar();

  }
  login() {
    const formularioValido: any = document.getElementById('loginForm');
    if (formularioValido.reportValidity()) {
      this.servicioLogin().subscribe({
        next: (u: any) => this.darBienvenida(u),
        error: () => {
          alert('Correo o contraseña incorrectos.');
        },
      });
    }
  }

  darBienvenida(administrador: any) {
    if (administrador) {
      localStorage.setItem('administrador', JSON.stringify(administrador));
      this.router.navigate(['/inicio']);
    } else {
      alert('Correo o contraseña inválidos.');
    }
  }


  servicioLogin() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post('http://localhost:8080/administrador/login', this.administrador, httpOptions);
  }

  recargar() {
    const hasReloaded = localStorage.getItem('hasReloaded');
    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('hasReloaded');
    }
  }
}
