import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Partecipante } from 'src/app/Entità/Partecipanti';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Gara } from 'src/app/Entità/Gara';

@Injectable({
  providedIn: 'root'
})
export class PartecipantiServiceService {
  partecipante: Partecipante;
  gara: Gara;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // restituisce la lista completa di tutti i partecipanti
  getListaPartecipanti(): Observable<Partecipante[]> {
    return this.http.get<Partecipante[]>('https://localhost:44314/api/Partecipante/GetAllPartecipanti')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getListaPartecipantiById(Id): Observable<Partecipante> {
    return this.http.get<Partecipante>('https://localhost:44314/api/Partecipante/GetAllPartecipanti')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  // tslint:disable-next-line:no-shadowed-variable
  postPartecipante(Partecipante): Observable<boolean> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<boolean>('https://localhost:44314/api/Partecipante/PostPartecipante/', JSON.stringify(Partecipante), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  // restituisce la lista di tutti i partecipanti a una gara specifica
  getListaPartecipantiGare(IdGara: any): Observable<Partecipante[]> {
    return this.http.get<Partecipante[]>('https://localhost:44314/api/Partecipante/GetPartecipanti/?IdGara=' + IdGara, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );

  }
  updatePartecipanti(Partecipanti: Partecipante[]) {
    // tslint:disable-next-line:max-line-length
    return this.http.put<Partecipante[]>('https://localhost:44314/api/Partecipante/updatePartecipante/', JSON.stringify(Partecipanti), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );

  }
  updatePosizione(Partecipante: Partecipante): Observable<boolean> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<boolean>('https://localhost:44314/api/Partecipante/UpdatePosizone/', JSON.stringify(Partecipante), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getClassificaOrdinata(IdGara): Observable<Partecipante[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Partecipante[]>('https://localhost:44314/api/Partecipante/GetClassificaOrdinata/?IdGara=' + IdGara, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  deletePartecipante(IdGara, idAtleta): Observable<boolean> {
    // tslint:disable-next-line:max-line-length
    return this.http.delete<boolean>('https://localhost:44314/api/Partecipante/DeletePartecipante/?IdGara=' + IdGara + '&IdAtleta=' + idAtleta, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
