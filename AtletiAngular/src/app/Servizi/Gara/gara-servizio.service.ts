import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gara } from '../../Entità/Gara';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GaraServizioService {
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getListaGare(): Observable<Gara[]> {
    return this.http.get<Gara[]>('https://localhost:44314/api/Gara/GetGare')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getGaraByNome(Nome): Observable<Gara> {
    return this.http.get<Gara>('https://localhost:44314/api/Gara/Get/' + Nome, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getGaraById(IdGara): Observable<Gara> {
    return this.http.get<Gara>('https://localhost:44314/api/Gara/GetGaraById/' + IdGara, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  postGara(Gara): Observable<boolean> {
    return this.http.post<boolean>('https://localhost:44314/api/Gara/PostGara/', JSON.stringify(Gara), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  // delete
  deleteGara(id) {
    return this.http.delete<Gara>('https://localhost:44314/api/Gara/DeleteGara/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  putGara(Gara): Observable<boolean> {
    return this.http.post<boolean>('https://localhost:44314/api/Gara/PutGara/', JSON.stringify(Gara), this.httpOptions)
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

