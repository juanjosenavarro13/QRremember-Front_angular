import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfiggeneralService } from 'src/app/services/configgeneral.service';
import { FallecidosService } from 'src/app/services/fallecidos.service';

@Component({
  selector: 'app-eliminarfallecido',
  templateUrl: './eliminarfallecido.component.html',
  styleUrls: ['./eliminarfallecido.component.css']
})
export class EliminarfallecidoComponent implements OnInit {

  public id = this.rutaActiva.snapshot.params.id;
  constructor(private rutaActiva:ActivatedRoute, private _fallecidosService:FallecidosService, private _general:ConfiggeneralService) { }

  ngOnInit(): void {
  }


  delete(){
    this._fallecidosService.delete(this.id).subscribe(
      data => {
        location.href ='/admin/fallecidos/lista';
      }
    )
  }

}
