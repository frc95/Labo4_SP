import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public userData: Observable<firebase.default.User>;

  constructor(private auth : AngularFireAuth, private route : Router, private db:AngularFirestore) {
    this.userData=this.auth.authState;
  }


  AuthLogin(form)
  {
    return this.auth.signInWithEmailAndPassword(form.value.email,form.value.password);
  }

  AuthLogout()
  {
    this.auth.signOut();
    this.route.navigate(['']);

  }

  ObtenerEmail()
  {
    return this.auth.authState.pipe(map(auth=>auth));
  }

  CrearUsuario(form)
  {
    return new Promise((resolve,rejected)=>{
      this.auth.createUserWithEmailAndPassword(form.value.email, form.value.password)
      .then(user=>{
        let fecha = Date.now();
        this.db.collection("usuarios").doc(form.value.email+"."+form.value.password).set({
          id: form.value.email+"."+fecha,
          email: form.value.email,
          password: form.value.password,
          fecha: fecha,
          tipo: form.value.tipoUsuario
        });
        resolve(user);
        
      })
      .catch(error => rejected(error));
    });
  }

  ObtenerDocumento(email)
  {
    let exito=false;

    this.db.collection(`usuarios`, ref => ref.where('email', "==", email)).snapshotChanges().subscribe(res => {
      if (res.length > 0)
      {
      console.log("Match found.");
      exito=true;
      }
      else
      {
      console.log("Does not exist.");
      exito=false;
      }
    });
    return exito;
  }

  CrearMateria(form)
  {
    
    let fecha = Date.now();
    this.db.collection("materia").doc(form.value.nombre+"."+form.value.cuatrimestre).set({
      id: form.value.nombre+"."+fecha,
      nombre: form.value.nombre,
      cuatrimestre: form.value.cuatrimestre,
      cupo: form.value.cupo,
      anio: form.value.anio,
      profesor: form.value.profesor,
    });
        
  }

  public TraerMateria()
  {
    return this.db.collection("materia").valueChanges();
  }

  public TraerAlumnos()
  {
    return this.db.collection("usuarios", ref => ref.where('tipo', "==", 'Alumno')).valueChanges();
  }

}
