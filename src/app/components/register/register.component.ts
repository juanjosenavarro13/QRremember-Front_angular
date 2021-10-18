import { Component, OnInit } from '@angular/core';
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
  public usuario:User;

  constructor(private _authService:AuthService) {
    this.usuario = new User(0,'','','');
   }

  ngOnInit(): void {}


  register(user:User){
    this._authService.register(user).subscribe(
      data => {
        console.log(data);
        this.registrado = true;
        this.error = false;
      },
      err => {
        console.log(err);
        this.registrado = false;
        this.error = true;
      }
    )
  }

}
