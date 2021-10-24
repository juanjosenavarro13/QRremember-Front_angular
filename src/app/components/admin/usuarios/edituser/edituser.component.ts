import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  private id = this.rutaActiva.snapshot.params.id;
  public usuario:User;
  public edit:boolean=false;;error:boolean=false;;

  constructor(private _usuarioService:UsuarioService, private rutaActiva:ActivatedRoute) {
    this.usuario = new User(0,'');
   }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    this._usuarioService.obtener_usuario(this.id).subscribe(
      data => {
        this.usuario = data;
      }
    )
  }
  

  update(form:any){
    this._usuarioService.actualizar_usuario(this.id, form).subscribe(
      data =>{
        console.log(data);
        this.edit = true;
        this.error = false;
      },
      err => {
        console.log(err);
        this.error = true;
        this.edit = false;
      }
    )
  }


}
