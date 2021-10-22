import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtRresponse } from '../models/JwtResponse';
import { User } from '../models/User';
import { ConfiggeneralService } from './configgeneral.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token:any;
  public user_active:boolean;

  constructor(private _global:ConfiggeneralService, private _http:HttpClient) {
    this.token = '';
    
    if(localStorage.getItem('ACCESS_TOKEN')){
      this.user_active = true;
    }else{
      this.user_active = false;
    }
    
   }

  register(user:User): Observable<JwtRresponse> {
    return this._http.post<JwtRresponse>(this._global.url+'/auth/register', user).pipe(tap(
      (res:JwtRresponse) => {
        
      }
    ))
  }

  login(user:User): Observable<JwtRresponse> {
    return this._http.post<JwtRresponse>(this._global.url+'/auth/login', user).pipe(tap(
      (res:JwtRresponse) => {
        if(res){
          // guardar token
          this.user_active = true;
          this.saveToken(res.access_token, res.expires_in);
        }
      }
    ));
  }

  logout():void{
    this.token = '';
    localStorage.clear();
    this.user_active = false;
    window.location.href = "/";
  }

  private saveToken(token:string, expiresIn:string):void{
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.saveUser();
    this.token = token;
    window.location.href = "/";
  }

  private getToken():string{
    if(!this.token){
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }

  public getUser(){
    let token = this.getToken();
    return this._http.post<User>(this._global.url+'/auth/me', null, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }

  public saveUser(){
    let token = this.getToken();
    return this._http.post<User>(this._global.url+'/auth/me', null, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}).subscribe(
      data =>{
        let role = JSON.stringify(data.role);
        role = role.replace(/['"]+/g, '');
        localStorage.setItem("ROLE", role);
      }
    );
  }


}
