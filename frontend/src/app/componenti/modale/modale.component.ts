import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TabellaComponent } from '../tabella/tabella.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgModel } from '@angular/forms';
import { elementAt } from 'rxjs';
import { personeApiService } from 'src/app/service/persone-api.service';
import { AziendeApiService } from 'src/app/service/aziende-api.service';
import { ContrattiApiService } from 'src/app/service/contratti-api.service';


@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {

    // selectField : FormControl = new FormControl("");
    formPersone: FormGroup;
    formAziende: FormGroup;
    formContratti: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id:any, type:string},
    public dialogRef: MatDialogRef<ModaleComponent>,
    public fb : FormBuilder,
    public api : personeApiService,
    public apiAz : AziendeApiService,
    public apiCo : ContrattiApiService,
    ) {
        this.formPersone = fb.group({
            id: null,
            persona_nome : null,
            persona_cognome : null,
            persona_mail : null,
        });

        this.formAziende = fb.group({
          id: null,
          azienda_nome : null,
          azienda_indirizzo : null,
        });

        this.formContratti = fb.group({
          id: null,
          contratto_nome : null,
          contratto_progetto : null,
        });
     }

  salva(){
    switch (this.data.type) {
      case "Persone":
        console.log(this.formPersone.value);
        this.api.editPersona(this.formPersone.value).subscribe(r =>{
        this.dialogRef.close();
        // window.location.reload();
        // this.tab.dataSource = 'reload';
        })
      break;
      case "aziende":
        console.log(this.formAziende.value);
        this.apiAz.editAziende(this.formAziende.value).subscribe(r =>{
        this.dialogRef.close();
        // window.location.reload();
        // this.tab.dataSource = 'reload';

        })
      break;
      default:
        break;
    }

    
  }

  ngOnInit() {
    console.log(this.data.id);
    console.log(this.data.type);
    switch (this.data.type) {
      case "Persone":
        this.api.showPersona(this.data.id).subscribe(result => {
          console.log(result.data);
          this.formPersone.setValue({id: result.data.id,persona_nome: result.data.persona_nome, persona_cognome: result.data.persona_cognome, persona_mail: result.data.persona_mail});
        })
      break;
      case "Contratti":
        this.apiCo.showContratti(this.data.id).subscribe(result => {
          console.log(result.data);
          this.formAziende.setValue({id: result.data.id,contratto_intestatario: result.data.contratto_intestatario, contratto_progetto: result.data.contratto_progetto});
        })
      break;
      case "aziende":
        this.apiAz.showAziende(this.data.id).subscribe(result => {
          console.log(result.data);
          this.formAziende.setValue({id: result.data.id,azienda_nome: result.data.azienda_nome, azienda_indirizzo: result.data.azienda_indirizzo});
        })
      break;

      default:
        break;
    }
    
    
    // console.log("Sono nel dialog");
    // console.table(this.data.type);
    // console.log(this.form);
    
    // this.form = new FormGroup({
    //     name : new FormControl(),
    //     name2 : new FormControl()
    // })
    
  }

}
