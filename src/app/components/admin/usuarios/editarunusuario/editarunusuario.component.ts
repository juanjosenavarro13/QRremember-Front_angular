import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editarunusuario',
  templateUrl: './editarunusuario.component.html',
  styleUrls: ['./editarunusuario.component.css']
})
export class EditarunusuarioComponent implements OnInit {

  private id = this.rutaActiva.snapshot.params.id;
  public usuario: User;

  constructor(private rutaActiva: ActivatedRoute, private _usuarioService:UsuarioService) { 
    this.usuario = new User(0,'');
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe( params =>{
      this.id = params.id;
      this.obtener_info();
    })
  }

  obtener_info(){
    this._usuarioService.obtener_usuario(this.id).subscribe(
      data => {
        this.usuario = data;
        console.log(data);
      }
    )
  }

}
