import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PartecipantiView } from 'src/app/Entità/PartecipantiView';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartecipantiViewService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getListaPartecipantiView(): Observable<PartecipantiView[]> {
    return this.http.get<PartecipantiView[]>('https://localhost:44314/api/PartecipantiIdView/GetPartecipantiIdView')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getListaPartecipantiViewById(IdGara): Observable<PartecipantiView[]> {
    return this.http.get<PartecipantiView[]>('https://localhost:44314/api/PartecipantiIdView/GetPartecipanti/' + IdGara, this.httpOptions)
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
}
