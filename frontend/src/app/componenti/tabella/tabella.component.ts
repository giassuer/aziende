import { Component, Input, OnInit } from '@angular/core';
import { ContrattiApiService } from 'src/app/service/contratti-api.service';
import { personeApiService } from 'src/app/service/persone-api.service';
import { PersoneComponent } from '../pagine/persone/persone.component';
import { AziendeApiService } from 'src/app/service/aziende-api.service';
import { MatDialog } from '@angular/material/dialog';
import { ModaleComponent } from '../modale/modale.component';
import { FormControl } from '@angular/forms';
import { AziendeComponent } from '../pagine/aziende/aziende.component';





@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  @Input() displayedColumns : any;
  @Input() dataSource : any;
  @Input() NomeTabella: any;
  
  // formField : FormControl = new FormControl('ciao!!!');

  constructor(
    public persone: personeApiService,
    public contratti: ContrattiApiService,
    public aziende: AziendeApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    
  }
  openDialog(id: any): void {
    
    const dialogRef = this.dialog.open(ModaleComponent, {
      width: '500px',
      height: '500px',
      data: { id : id, type: this.NomeTabella},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.NomeTabella);
      
      if (this.NomeTabella == 'Persona') {
        this.dataSource =  [];
        this.persone.getpersone().subscribe(r => {
        this.dataSource = r.data;
        })
      }

      if (this.NomeTabella == 'aziende') {
        this.dataSource =  [];
      this.aziende.getAziende().subscribe(r => {
        this.dataSource = r.data;
      })
      }

      if (this.NomeTabella == 'contratti') {
        this.dataSource =  [];
      this.contratti.getContratti().subscribe(r => {
        this.dataSource = r.data;
      })
      }
      
      // this.dataSource =  [];
      // this.persone.getpersone().subscribe(r => {
      //   this.dataSource = r.data;
      // })
    })
  }


}
