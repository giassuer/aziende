import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id:any , type:string}
    ) { }



  ngOnInit() {
    console.log("Sono nel dialog");
    console.table(this.data.type);
    
    
  }

}
