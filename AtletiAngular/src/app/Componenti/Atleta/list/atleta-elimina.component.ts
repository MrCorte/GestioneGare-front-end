import { Component, OnInit } from '@angular/core';
import { AtletaServizioService } from '../../../Servizi/Atleta/atleta-servizio.service';
import { Atleta } from 'src/app/Entità/Atleta';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-atleta-elimina',
  templateUrl: './atleta-elimina.component.html',
  styleUrls: ['./atleta-elimina.component.css'],
})
export class AtletaEliminaComponent implements OnInit {

  constructor(private data: AtletaServizioService, private router: Router, private fb: FormBuilder) { }
  atleta: Atleta;
  atleti: Atleta[];
  atletiF: Atleta[];
  atletaForm: FormGroup;
  filtroCognome = '';
  ngOnInit() {
    this.caricaAtleti(this.filtroCognome);
    this.atletaForm = this.fb.group({
      filtroCognome: ''
    });
  }
  input(formValue) {
    this.filtroCognome = formValue;
    this.caricaAtleti(this.filtroCognome);
  }

  caricaAtleti(filtro: string) {
    this.data.getListaAtleti(filtro).subscribe(data => {
      this.atleti = data;
    });
  }
  modificaAtleta(id) {
    this.router.navigate(['AtletaEditComponent/:id']);
  }

  eliminaAtleta(id) {
    if (window.confirm('sei sicuro di voler eliminare questo atleta')) {
      this.data.deleteAtleta(id).subscribe(data => {
        if (data) {
          this.router.navigate(['AtletaLista']);
        }
        this.caricaAtleti(this.filtroCognome);
      });
    }
  }
}
