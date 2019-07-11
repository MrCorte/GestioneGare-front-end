import { Component, OnInit } from '@angular/core';
import { AtletaServizioService } from 'src/app/Servizi/Atleta/atleta-servizio.service';
import { GaraServizioService } from 'src/app/Servizi/Gara/gara-servizio.service';
import { Atleta } from 'src/app/Entità/Atleta';
import { Gara } from 'src/app/Entità/Gara';
import { Partecipante } from 'src/app/Entità/Partecipanti';
import { PartecipantiServiceService } from 'src/app/Servizi/Partecipanti/partecipanti-service.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartecipantiView } from 'src/app/Entità/PartecipantiView';

@Component({
  selector: 'app-par-iscrivi-atleta',
  templateUrl: './par-iscrivi-atleta.component.html',
  styleUrls: ['./par-iscrivi-atleta.component.css']
})
export class ParIscriviAtletaComponent implements OnInit {
  atleta: Atleta;
  listaAtleti: Atleta[];
  gara: Gara;
  listaGare: Gara[];
  partecipante = new Partecipante();
  partecipantiForm: FormGroup;
  filtro = '';

  // tslint:disable-next-line:max-line-length
  constructor(private dataA: AtletaServizioService, private dataG: GaraServizioService, private dataP: PartecipantiServiceService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.dataA.getListaAtleti(this.filtro).subscribe(dataA => {
      this.listaAtleti = dataA;
      this.dataG.getListaGare().subscribe(dataG => {
        this.listaGare = dataG;
        });
      });
    this.partecipantiForm = this.fb.group({
      IdAtleta: this.fb.control({
        selectedId: ['', Validators.required]
      }),
      IdGara: this.fb.control({
        selectedId: ['', Validators.required]
      })
    });
  }
  addPartecipante(formValue) {
      var tmp = this.partecipantiForm.getRawValue();
      this.partecipante.IdAtleta = formValue.IdAtleta;
      this.partecipante.IdGara = formValue.IdGara;
      this.dataP.postPartecipante(this.partecipante).subscribe(data => {
        if (data) {
        this.router.navigate(['AtletaLista']);
        }
      });
  }
}
