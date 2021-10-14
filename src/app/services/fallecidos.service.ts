import { HttpClient } from '@angular/common/http';
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


}
