import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Country } from './country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesUrl = `https://restcountries.eu/rest/v2/all`;
  private countryUrl = `https://restcountries.eu/rest/v2/alpha/`;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
      .pipe(
        catchError(this.handleError('getCountries', []))
      );
  }

  getCountry(id: string): Observable<Country> {
    return this.http.get<Country>(`${this.countryUrl}${id}`)
      .pipe(
        catchError(this.handleError<Country>(`getCountry id=${id}`))
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Country[]>(`${this.countriesUrl}/?name=${term}`)
      .pipe(
        catchError(this.handleError<Country[]>('searchHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
