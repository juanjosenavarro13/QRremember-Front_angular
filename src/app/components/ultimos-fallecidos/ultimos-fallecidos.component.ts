import { DatePipe } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {HistoryModel} from 'src/app/models/HistoryModel';
import { HistoriesService} from 'src/app/services/histories.service';

@Component({
  selector: 'app-ultimos-fallecidos',
  templateUrl: './ultimos-fallecidos.component.html',
  styleUrls: ['./ultimos-fallecidos.component.css']
})
export class UltimosFallecidosComponent implements OnInit {
  public fallecidos: HistoryModel[] = [];
  public fecha_actual:Date = new Date();
  public error:string = "";



  constructor(private historyservice: HistoriesService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.ultimos_fallecidos();
    console.log(this.datePipe.transform(this.fecha_actual,"dd/MM/yyyy"));
    console.log(this.fecha_actual);
  }

  ultimos_fallecidos() {
    this.historyservice.ultimos_fallecidos().subscribe(
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
