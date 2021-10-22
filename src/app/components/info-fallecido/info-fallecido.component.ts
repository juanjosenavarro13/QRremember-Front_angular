import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import * as moment from 'moment';
import {
  FallecidoModel
} from 'src/app/models/FallecidoModel';
import {
  FallecidosService
} from 'src/app/services/fallecidos.service';

@Component({
  selector: 'app-info-fallecido',
  templateUrl: './info-fallecido.component.html',
  styleUrls: ['./info-fallecido.component.css']
})
export class InfoFallecidoComponent implements OnInit {

  private id = this.rutaActiva.snapshot.params.id;
  public datos: FallecidoModel;
  public edad:number=0;
  public mostrar = false;

  constructor(private rutaActiva: ActivatedRoute, private _fallecidoService: FallecidosService) {
    this.datos = new FallecidoModel(0, '', '', '', '', '', '', '');
  }



  ngOnInit(): void {
    this.rutaActiva.params.subscribe( params =>{
      this.id = params.id;
      this.obtener_info();
    })

    
  }

  obtener_info() {
    this._fallecidoService.fallecido_info(this.id).subscribe(
      data => {
        this.datos = data;
        var fecha1 = moment(data.fecha_nacimiento);
        var fecha2 = moment(data.fecha_fallecimiento);
        this.edad = fecha2.diff(fecha1, 'years');
        this.mostrar = true;
      }
    )
  }

}
