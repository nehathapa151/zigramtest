import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Drinks } from './models/drinks';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiUrl = Config.cocktailApi;
  detailApiUrl = Config.cocktailDetailApi;

  constructor(private http: HttpClient) {
  }

  getCocktailByName(name = 'margarita'): Observable<Drinks> {
    return this.http.get<Drinks>(`${this.apiUrl}?s=${name}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
 
  getCocktailDetails(id: number): Observable<Drinks> {
    return this.http.get<Drinks>(`${this.detailApiUrl}${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error: any) {
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
