import { Component, OnInit } from '@angular/core';
import { AziendeApiService } from 'src/app/service/aziende-api.service';

@Component({
  selector: 'app-aziende',
  templateUrl: './aziende.component.html',
  styleUrls: ['./aziende.component.css']
})
export class AziendeComponent implements OnInit {

  columns: string[] = ['azienda_nome', 'azienda_indirizzo', 'azioni'];
  dataSource = [];
  aziendeArray : any = [];

  constructor(
    public aziende : AziendeApiService
  ) { }

  ngOnInit() {
    this.getAziende();
    console.log("arrivo Azieda");
    
  }

  getAziende(){
    this.aziende.getAziende().subscribe(a =>{
      console.table(a.data);
      
      this.aziendeArray = a.data;
    })
  }

}
