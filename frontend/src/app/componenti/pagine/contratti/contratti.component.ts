import { Component, OnInit } from '@angular/core';
import { ContrattiApiService } from 'src/app/service/contratti-api.service';

export interface PeriodicElement {
  // name: string;
  // contratto_intestatario: string;
  // contratto_progetto: string;
}


@Component({
  selector: 'app-contratti',
  templateUrl: './contratti.component.html',
  styleUrls: ['./contratti.component.css']
})
export class ContrattiComponent implements OnInit {

  columns: string[] = ['contratto_intestatario', 'contratto_progetto'];
  dataSource = [];
  contrattiArray : any = [];

  constructor(
    public contratti: ContrattiApiService
  ) { }

  ngOnInit() {
    this.getContratti();
  }

  getContratti(){
    this.contratti.getContratti().subscribe(c =>{
      console.table(c.data);
      
      this.contrattiArray = c.data;
    })
  }

}
