import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiggeneralService {
  public url:string;

  constructor() { this.url = '/api' }
}
