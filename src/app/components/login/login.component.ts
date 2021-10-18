import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public identificado:boolean=false;
  public error:boolean= false;
  public usuario:User;


  constructor(private _authService:AuthService) {
    this.usuario = new User(0,'','','');
   }

  ngOnInit(): void {
  }


  login(user:User){
    this._authService.login(user).subscribe(
      data => {
        this._authService.saveToken(data.access_token, data.expires_in);
        this.identificado = true;
        this.error = false;
      },
      err => {
        this.error = true;
        this.identificado = false;
      }
    )
  }


}
