import { Injectable } from '@angular/core';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  

  constructor() {}


  public comprobar_login(){
    if(localStorage.getItem('user')==null){
      return false;
    }else{
      return true;
    }
  }
  


}
