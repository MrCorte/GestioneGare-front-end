import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Partecipante } from 'src/app/Entità/Partecipanti';
import { PartecipantiServiceService } from 'src/app/Servizi/Partecipanti/partecipanti-service.service';
import { Atleta } from 'src/app/Entità/Atleta';
import { AtletaServizioService } from 'src/app/Servizi/Atleta/atleta-servizio.service';
import { GaraServizioService } from 'src/app/Servizi/Gara/gara-servizio.service';
import { Gara } from 'src/app/Entità/Gara';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-par-aggiona',
  templateUrl: './par-aggiona.component.html',
  styleUrls: ['./par-aggiona.component.css']
})
export class ParAggionaComponent implements OnInit {
  partecipante: Partecipante;
  partecipanti: Partecipante[];
  gara: Gara;
  atleta: Atleta;
  posizioneForm: FormGroup;
  n: number;
  Counter(i: number) {
    return new Array(i);
  }
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private dataP: PartecipantiServiceService, private dataA: AtletaServizioService, private dataG: GaraServizioService, private fb: FormBuilder) { }

  ngOnInit() {
    this.partecipante = new Partecipante();
    var IdGara = this.route.snapshot.paramMap.get('IdGara');
    this.dataG.getGaraById(IdGara).subscribe(dataG => {
      this.gara = dataG;
    });
    var IdAtleta = this.route.snapshot.paramMap.get('IdAtleta');
    this.dataA.getAtletaById(IdAtleta).subscribe(dataA => {
      this.atleta = dataA;
    });

    this.posizioneForm = this.fb.group({
      Posizione: ['', Validators.required]
    });
  }
  updatePosizione(formValue) {
    this.partecipante.IdAtleta = this.atleta.Id;
    this.partecipante.IdGara = this.gara.Id;
    this.partecipante.PosizioneAtleta = formValue.Posizione;
    if (this.partecipante.PosizioneAtleta <= 0) {
      window.alert('posizione non valida, inserire un numero maggiore di 0');
    } else {
      this.dataP.updatePosizione(this.partecipante).subscribe(data => {
        if (data === true) {
          this.router.navigate(['Classifica/' + this.gara.Id]);
        } else {
          window.alert('posizione già occupata');
        }
      });
    }
  }
}
