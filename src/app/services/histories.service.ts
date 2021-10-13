import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoryModel } from '../models/HistoryModel';
import { ConfiggeneralService } from './configgeneral.service';

@Injectable({
  providedIn: 'root'
})
export class HistoriesService {

  constructor(private config:ConfiggeneralService, private _http:HttpClient) { }


  public ultimos_fallecidos(){
    return this._http.get<HistoryModel[]>(this.config.url+'/fallecidos');
  }


}
