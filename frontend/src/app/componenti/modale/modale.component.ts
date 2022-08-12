import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {

    // selectField : FormControl = new FormControl("");
    form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id:any , type:string},
    public fb : FormBuilder
    ) {
        this.form = fb.group({
            nome : 'ciao',
            // 'nome2' : ['ariciao', Validators.required],
        });
     }

     populate(){
        this.form.setValue({
            nome : 'gesù'
        })
     }

  ngOnInit() {
    console.log("Sono nel dialog");
    console.table(this.data.type);
    console.log(this.form);
    
    // this.form = new FormGroup({
    //     name : new FormControl(),
    //     name2 : new FormControl()
    // })
    
  }

}
