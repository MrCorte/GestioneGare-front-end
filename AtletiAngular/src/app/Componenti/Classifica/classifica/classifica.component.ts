import { Component, OnInit } from '@angular/core';
import { GaraServizioService } from 'src/app/Servizi/Gara/gara-servizio.service';
import { Gara } from 'src/app/Entità/Gara';
import { PartecipantiView } from 'src/app/Entità/PartecipantiView';
import { PartecipantiViewService } from 'src/app/Servizi/PartecipantiView/partecipanti-view.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent implements OnInit {

  gara: Gara;
  partecipanteV: PartecipantiView;
  partecipantiV: PartecipantiView[];
  constructor(private dataV: PartecipantiViewService, private dataG: GaraServizioService, private route: ActivatedRoute) { }

  ngOnInit() {
    var IdGara = this.route.snapshot.paramMap.get('IdGara');
    this.dataV.getListaPartecipantiViewById(IdGara).subscribe(dataV => {
      this.partecipantiV = dataV;
      this.dataG.getGaraById(IdGara).subscribe(dataG => {
        this.gara = dataG;
      });
    });
  }
}