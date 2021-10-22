import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGeneralComponent } from './components/admin/admin-general/admin-general.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { InfoFallecidoComponent } from './components/info-fallecido/info-fallecido.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UltimosFallecidosComponent } from './components/ultimos-fallecidos/ultimos-fallecidos.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuario/identificar', component: LoginComponent },
  { path: 'usuario/registrar', component: RegisterComponent },
  { path: 'ultimosFallecidos', component: UltimosFallecidosComponent },
  { path: 'fallecido/:id', component: InfoFallecidoComponent },
  { path: 'infoFallecido',  canActivate: [AuthGuard], component:InfoFallecidoComponent },
  { path: 'admin',  canActivate: [AdminGuard], component:AdminGeneralComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
