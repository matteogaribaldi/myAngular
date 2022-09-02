import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { IPortfolio } from '../portfoliolist/portfolio';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  // private portfolioUrl = 'assets/portfolios/portfolios.json';
  private portfolioUrl = 'api/portfolios/portfolios.json';

  constructor(private http: HttpClient) { }

  getPortfolios(): Observable<IPortfolio[]> {
    return this.http.get<IPortfolio[]>(this.portfolioUrl)
      .pipe(
        tap(data => {
        console.log('All portfolios: ', JSON.stringify(data));
        console.log(data)},
        catchError(this.handleError)
      ));
  }

  // Get one portfolio
  // Since we are working with a json file, we can only retrieve all portfolios
  // So retrieve all portfolios and then find the one we want using 'map'
  getPortfolio(id: number): Observable<IPortfolio | undefined> {
    return this.getPortfolios()
      .pipe(
        map((portfolios: IPortfolio[]) => portfolios.find(p => p.portfolioId === id))
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

}
