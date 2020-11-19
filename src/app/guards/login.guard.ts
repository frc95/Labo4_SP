import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { FirebaseService } from '../services/firebase.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authSvc: FirebaseService, private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authSvc.userData.pipe(
      map( user => {
        if(!user)
        {
          this.router.navigate(['']);
          return false;
        }
        return true;
      })
    );
  }
  
}
