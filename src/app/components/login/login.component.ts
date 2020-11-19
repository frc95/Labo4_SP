import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern : string="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  loginForm = new FormGroup({
    email: new FormControl('admin@admin.com', [Validators.required,Validators.minLength(3),Validators.pattern(this.emailPattern)]),
    password: new FormControl('admin123', [Validators.required,Validators.minLength(3)])
  });

  error = false;

  constructor(private route: Router, private auth : FirebaseService) { }

  ngOnInit(): void {
  }

  Login(form)
  {
    if(form.valid)
    {
      
      this.auth.AuthLogin(form)
      .then(res=> {
        this.error=false;
        console.log('Successfully',res);

        setTimeout(()=>{                           
          this.route.navigate(['home']);
        }, 1000);
        

      })
      .catch(err => {
        this.error=true;
        console.log('Error', err);
      });
    }
    else
    {
      console.log("no valido");
    }
  }

  IrAlta()
  {
    this.route.navigate(['altaUsuario']);
  }

}
