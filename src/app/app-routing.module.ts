import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { AltaAdminComponent } from './components/pages/alta-admin/alta-admin.component';
import { AltaMateriaComponent } from './components/pages/alta-materia/alta-materia.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InscribirMateriaComponent } from './components/pages/inscribir-materia/inscribir-materia.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'altaUsuario', component: AltaUsuarioComponent},
  { path:'home', component: HomeComponent, canActivate : [LoginGuard]},
  { path:'altaAdmin', component: AltaAdminComponent, canActivate : [LoginGuard]},
  { path:'altaMateria', component: AltaMateriaComponent, canActivate : [LoginGuard]},
  { path:'inscribirMateria', component: InscribirMateriaComponent, canActivate : [LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
