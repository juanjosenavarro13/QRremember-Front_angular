import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listausuario',
  templateUrl: './listausuario.component.html',
  styleUrls: ['./listausuario.component.css']
})
export class ListausuarioComponent implements OnInit {

  public usuarios: User[] = [];

  constructor(private _usuarioService:UsuarioService) {

   }

  ngOnInit(): void {
    this.lista();
  }

  lista(){
    this._usuarioService.lista().subscribe(
      data => {
        this.usuarios = data;
      }
    )
  }

}
