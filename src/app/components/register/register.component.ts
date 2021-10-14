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
  public registrado:boolean=false;
  public error:boolean=false;
  public registrado_nombre:any;

  constructor(private _usuarioService:UsuarioService) {
    this.usuario = new UsuarioModel('');
   }

  ngOnInit(): void {
    
  }

  public registrar(registroForm:UsuarioModel){
    this._usuarioService.registro(registroForm).subscribe(
      data => {
        this.registrado = true;
        this.error = false;
        this.registrado_nombre = registroForm.nombre;
      },
      error => {
        console.log(error);
        this.error = true;
        this.registrado = false;
      }
    );
  }

}
