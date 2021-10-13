import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public login:boolean = false;

  constructor(private _user:UsersService) { }

  ngOnInit(): void {
    this.login = this._user.comprobar_login();
  }


}
