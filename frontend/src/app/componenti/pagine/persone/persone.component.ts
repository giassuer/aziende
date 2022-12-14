import { Component, OnInit } from '@angular/core';
import { personeApiService } from 'src/app/service/persone-api.service';


@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css']
})
export class PersoneComponent implements OnInit {

  columns: string[] = ['persona_nome', 'persona_cognome', 'persona_mail', 'azioni'];
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
      
      this.personeArray = p.data;
    })
  }

}
