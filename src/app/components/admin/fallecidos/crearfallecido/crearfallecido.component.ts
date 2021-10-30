import { Component, OnInit } from '@angular/core';
import { FallecidosService } from 'src/app/services/fallecidos.service';

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

  constructor(private _fallecidoService:FallecidosService) {}

  ngOnInit(): void {

  }

  crear(form:Fallecido){
    this._fallecidoService.crear_fallecido(form).subscribe(
      res =>{
        this.id = res.id;
        this._fallecidoService.guardarImagen(this.imagen, this.id).subscribe(
          res =>{}
        )

      }
    )
  }

  guardarImagen(event:any){
    this.imagen = event.target.files[0];
  }

}
