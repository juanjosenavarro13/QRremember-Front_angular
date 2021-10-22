import {Component, OnInit} from '@angular/core';
import { FallecidoModel } from 'src/app/models/FallecidoModel';
import { AuthService } from 'src/app/services/auth.service';
import { FallecidosService } from 'src/app/services/fallecidos.service';

@Component({
  selector: 'app-ultimos-fallecidos',
  templateUrl: './ultimos-fallecidos.component.html',
  styleUrls: ['./ultimos-fallecidos.component.css']
})
export class UltimosFallecidosComponent implements OnInit {
  public fallecidos: FallecidoModel[] = [];
  public error:string = "";



  constructor(private _fallecidosService: FallecidosService, private _authService:AuthService) {}

  public user_active = this._authService.user_active;

  ngOnInit(): void {
    this.ultimos_fallecidos();
  }

  ultimos_fallecidos() {
    this._fallecidosService.ultimos_fallecidos().subscribe(
      data => {
        this.fallecidos = data;
      },
      error => {
        console.log(error);
        this.error = "Error-> " + error.message;
      }
    )
  }



}
