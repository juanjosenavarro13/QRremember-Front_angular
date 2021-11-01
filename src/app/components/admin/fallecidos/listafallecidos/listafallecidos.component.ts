import { Component, OnInit } from '@angular/core';
import { FallecidoModel } from 'src/app/models/FallecidoModel';

import { ConfiggeneralService } from 'src/app/services/configgeneral.service';
import { FallecidosService } from 'src/app/services/fallecidos.service';

@Component({
  selector: 'app-listafallecidos',
  templateUrl: './listafallecidos.component.html',
  styleUrls: ['./listafallecidos.component.css']
})
export class ListafallecidosComponent implements OnInit {

  public fallecidos:FallecidoModel[] = [];

  constructor(private _fallecidosService:FallecidosService, private _general:ConfiggeneralService) { }

  ngOnInit(): void {
    this.obtenerFallecidos();
  }


  obtenerFallecidos(){
    this._fallecidosService.lista().subscribe(
      data =>{
        this.fallecidos = data;
        for(let item of this.fallecidos){
         if(item.imagen != '../../../assets/img/fallecido_default.jpg'){
           item.imagen = this._general.imgUrl+item.imagen;
         }
        }

      }
    )
  }

}
