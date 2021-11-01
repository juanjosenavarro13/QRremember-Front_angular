import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FallecidoModel } from 'src/app/models/FallecidoModel';
import { ConfiggeneralService } from 'src/app/services/configgeneral.service';
import { FallecidosService } from 'src/app/services/fallecidos.service';

@Component({
  selector: 'app-editarfallecido',
  templateUrl: './editarfallecido.component.html',
  styleUrls: ['./editarfallecido.component.css']
})
export class EditarfallecidoComponent implements OnInit {
  private id = this.rutaActiva.snapshot.params.id;
  public fallecido: FallecidoModel;
  public error:boolean=false; edit:boolean=false;

  constructor(private rutaActiva:ActivatedRoute, private _fallecidosService:FallecidosService, private _general:ConfiggeneralService) {
    this.fallecido = new FallecidoModel('','',new Date(), new Date(),'','','');
   }

  ngOnInit(): void {
    this.obtenerInfo(this.id);
  }

  obtenerInfo(id:number){
    this._fallecidosService.fallecido_info(id).subscribe(
      data =>{
        this.fallecido = data;
        if(data.imagen != '../../../assets/img/fallecido_default.jpg'){
          this.fallecido.imagen = this._general.imgUrl+data.imagen;
        }
         
      }
    )
  }

  update(form:any){

  }

}
