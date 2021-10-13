import {
  Component,
  OnInit
} from '@angular/core';
import {
  HistoryModel
} from 'src/app/models/HistoryModel';
import {
  HistoriesService
} from 'src/app/services/histories.service';

@Component({
  selector: 'app-ultimos-fallecidos',
  templateUrl: './ultimos-fallecidos.component.html',
  styleUrls: ['./ultimos-fallecidos.component.css']
})
export class UltimosFallecidosComponent implements OnInit {
  public fallecidos: HistoryModel[] = [];
  public fecha:Date = new Date();
  public error:string = "";



  constructor(private historyservice: HistoriesService) {}

  ngOnInit(): void {
    this.ultimos_fallecidos();
    console.log(this.fecha);
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
