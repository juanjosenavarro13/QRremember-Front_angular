import { HttpClient } from '@angular/common/http';
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

  constructor(private _global:ConfiggeneralService, private _http:HttpClient) {
    this.token = '';
   }

  register(user:User): Observable<JwtRresponse> {
    return this._http.post<JwtRresponse>(this._global.url+'/auth/register', user).pipe(tap(
      (res:JwtRresponse) => {
        if(res){
          //guardar token
          this.saveToken(res.access_token, res.expires_in);
        }
      }
    ))
  }

  login(user:User): Observable<JwtRresponse> {
    return this._http.post<JwtRresponse>(this._global.url+'/auth/login', user).pipe(tap(
      (res:JwtRresponse) => {
        if(res){
          // guardar token
          this.saveToken(res.access_token, res.expires_in);
        }
      }
    ))
  }

  logout():void{
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
  }

  private saveToken(token:string, expiresIn:string):void{
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken():string{
    if(!this.token){
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }


}
