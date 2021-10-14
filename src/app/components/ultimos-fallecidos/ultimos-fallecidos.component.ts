import { DatePipe } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FallecidoModel } from 'src/app/models/FallecidoModel';
import { FallecidosService } from 'src/app/services/fallecidos.service';

@Component({
  selector: 'app-ultimos-fallecidos',
  templateUrl: './ultimos-fallecidos.component.html',
  styleUrls: ['./ultimos-fallecidos.component.css']
})
export class UltimosFallecidosComponent implements OnInit {
  public fallecidos: FallecidoModel[] = [];
  public fecha_actual:Date = new Date();
  public error:string = "";



  constructor(private _fallecidosService: FallecidosService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.ultimos_fallecidos();
    console.log(this.datePipe.transform(this.fecha_actual,"dd/MM/yyyy"));
    console.log(this.fecha_actual);
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
