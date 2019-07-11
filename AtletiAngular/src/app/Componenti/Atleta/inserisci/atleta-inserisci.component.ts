import { Component, OnInit, Input } from '@angular/core';
import { Atleta } from 'src/app/Entità/Atleta';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AtletaServizioService } from '../../../Servizi/Atleta/atleta-servizio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atleta-inserisci',
  templateUrl: './atleta-inserisci.component.html',
  styleUrls: ['./atleta-inserisci.component.css']
})
export class AtletaInserisciComponent implements OnInit {

  Atleta = new Atleta();
  atletaForm: FormGroup;


  constructor(
    public restApi: AtletaServizioService,
    public router: Router,
    private fb: FormBuilder
  ) {
  }
  ngOnInit() {
    this.atletaForm = this.fb.group({
      Nome: ['', Validators.required],
      Cognome: ['', Validators.required],
      Data: ['', Validators.required],
      Peso: ['', Validators.required]
    });
  }

  AggiungiAtleta(formValue) {
    this.Atleta.Nome = formValue.Nome;
    this.Atleta.Cognome = formValue.Cognome;
    this.Atleta.Data = new Date(formValue.Data);
    this.Atleta.Peso = formValue.Peso;
    this.restApi.postAtleta(this.Atleta).subscribe(data => {
      if (data) {
        this.router.navigate(['AtletaLista']);
      }
    });
  }

}
