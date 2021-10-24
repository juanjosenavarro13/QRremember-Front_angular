import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-eliminarusuario',
  templateUrl: './eliminarusuario.component.html',
  styleUrls: ['./eliminarusuario.component.css']
})
export class EliminarusuarioComponent implements OnInit {
  public id:number = this._ruta.snapshot.params.id;

  constructor(private _ruta:ActivatedRoute, private _usuarioService:UsuarioService,  private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  delete(){
    this._usuarioService.delete(this.id).subscribe(
      data => {
        location.href ='/admin/usuarios/editar';
      }
    )
  }

  volver(){
    location.href ='/admin/usuarios/editar';
  }

}
