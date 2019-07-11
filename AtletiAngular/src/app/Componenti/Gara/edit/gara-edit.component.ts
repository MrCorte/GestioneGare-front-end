import { Component, OnInit } from '@angular/core';
import { GaraServizioService } from 'src/app/Servizi/Gara/gara-servizio.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gara } from 'src/app/Entità/Gara';

@Component({
  selector: 'app-gara-edit',
  templateUrl: './gara-edit.component.html',
  styleUrls: ['./gara-edit.component.css']
})
export class GaraEditComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private dataG: GaraServizioService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { this.createForm(); }

  Gara = new Gara();
  gara: Gara;
  garaForm: FormGroup;

  ngOnInit() {
    var Id = this.route.snapshot.paramMap.get('Id');
    this.dataG.getGaraById(Id).subscribe(data => {
      this.gara = data;
      this.setForm();
    });
  }
  createForm() {
    this.garaForm = this.fb.group({
      Nome: ['', Validators.required],
      Data: ['', Validators.required],
      Sport: ['', Validators.required]
    });
  }
  setForm() {
    this.garaForm.setValue({
      Nome: this.gara.Nome,
      Data: this.formatDate(this.gara.Data),
      Sport: this.gara.Sport
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
  ModificaGara(formValue) {
    this.gara.Nome = formValue.Nome;
    this.gara.Data = new Date(formValue.Data);
    this.gara.Sport = formValue.Sport;
    this.dataG.putGara(this.gara).subscribe(data => {
      if (data) {
        this.router.navigate(['AtletaLista']);
      }
    });
  }

}


