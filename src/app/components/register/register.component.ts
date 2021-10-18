import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public registrado:boolean=false;
  public error:boolean=false;

  constructor(private _authService:AuthService, private Router:Router) {
   }

  ngOnInit(): void {}


  register(user:User){
    this._authService.register(user).subscribe(
      data => {
        this.Router.navigateByUrl('/');
      },
      err => {
        console.log(err);
        this.registrado = false;
        this.error = true;
      }
    )
  }

}
