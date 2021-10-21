import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public login:boolean =this._authService.user_active;

  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    this.getuser();
  }

  logout(){
    this._authService.logout();
  }

  getuser(){
    
  }




}
