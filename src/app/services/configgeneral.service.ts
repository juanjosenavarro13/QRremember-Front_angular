import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiggeneralService {
  public url:string;
  public imgUrl:string;

  constructor() { 
    //local
    this.url = '/api';
    this.imgUrl = 'http://localhost/QRremember/backend_laravel/';

    //produccion
    // this.url = 'http://back.qrremember.online/api';    
    // this.imgUrl = 'http://back.qrremember.online/';
  }
}
