import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

interface usuario {
  value: string;
  tipo: string;
}

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  emailPattern : string="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  usuarios: usuario[] = [
    {value: '0', tipo: 'Alumno'},
    {value: '1', tipo: 'Profesor'},
  ];

  altaForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required,Validators.minLength(3)]),
    tipoUsuario : new FormControl ('', Validators.required)
  });

  mensaje=false;

  constructor(private sv: FirebaseService) { }

  ngOnInit(): void {
  }

  Alta(form)
  {
    if(form.valid)
    {
      console.log(form.value);
      this.sv.CrearUsuario(form);
      this.mensaje=true;
    }
    else
    {
      console.log("no valido");
    }
  }

}
