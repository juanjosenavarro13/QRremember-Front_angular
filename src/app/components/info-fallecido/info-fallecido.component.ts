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
import { AuthService } from 'src/app/services/auth.service';
import {
  ConfiggeneralService
} from 'src/app/services/configgeneral.service';
import {
  FallecidosService
} from 'src/app/services/fallecidos.service';


@Component({
  selector: 'app-info-fallecido',
  templateUrl: './info-fallecido.component.html',
  styleUrls: ['./info-fallecido.component.css']
})
export class InfoFallecidoComponent implements OnInit {

  public id = this.rutaActiva.snapshot.params.id;
  public datos: FallecidoModel;
  public edad: number = 0;
  public mostrar = false;
  public userID:any;
  public imagenes:any=[];
  public Gurl:string='';

  constructor(private rutaActiva: ActivatedRoute, private _fallecidoService: FallecidosService, private _general: ConfiggeneralService, private _usuariosService:AuthService) {
    this.datos = new FallecidoModel('', '', new Date(), new Date(), '', '', '');
  }



  ngOnInit(): void {
    this.rutaActiva.params.subscribe(params => {
      this.id = params.id;
      this.obtener_info();
      this.obtenerUsuario();
      this.obtenerImagenes();
    })


  }

  obtenerUsuario(){
    this._usuariosService.getUser().subscribe(
      data =>{
        this.userID = data.id;
      }
    )
  }

  obtener_info() {
    this._fallecidoService.fallecido_info(this.id).subscribe(
      data => {
        this.datos = data;
        var fecha1 = moment(data.fecha_nacimiento);
        var fecha2 = moment(data.fecha_fallecimiento);
        this.edad = fecha2.diff(fecha1, 'years');
        this.mostrar = true;

        if (data.imagen != '../../../assets/img/fallecido_default.jpg') {
          this.datos.imagen = this._general.imgUrl + data.imagen;
        }

      }
    )
  }

  obtenerImagenes(){
    this._fallecidoService.obtenerImagenes(this.id).subscribe(
      data =>{
        this.imagenes = data;
        this.Gurl = this._general.imgUrl;
      }
    )
  }

}
