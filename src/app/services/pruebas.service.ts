import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiggeneralService } from './configgeneral.service';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(private _http:HttpClient, private _global:ConfiggeneralService) { }



  guardarImagen(file:any){
    const fd= new FormData;
    fd.append('image',file,file.name);
    return   this._http.post(this._global.url+'/pruebas',fd); 
  }


}


