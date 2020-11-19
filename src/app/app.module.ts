import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmailUsuarioComponent } from './components/atoms/email-usuario/email-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AltaAdminComponent } from './components/pages/alta-admin/alta-admin.component';
import { AltaMateriaComponent } from './components/pages/alta-materia/alta-materia.component';
import { InscribirMateriaComponent } from './components/pages/inscribir-materia/inscribir-materia.component';
import { ListarMateriasComponent } from './components/pages/listar-materias/listar-materias.component';

import {MatTableModule} from '@angular/material/table';
import { ListarAlumnosComponent } from './components/pages/listar-alumnos/listar-alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmailUsuarioComponent,
    LoginComponent,
    AltaUsuarioComponent,
    HomeComponent,
    AltaAdminComponent,
    AltaMateriaComponent,
    InscribirMateriaComponent,
    ListarMateriasComponent,
    ListarAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
