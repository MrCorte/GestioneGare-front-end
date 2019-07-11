import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtletaInserisciComponent } from './Componenti/Atleta/inserisci/atleta-inserisci.component';
import { AtletaEliminaComponent } from './Componenti/Atleta/list/atleta-elimina.component';
import { GaraInserisciComponent } from './Componenti/Gara/inserisci/gara-inserisci.component';
import { GaraListaComponent } from './Componenti/Gara/lista/gara-lista.component';
import { ParListaComponent } from './Componenti/Partecipanti/lista/par-lista.component';
import { ParIscriviAtletaComponent } from './Componenti/Partecipanti/iscrivi-atleta/par-iscrivi-atleta.component';
import { ParClassificaComponent } from './Componenti/Partecipanti/editAtleta/par-classifica.component';
import { PosizioneDettaglioComponent } from './Componenti/Partecipanti/dettaglio/posizione-dettaglio.component';
import { ParAggionaComponent } from './Componenti/Partecipanti/aggiona/par-aggiona.component';
import { AtletaEditComponent } from './Componenti/Atleta/edit/atleta-edit.component';
import { GaraEditComponent } from './Componenti/Gara/edit/gara-edit.component';
import {GaraDettaglioComponent} from './Componenti/Gara/dettaglio/gara-dettaglio.component';
import {ParAddComponent} from './Componenti/Partecipanti/aggiungi/par-add.component';
import {ClassificaComponent} from '../app/Componenti/Classifica/classifica/classifica.component';

const routes: Routes = [
  { path: '', redirectTo: 'AtletaLista', pathMatch: 'full' },
  {
    path: 'AtletaInserisci',
    component: AtletaInserisciComponent
  },
  {
    path: 'AtletaLista',
    component: AtletaEliminaComponent
  },
  {
    path: 'GaraInserisci',
    component: GaraInserisciComponent
  },
  {
    path: 'GaraLista',
    component: GaraListaComponent
  },
  {
    path: 'PartecipantiLista',
    component: ParListaComponent
  },
  {
    path: 'PartecipantiIscrivi',
    component: ParIscriviAtletaComponent
  },
  {
    path: 'PartecipantiClassifica/:Id/:IdAtleta',
    component: ParClassificaComponent
  },
  {
    path: 'Posizioni/:IdGara',
    component: PosizioneDettaglioComponent
  },
  {
    path: 'Posizioni/:IdGara/:IdAtleta',
    component: ParAggionaComponent
  },
  {
    path: 'AtletaEdit/:Id',
    component: AtletaEditComponent
  },
  {
    path: 'GaraEdit/:Id',
    component: GaraEditComponent
  },
  {
    path: 'GaraDettaglio/:Id',
    component: GaraDettaglioComponent
  },
  {
    path: 'Posizioni/:Id/AggiungiPartecipante/:Id',
    component: ParAddComponent
  },
  {
    path: 'Classifica/:IdGara',
    component: ClassificaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
