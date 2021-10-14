import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public usuario: UsuarioModel;

  constructor(private _usuarioService:UsuarioService) {
    this.usuario = new UsuarioModel('');
   }

  ngOnInit(): void {
    
  }

  public registrar(registroForm:UsuarioModel){
    this._usuarioService.registro(registroForm).subscribe(
      data => {
        // console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
