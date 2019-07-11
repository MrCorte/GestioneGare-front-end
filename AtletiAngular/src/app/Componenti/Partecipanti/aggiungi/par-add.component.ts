import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { GaraServizioService } from 'src/app/Servizi/Gara/gara-servizio.service';
import { Gara } from 'src/app/Entità/Gara';
import { AtletaServizioService } from 'src/app/Servizi/Atleta/atleta-servizio.service';
import { Atleta } from 'src/app/Entità/Atleta';
import { Partecipante } from 'src/app/Entità/Partecipanti';
import { PartecipantiServiceService } from 'src/app/Servizi/Partecipanti/partecipanti-service.service';

@Component({
  selector: 'app-par-add',
  templateUrl: './par-add.component.html',
  styleUrls: ['./par-add.component.css']
})
export class ParAddComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private dataG: GaraServizioService, private dataA: AtletaServizioService, private dataP: PartecipantiServiceService) { }
  gara: Gara;
  atleta: Atleta;
  atleti: Atleta[];
  partecipante = new Partecipante();
  partecipanteForm: FormGroup;
  filtro = '';

  ngOnInit() {
    var Id = this.route.snapshot.paramMap.get('Id');
    this.dataG.getGaraById(Id).subscribe(dataG => {
      this.gara = dataG;
      this.dataA.getListaAtleti(this.filtro).subscribe(dataA => {
        this.atleti = dataA;
      });
    });
    this.partecipanteForm = this.fb.group({
      IdAtleta: this.fb.control({
        selectedId: ['', Validators.required]
      }),
    });
  }
  addPartecipante(formValue) {
    this.partecipante.IdAtleta = formValue.IdAtleta;
    this.partecipante.IdGara = this.gara.Id;
    this.dataP.postPartecipante(this.partecipante).subscribe(data => {
      if (data) {
        this.router.navigate(['Posizioni/' + this.partecipante.IdGara]);
      }
      if (data === false) {
        window.alert('atleta già presente nella gara');
      }

    });
  }
}
