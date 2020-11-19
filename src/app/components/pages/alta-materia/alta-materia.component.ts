import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  altaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required,Validators.minLength(3)]),
    cuatrimestre: new FormControl('', [Validators.required]),
    cupo : new FormControl ('', [Validators.required]),
    anio : new FormControl ('', [Validators.required,Validators.minLength(3)]),
    profesor : new FormControl ('', [Validators.required,Validators.minLength(3)])
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
      this.sv.CrearMateria(form);
      this.mensaje=true;
    }
    else
    {
      console.log("no valido");
    }
  }

}
