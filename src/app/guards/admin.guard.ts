import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private _authService:AuthService){}

 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      
      if(this._authService.user_active){
        if(localStorage.getItem("ROLE") == "ADMIN"){
          this._authService.saveUser();
          return true;
        }else{
          window.location.href = "/error";
          return false;
        }
      
      }else{
        window.location.href = "/usuario/identificar";
        return false;
      }
    
  }
  
}