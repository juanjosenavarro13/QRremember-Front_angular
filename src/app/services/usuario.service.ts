import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/UsuarioModel';
import { ConfiggeneralService } from './configgeneral.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  

  constructor(private config:ConfiggeneralService, private _http:HttpClient) {}


  public registro(usuario:UsuarioModel){
    console.log(usuario);
    return this._http.post<UsuarioModel>(this.config.url+'/usuarios', usuario);
  }
  
  


}
