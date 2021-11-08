import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FallecidoModel } from 'src/app/models/FallecidoModel';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { FallecidosService } from 'src/app/services/fallecidos.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public login:boolean =this._authService.user_active;
  public user:User;
  public fallecido:FallecidoModel;

  constructor(private _authService:AuthService, private _fallecidoService:FallecidosService, private router: Router) {
    this.user = new User(0,'');
    this.fallecido = new FallecidoModel('','',new Date(),new Date(),'','','');
   }

  ngOnInit(): void {
    this.getuser();
  }

  buscar(form:any){
    console.log(form);
    this.router.navigate(['/buscar/'+form.nombre]);
  }

  logout(){
    this._authService.logout();
  }

  getuser(){
    if(this.login){
      this._authService.getUser().subscribe(
        data => {
          this.user = data;
          this._fallecidoService.ubtenerUsuarioMain(data.id).subscribe(
            data =>{
              this.fallecido = data;
            }
          )
          
        },
        err => {
          this._authService.logout();
        }
      )
    }
    this._authService.saveUser();
  }




}
