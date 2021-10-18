import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public identificado:boolean=false;
  public error:boolean= false;


  constructor(private _authService:AuthService, private Router:Router) { }

  ngOnInit(): void {
  }


  login(user:User){
    this._authService.login(user).subscribe(
      data => {
        // redireccionar
      this.Router.navigateByUrl('/');
      },
      err => {
        this.error = true;
      }
    )
  }


}
