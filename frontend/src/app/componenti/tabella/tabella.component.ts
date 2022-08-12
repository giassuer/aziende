import { Component, Input, OnInit } from '@angular/core';
import { ContrattiApiService } from 'src/app/service/contratti-api.service';
import { personeApiService } from 'src/app/service/persone-api.service';
import { AziendeApiService } from 'src/app/service/aziende-api.service';
import { MatDialog } from '@angular/material/dialog';
import { ModaleComponent } from '../modale/modale.component';





@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  @Input() displayedColumns : any;
  @Input() dataSource : any;
  @Input() NomeTabella: any;
  
  

  constructor(
    public persone: personeApiService,
    public contratti: ContrattiApiService,
    public aziende: AziendeApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    console.log(this.NomeTabella);
    
    // this.getPersone();
  }
  openDialog(id: any): void {
    
    const dialogRef = this.dialog.open(ModaleComponent, {
      width: '500px',
      height: '500px',
      data: { id: id, type: this.NomeTabella},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }


}
