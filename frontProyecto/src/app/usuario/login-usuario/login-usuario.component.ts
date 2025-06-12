import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  usuario: any = {};
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

  darBienvenida(usuario: any) {
    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
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
    return this.http.post('http://localhost:8080/usuario/login', this.usuario, httpOptions);
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
