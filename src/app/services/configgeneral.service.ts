import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiggeneralService {
  public url:string;
  public imgUrl:string;

  constructor() { 
    this.url = '/api';
    // this.url = 'http://back.qrremember.online/api';

    this.imgUrl = 'http://localhost/QRremember/backend_laravel/';
  }
}
