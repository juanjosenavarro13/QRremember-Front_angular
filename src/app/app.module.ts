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
import { EditarusuarioComponent } from './components/admin/usuarios/editarusuario/editarusuario.component';

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
    EditarusuarioComponent
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
