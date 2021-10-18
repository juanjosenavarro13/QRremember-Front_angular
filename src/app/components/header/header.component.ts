import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public login:boolean = false;

  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    this.estado_identificado();
  }


  estado_identificado(){
    if(this._authService.getToken()){
      console.log("identificado");
    }else{
      console.log("no identificado");
    }
  }


}
