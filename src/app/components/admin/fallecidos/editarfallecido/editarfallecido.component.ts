import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FallecidoModel } from 'src/app/models/FallecidoModel';
import { User } from 'src/app/models/User';
import { ConfiggeneralService } from 'src/app/services/configgeneral.service';
import { FallecidosService } from 'src/app/services/fallecidos.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editarfallecido',
  templateUrl: './editarfallecido.component.html',
  styleUrls: ['./editarfallecido.component.css']
})

export class EditarfallecidoComponent implements OnInit {
  public admin = localStorage.getItem('ROLE');
  private id = this.rutaActiva.snapshot.params.id;
  public fallecido: FallecidoModel;
  public usuarios!: User[];
  public error:boolean=false; edit:boolean=false;
  imagen: any;

  constructor(private rutaActiva:ActivatedRoute, private _fallecidosService:FallecidosService, private _general:ConfiggeneralService, private _usuariosService:UsuarioService) {
    this.fallecido = new FallecidoModel('','',new Date(), new Date(),'','','');
   }

  ngOnInit(): void {
    let elemento :any = document.getElementById('cambiarRole');
    elemento.style = "visibility:hidden";
    this.obtenerInfo(this.id);
    this.obtenerUsuarios();
  }



  obtenerUsuarios(){
    this._usuariosService.lista().subscribe(
      res =>{
        this.usuarios = res;
      }
    )
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
    this._fallecidosService.update(form,this.id).subscribe(
      data =>{
        this.edit = true;
        this.error = false;
        if(this.imagen != null){
          this._fallecidosService.guardarImagen(this.imagen, this.id).subscribe(res =>{})
        }
      },
      error =>{
        console.log(error);
        this.edit = false;
        this.error = true;
      }
    )
  }

  guardarImagen(event:any){
    this.imagen = event.target.files[0];
  }
}
