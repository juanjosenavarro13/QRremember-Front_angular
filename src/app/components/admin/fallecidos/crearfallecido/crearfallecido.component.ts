import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { FallecidosService } from 'src/app/services/fallecidos.service';
import { UsuarioService } from 'src/app/services/usuario.service';

export interface Fallecido{
   nombre:string,
   imagen:File,
   apellidos:string,
   fecha_nacimiento:Date,
   fecha_fallecimiento:Date,
   descripcion:string,
   user_id:number,
   clave:string
}

@Component({
  selector: 'app-crearfallecido',
  templateUrl: './crearfallecido.component.html',
  styleUrls: ['./crearfallecido.component.css']
})
export class CrearfallecidoComponent implements OnInit {
  public creado:boolean=false; error:boolean=false;
  public imagen:any;
  public id:any;
  public usuarios!: User[];

  constructor(private _fallecidoService:FallecidosService, private _usuariosService:UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  crear(form:Fallecido){
    this._fallecidoService.crear_fallecido(form).subscribe(
      res =>{
        this.id = res.id;
        if(this.imagen != null){
          this._fallecidoService.guardarImagen(this.imagen, this.id).subscribe(res =>{})
        }
        this.error = false; this.creado = true;

      },
      error =>{this.error = true; this.creado = false;}
    )
  }

  guardarImagen(event:any){
    this.imagen = event.target.files[0];
  }

  obtenerUsuarios(){
    this._usuariosService.lista().subscribe(
      res =>{
        this.usuarios = res;
      }
    )
  }

}
