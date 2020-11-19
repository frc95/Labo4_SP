import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-email-usuario',
  templateUrl: './email-usuario.component.html',
  styleUrls: ['./email-usuario.component.css']
})
export class EmailUsuarioComponent implements OnInit {

  emailUsuario="";

  constructor(private auth : FirebaseService) {
    this.auth.ObtenerEmail().subscribe(auth=>{
      if(auth){
        this.emailUsuario  = auth.email;
       }
       else{
         this.emailUsuario="";
       }
    });
  }

  ngOnInit(): void {
  }

}
