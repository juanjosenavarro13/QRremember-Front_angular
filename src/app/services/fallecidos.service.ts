import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FallecidoModel } from '../models/FallecidoModel';
import { ConfiggeneralService } from './configgeneral.service';

@Injectable({
  providedIn: 'root'
})
export class FallecidosService {

  constructor(private config:ConfiggeneralService, private _http:HttpClient) { }


  public ultimos_fallecidos(){
    return this._http.get<FallecidoModel[]>(this.config.url+'/fallecidos');
  }

  public fallecido_info(id:number){
    return this._http.get<FallecidoModel>(this.config.url+'/fallecido_info/'+id);
  }

  public crear_fallecido(fallecido:any){
    return this._http.post<FallecidoModel>(this.config.url+'/fallecido/crear', fallecido);
  }

  public guardarImagen(image:any, id:any){
    const fd = new FormData;
    fd.append('image', image, image.name);
    return this._http.post(this.config.url+'/fallecido/imagen_perfil/'+id, fd);

  }


}
