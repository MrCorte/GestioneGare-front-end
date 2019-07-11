import { Component, OnInit } from '@angular/core';
import { Partecipante } from 'src/app/Entità/Partecipanti';
import { PartecipantiServiceService } from 'src/app/Servizi/Partecipanti/partecipanti-service.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-par-lista',
  templateUrl: './par-lista.component.html',
  styleUrls: ['./par-lista.component.css']
})
export class ParListaComponent implements OnInit {
  partecipante: Partecipante;
  listaPartecipanti: Partecipante[];
  constructor(private data: PartecipantiServiceService, private http: Http) { }

  ngOnInit() {
    this.data.getListaPartecipanti().subscribe(data => {
      this.listaPartecipanti = data;
    });
  }

}
