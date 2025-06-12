import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RolAdministradorComponent } from './administrador/rol-administrador/rol-administrador.component';
import { MenuAdministradorComponent } from './administrador/menu-administrador/menu-administrador.component';
import { MenuRolAdministradorComponent } from './administrador/menu-rol-administrador/menu-rol-administrador.component';
import { UsuarioAdministradorComponent } from './administrador/usuario-administrador/usuario-administrador.component';
import { DoctorAdministradorComponent } from './administrador/doctor-administrador/doctor-administrador.component';
import { AdministradorAdministradorComponent } from './administrador/administrador-administrador/administrador-administrador.component';
import { CitasAdministradorComponent } from './administrador/citas-administrador/citas-administrador.component';
import { RecetasAdministradorComponent } from './administrador/recetas-administrador/recetas-administrador.component';
import { LoginAdministradorComponent } from './administrador/login-administrador/login-administrador.component';
import { CitasDoctorComponent } from './doctor/citas-doctor/citas-doctor.component';
import { RecetasDoctorComponent } from './doctor/recetas-doctor/recetas-doctor.component';
import { LoginDoctorComponent } from './doctor/login-doctor/login-doctor.component';
import { PerfilDoctorComponent } from './doctor/perfil-doctor/perfil-doctor.component';
import { PerfilUsuarioComponent } from './usuario/perfil-usuario/perfil-usuario.component';
import { CitasUsuarioComponent } from './usuario/citas-usuario/citas-usuario.component';
import { RecetasUsuarioComponent } from './usuario/recetas-usuario/recetas-usuario.component';
import { LoginUsuarioComponent } from './usuario/login-usuario/login-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { RolPipe } from './rol.pipe';
import { MenuPipe } from './menu.pipe';
import { UsuarioPipe } from './usuario.pipe';
import { DoctorPipe } from './doctor.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RolAdministradorComponent,
    MenuAdministradorComponent,
    MenuRolAdministradorComponent,
    UsuarioAdministradorComponent,
    DoctorAdministradorComponent,
    AdministradorAdministradorComponent,
    CitasAdministradorComponent,
    RecetasAdministradorComponent,
    LoginAdministradorComponent,
    CitasDoctorComponent,
    RecetasDoctorComponent,
    LoginDoctorComponent,
    PerfilDoctorComponent,
    PerfilUsuarioComponent,
    CitasUsuarioComponent,
    RecetasUsuarioComponent,
    LoginUsuarioComponent,
    CrearUsuarioComponent,
    InicioComponent,
    RolPipe,
    MenuPipe,
    UsuarioPipe,
    DoctorPipe,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
