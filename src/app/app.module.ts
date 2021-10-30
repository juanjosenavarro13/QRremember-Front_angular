import { NgModule } from '@angular/core';
import {DatePipe} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UltimosFallecidosComponent } from './components/ultimos-fallecidos/ultimos-fallecidos.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoFallecidoComponent } from './components/info-fallecido/info-fallecido.component';
import { AdminGeneralComponent } from './components/admin/admin-general/admin-general.component';
import { CrearusuarioComponent } from './components/admin/usuarios/crearusuario/crearusuario.component';
import { EdituserComponent } from './components/admin/usuarios/edituser/edituser.component';
import { CrearfallecidoComponent } from './components/admin/fallecidos/crearfallecido/crearfallecido.component';
import { EditarfallecidoComponent } from './components/admin/fallecidos/editarfallecido/editarfallecido.component';
import { ListafallecidosComponent } from './components/admin/fallecidos/listafallecidos/listafallecidos.component';
import { ListausuarioComponent } from './components/admin/usuarios/listausuario/listausuario.component';
import { EliminarfallecidoComponent } from './components/admin/fallecidos/eliminarfallecido/eliminarfallecido.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UltimosFallecidosComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    InfoFallecidoComponent,
    AdminGeneralComponent,
    CrearusuarioComponent,
    EdituserComponent,
    CrearfallecidoComponent,
    EditarfallecidoComponent,
    ListafallecidosComponent,
    ListausuarioComponent,
    EliminarfallecidoComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
