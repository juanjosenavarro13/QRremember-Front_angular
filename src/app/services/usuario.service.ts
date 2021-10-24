import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { ConfiggeneralService } from './configgeneral.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _global:ConfiggeneralService, private _http:HttpClient) { }


  lista(){
    return this._http.get<User[]>(this._global.url+'/usuarios/lista');
  }

  obtener_usuario(id:number){
    return this._http.get<User>(this._global.url+'/usuarios/info/'+id);
  }

  actualizar_usuario(id:number, user:any){
    return this._http.post(this._global.url+'/usuarios/actualizar/'+id, user);
  }

  delete(id:number){
    return this._http.post(this._global.url+'/usuarios/eliminar/'+id, null);
  }


}
