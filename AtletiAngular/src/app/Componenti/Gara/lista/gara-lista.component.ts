import { Component, OnInit } from '@angular/core';
import {Gara} from '../../../Entità/Gara';
import {GaraServizioService} from '../../../Servizi/Gara/gara-servizio.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gara-lista',
  templateUrl: './gara-lista.component.html',
  styleUrls: ['./gara-lista.component.css']
})
export class GaraListaComponent implements OnInit {
  gara: Gara;
  listaGara: Gara[];
  constructor(private data: GaraServizioService, private http: Http, private router: Router) {}

  ngOnInit() {
    this.caricaGare();
  }
  caricaGare() {
    this.data.getListaGare().subscribe(
      data => this.listaGara = data
      );
  }

  eliminaGara(id) {
    if (window.confirm('sei sicuro di voler eliminare questa gara')) {
      this.data.deleteGara(id).subscribe(data => {
        if (data) {
          this.router.navigate(['GaraLista']);
        }
        this.caricaGare();
      });
    }
}
}
