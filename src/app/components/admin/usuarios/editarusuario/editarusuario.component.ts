import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {
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
