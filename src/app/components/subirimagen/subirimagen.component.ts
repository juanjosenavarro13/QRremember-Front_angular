import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FallecidosService } from 'src/app/services/fallecidos.service';

@Component({
  selector: 'app-subirimagen',
  templateUrl: './subirimagen.component.html',
  styleUrls: ['./subirimagen.component.css']
})
export class SubirimagenComponent implements OnInit {

  constructor(private router:ActivatedRoute, private _fallecidoService:FallecidosService) { }
  public id = this.router.snapshot.params.id;
  public imagenes:any;

  ngOnInit(): void {
    console.log(this.id);
  }
  
  guardarImagen(e:any){
    this.imagenes = e.target.files;
  }

  subir(){
    
    for (let index = 0; index < this.imagenes.length; index++) {
      this._fallecidoService.subirImagen(this.imagenes[index], this.id).subscribe(
        data =>{
        },
        error =>{
          console.log(error);
        }
      )
      
    }

  }

}
