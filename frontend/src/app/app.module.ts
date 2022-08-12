import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componenti/header/header.component';
import { FooterComponent } from './componenti/footer/footer.component';
import { PersoneComponent } from './componenti/pagine/persone/persone.component';
import { ContrattiComponent } from './componenti/pagine/contratti/contratti.component';
import { HomeComponent } from './componenti/pagine/home/home.component';
import { TabellaComponent } from './componenti/tabella/tabella.component';
import { AziendeComponent } from './componenti/pagine/aziende/aziende.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PersoneComponent,
    ContrattiComponent,
    TabellaComponent,
    AziendeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
