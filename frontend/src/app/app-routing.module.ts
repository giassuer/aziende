import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AziendeComponent } from './componenti/pagine/aziende/aziende.component';
import { ContrattiComponent } from './componenti/pagine/contratti/contratti.component';
import { HomeComponent } from './componenti/pagine/home/home.component';
import { PersoneComponent } from './componenti/pagine/persone/persone.component';

const routes: Routes = [
  {path: 'persone', component : PersoneComponent},
  {path: 'aziende', component : AziendeComponent},
  {path: 'contratti', component : ContrattiComponent},
  {path: 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
