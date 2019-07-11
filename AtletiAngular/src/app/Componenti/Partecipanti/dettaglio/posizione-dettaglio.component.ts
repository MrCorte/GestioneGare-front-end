import { Component, OnInit } from '@angular/core';
import { Partecipante } from 'src/app/Entità/Partecipanti';
import { PartecipantiServiceService } from 'src/app/Servizi/Partecipanti/partecipanti-service.service';
import { Gara } from 'src/app/Entità/Gara';
import { Route, ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AtletaServizioService } from 'src/app/Servizi/Atleta/atleta-servizio.service';
import { Atleta } from 'src/app/Entità/Atleta';
import { PartecipantiViewService } from 'src/app/Servizi/PartecipantiView/partecipanti-view.service';
import { PartecipantiView } from 'src/app/Entità/PartecipantiView';
import { GaraServizioService } from 'src/app/Servizi/Gara/gara-servizio.service';

@Component({
  selector: 'app-posizione-dettaglio',
  templateUrl: './posizione-dettaglio.component.html',
  styleUrls: ['./posizione-dettaglio.component.css']
})
export class PosizioneDettaglioComponent implements OnInit {

  gara: Gara;
  partecipanteV: PartecipantiView;
  partecipantiV: PartecipantiView[];
  partecipante = new Partecipante();
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private dataV: PartecipantiViewService, private dataG: GaraServizioService, private dataP: PartecipantiServiceService) { console.log('ciao'); }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    var IdGara = this.route.snapshot.paramMap.get('IdGara');
    this.dataV.getListaPartecipantiViewById(IdGara).subscribe(dataV => {
      this.partecipantiV = dataV;
      this.dataG.getGaraById(IdGara).subscribe(dataG => {
        this.gara = dataG;
      });
    });
  }
  eliminaAtleta(partecipanteV) {
    if (window.confirm('sei sicuro di voler eliminare questo atleta')) {
      this.partecipante.IdAtleta = partecipanteV.IdAtleta;
      this.partecipante.IdGara = partecipanteV.IdGara;
      this.dataP.deletePartecipante(this.partecipante.IdGara, this.partecipante.IdAtleta).subscribe(data => {
        if (data === true) {
         this.router.navigate(['Posizioni/' + this.partecipante.IdGara]);
          // location.reload();
        }
      });
    }
  }
}


