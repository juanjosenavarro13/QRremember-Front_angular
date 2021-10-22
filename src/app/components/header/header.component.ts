import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public login:boolean =this._authService.user_active;
  public user:User;

  constructor(private _authService:AuthService) {
    this.user = new User(0,'');
   }

  ngOnInit(): void {
    this.getuser();
  }

  logout(){
    this._authService.logout();
  }

  getuser(){
    if(this.login){
      this._authService.getUser().subscribe(
        data => {
          this.user = data;
        },
        err => {
          this._authService.logout();
        }
      )
    }
    this._authService.saveUser();
  }




}
