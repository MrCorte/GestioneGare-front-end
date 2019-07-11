import { Component, OnInit, Input } from '@angular/core';
import { Gara } from '../../../Entità/Gara';
import { GaraServizioService } from '../../../Servizi/Gara/gara-servizio.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gara-inserisci',
  templateUrl: './gara-inserisci.component.html',
  styleUrls: ['./gara-inserisci.component.css']
})
export class GaraInserisciComponent implements OnInit {
  gara = new Gara();
  garaForm: FormGroup;

  constructor(private data: GaraServizioService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.garaForm = this.fb.group({
      Nome: ['', Validators.required],
      Data: ['', Validators.required],
      Sport: ['', Validators.required]
    });
  }
  AggiungiGara(formValue) {
    this.gara.Nome = formValue.Nome;
    this.gara.Data = formValue.Data;
    this.gara.Sport = formValue.Sport;
    this.data.postGara(this.gara).subscribe(data => {
      if (data) {
        this.router.navigate(['GaraLista']);
      }
    });
  }

}

