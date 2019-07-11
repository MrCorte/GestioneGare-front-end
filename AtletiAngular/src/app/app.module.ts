import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Componenti/nav-bar/nav-bar.component';
import { AtletaInserisciComponent } from './Componenti/Atleta/inserisci/atleta-inserisci.component';
import { AtletaEliminaComponent } from './Componenti/Atleta/list/atleta-elimina.component';
import { GaraListaComponent } from './Componenti/Gara/lista/gara-lista.component';
import { GaraInserisciComponent } from './Componenti/Gara/inserisci/gara-inserisci.component';
import { ParClassificaComponent } from './Componenti/Partecipanti/editAtleta/par-classifica.component';
import { ParIscriviAtletaComponent } from './Componenti/Partecipanti/iscrivi-atleta/par-iscrivi-atleta.component';
import { ParListaComponent } from './Componenti/Partecipanti/lista/par-lista.component';
import { PosizioneDettaglioComponent } from './Componenti/Partecipanti/dettaglio/posizione-dettaglio.component';
import { ParAggionaComponent } from './Componenti/Partecipanti/aggiona/par-aggiona.component';
import { AtletaEditComponent } from './Componenti/Atleta/edit/atleta-edit.component';
import { DatePipe } from '@angular/common';
import { GaraEditComponent } from './Componenti/Gara/edit/gara-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { GaraDettaglioComponent } from './Componenti/Gara/dettaglio/gara-dettaglio.component';
import { ParAddComponent } from './Componenti/Partecipanti/aggiungi/par-add.component';
import { ClassificaComponent } from '../app/Componenti/Classifica/classifica/classifica.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AtletaInserisciComponent,
    AtletaEliminaComponent,
    GaraListaComponent,
    GaraInserisciComponent,
    ParClassificaComponent,
    ParIscriviAtletaComponent,
    ParListaComponent,
    PosizioneDettaglioComponent,
    ParAggionaComponent,
    AtletaEditComponent,
    GaraEditComponent,
    GaraDettaglioComponent,
    ParAddComponent,
    ClassificaComponent,
  ],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, AppRoutingModule, BsDropdownModule, HttpClientModule, HttpModule, ReactiveFormsModule, FormsModule, MatMenuModule, MatNativeDateModule, BrowserAnimationsModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
