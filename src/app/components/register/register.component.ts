import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/UsuarioModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public UsuarioModel: UsuarioModel;
  constructor() {
    this.UsuarioModel = new UsuarioModel('');
   }

  ngOnInit(): void {
    
  }

  public registrar(registroForm:UsuarioModel){
    console.log(registroForm);
  }

}
