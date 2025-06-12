import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorAdministradorComponent } from './administrador/administrador-administrador/administrador-administrador.component';
import { CitasAdministradorComponent } from './administrador/citas-administrador/citas-administrador.component';
import { DoctorAdministradorComponent } from './administrador/doctor-administrador/doctor-administrador.component';
import { LoginAdministradorComponent } from './administrador/login-administrador/login-administrador.component';
import { MenuAdministradorComponent } from './administrador/menu-administrador/menu-administrador.component';
import { MenuRolAdministradorComponent } from './administrador/menu-rol-administrador/menu-rol-administrador.component';
import { RecetasAdministradorComponent } from './administrador/recetas-administrador/recetas-administrador.component';
import { RolAdministradorComponent } from './administrador/rol-administrador/rol-administrador.component';
import { UsuarioAdministradorComponent } from './administrador/usuario-administrador/usuario-administrador.component';
import { CitasDoctorComponent } from './doctor/citas-doctor/citas-doctor.component';
import { LoginDoctorComponent } from './doctor/login-doctor/login-doctor.component';
import { PerfilDoctorComponent } from './doctor/perfil-doctor/perfil-doctor.component';
import { RecetasDoctorComponent } from './doctor/recetas-doctor/recetas-doctor.component';
import { CitasUsuarioComponent } from './usuario/citas-usuario/citas-usuario.component';
import { LoginUsuarioComponent } from './usuario/login-usuario/login-usuario.component';
import { PerfilUsuarioComponent } from './usuario/perfil-usuario/perfil-usuario.component';
import { RecetasUsuarioComponent } from './usuario/recetas-usuario/recetas-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/loginU', pathMatch: 'full' },
  { path: 'administradorA', component:  AdministradorAdministradorComponent},
  { path: 'citasA', component:  CitasAdministradorComponent},
  { path: 'doctorA', component:  DoctorAdministradorComponent},
  { path: 'loginA', component:  LoginAdministradorComponent},
  { path: 'menuA', component:  MenuAdministradorComponent},
  { path: 'menurolA', component:  MenuRolAdministradorComponent},
  { path: 'recetasA', component:  RecetasAdministradorComponent},
  { path: 'rolA', component:  RolAdministradorComponent},
  { path: 'usuarioA', component:  UsuarioAdministradorComponent},
  { path: 'citasD', component:  CitasDoctorComponent},
  { path: 'loginD', component:  LoginDoctorComponent},
  { path: 'perfilD', component:  PerfilDoctorComponent},
  { path: 'recetasD', component:  RecetasDoctorComponent},
  { path: 'citasU', component:  CitasUsuarioComponent},
  { path: 'loginU', component:  LoginUsuarioComponent},
  { path: 'perfilU', component:  PerfilUsuarioComponent},
  { path: 'recetasU', component:  RecetasUsuarioComponent},
  { path: 'crearU', component:  CrearUsuarioComponent},
  { path: 'inicio', component:  InicioComponent},
  { path: '**', redirectTo: '/loginU' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
