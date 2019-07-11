import { Component, OnInit } from '@angular/core';
import { AtletaServizioService } from 'src/app/Servizi/Atleta/atleta-servizio.service';
import { Atleta } from 'src/app/Entità/Atleta';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-atleta-edit',
  templateUrl: './atleta-edit.component.html',
  styleUrls: ['./atleta-edit.component.css']
})
export class AtletaEditComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private dataA: AtletaServizioService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private datePipe: DatePipe) {
    this.createForm();
  }

  atleta: Atleta;
  Atleta = new Atleta();
  atletaForm: FormGroup;
  dataD: any;


  ngOnInit() {
    var Id = this.route.snapshot.paramMap.get('Id');
    this.dataA.getAtletaById(Id).subscribe(data => {
      this.atleta = data;
      this.setForm();
    });
  }

  createForm() {
    this.atletaForm = this.fb.group({
      Nome: ['', Validators.required],
      Cognome: ['', Validators.required],
      Data: ['', Validators.required],
      Peso: ['', Validators.required]
    });
  }
  setForm() {
    this.atletaForm.setValue({
      Nome: this.atleta.Nome,
      Cognome: this.atleta.Cognome,
      Data: this.formatDate(this.atleta.Data),
      Peso: this.atleta.Peso
    });

  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  ModificaAtleta(formValue) {
    this.atleta.Nome = formValue.Nome;
    this.atleta.Cognome = formValue.Cognome;
    this.atleta.Data = new Date(formValue.Data);
    this.atleta.Peso = formValue.Peso;
    this.dataA.putAtleta(this.atleta).subscribe(data => {
      if (data) {
        this.router.navigate(['AtletaLista']);
      }
    });
  }
}
