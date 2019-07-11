import { Component, OnInit } from '@angular/core';
import { GaraServizioService } from 'src/app/Servizi/Gara/gara-servizio.service';
import { ActivatedRoute } from '@angular/router';
import { Gara } from 'src/app/Entità/Gara';

@Component({
  selector: 'app-gara-dettaglio',
  templateUrl: './gara-dettaglio.component.html',
  styleUrls: ['./gara-dettaglio.component.css']
})
export class GaraDettaglioComponent implements OnInit {

  constructor(private dataG: GaraServizioService, private route: ActivatedRoute) { }

  gara: Gara;

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    var Id = this.route.snapshot.paramMap.get('Id');
    this.dataG.getGaraById(Id).subscribe(dataG => {
      this.gara = dataG;
      });
  }

}
