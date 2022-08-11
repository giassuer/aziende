import { Component, OnInit } from '@angular/core';
import { personeApiService } from 'src/app/service/persone-api.service';

export interface PeriodicElement {
  name: string;
  persona_nome: string;
  persona_cognome: string;
  persona_mail: any;
}

@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css']
})
export class PersoneComponent implements OnInit {

  columns: string[] = ['persona_nome', 'persona_cognome', 'persona_mail'];
  dataSource = [];
  personeArray : any = [];

  constructor(
    public persone: personeApiService
  ) { }
  
  ngOnInit() {
    this.getPersone();
  }

  getPersone(){
    this.persone.getpersone().subscribe(p =>{
      console.table(p.data);
      
      this.personeArray = p.data;
    })
  }

}
