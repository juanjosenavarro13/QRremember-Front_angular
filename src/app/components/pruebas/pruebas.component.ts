import {
  Component,
  OnInit
} from '@angular/core';
import { PruebasService } from 'src/app/services/pruebas.service';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  constructor(private _pruebasService:PruebasService) {}

  ngOnInit(): void {}



  capturarImagen(ev: any) {
    const imagen = ev.target.files[0];
    this._pruebasService.guardarImagen(imagen).subscribe(
      res =>{
        console.log('res',res);
      },
      error =>{
        console.log('error',error);
      }
    )
  }


 

}
