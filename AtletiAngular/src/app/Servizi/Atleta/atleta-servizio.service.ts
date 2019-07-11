import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Atleta } from 'src/app/Entità/Atleta';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AtletaServizioService {
  constructor(private http: HttpClient) {  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // get
  getListaAtleti(filtro: string): Observable<Atleta[]> {
    return this.http.get<Atleta[]>('https://localhost:44314/api/Atleta/GetListaAtleti?Stringa=' + filtro, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAtletaById(Id): Observable<Atleta> {
    return this.http.get<Atleta>('https://localhost:44314/api/Atleta/GetAtletaByID/' + Id, this.httpOptions)
      .pipe(
        map(data => {
          return new Atleta(data);
        }),
        retry(1),
        catchError(this.handleError)
      );
  }

  getAtletaByCognome(Cognome: number): Observable<Atleta> {
    return this.http.get<Atleta>('https://localhost:44314/api/Atleta/GetAtletaByCognome/' + Cognome, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  // post
  // tslint:disable-next-line:no-shadowed-variable
  postAtleta(Atleta: Atleta): Observable<boolean> {
    return this.http.post<boolean>('https://localhost:44314/api/Atleta/PostAtleta/', JSON.stringify(Atleta), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // delete
  deleteAtleta(id) {
    return this.http.delete('https://localhost:44314/api/Atleta/DeleteAtleta/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  putAtleta(Atleta): Observable<boolean> {
    return this.http.post<boolean>('https://localhost:44314/api/Atleta/PutAtleta/', JSON.stringify(Atleta), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}




