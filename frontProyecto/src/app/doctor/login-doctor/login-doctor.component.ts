import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent {
doctor: any = {};
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

  darBienvenida(doctor: any) {
    if (doctor) {
      localStorage.setItem('doctor', JSON.stringify(doctor));
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
    return this.http.post('/api/doctor/login', this.doctor, httpOptions);
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
