import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfiggeneralService } from 'src/app/services/configgeneral.service';
import { FallecidosService } from 'src/app/services/fallecidos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, private _fallecidosService:FallecidosService, private _general:ConfiggeneralService) { }
  public nombre:string = this.rutaActiva.snapshot.params.nombre;
  public fallecidos:any = [];

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(params => {
      this.nombre = params.nombre;
      this.buscar();
    });

  }


  buscar(){
    this._fallecidosService.buscadorFallecido(this.nombre).subscribe(
      data =>{
        console.log(data);
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
