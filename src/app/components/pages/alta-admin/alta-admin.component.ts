import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-alta-admin',
  templateUrl: './alta-admin.component.html',
  styleUrls: ['./alta-admin.component.css']
})
export class AltaAdminComponent implements OnInit {

  emailPattern : string="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  altaForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required,Validators.minLength(3)]),
    tipoUsuario : new FormControl ('administrador', Validators.required)
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
