import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: UsuarioModel;
  public identificado:boolean=false;
  public error:boolean= false;


  constructor(private _usuarioService:UsuarioService) {
    this.usuario = new UsuarioModel('');
   }

  ngOnInit(): void {
  }


  public login(registroForm:UsuarioModel){
    this._usuarioService.login(registroForm).subscribe(
      data => {
        this.identificado = true;
        this.error = false;
      },
      error => {
        this.error = true;
        this.identificado = false;
      }
    );
  }


}
