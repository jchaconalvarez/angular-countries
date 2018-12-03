import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Country } from './country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countryUrl = `https://restcountries.eu/rest/v2/all?fields=name;alpha3Code`;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl)
      .pipe(
        catchError(this.handleError('getCountries', []))
      );
  }

  getCountry(id: string): Observable<Country> {
    const url = `https://restcountries.eu/rest/v2/alpha/${id}`;
    return this.http.get<Country>(url)
      .pipe(
        catchError(this.handleError<Country>(`getCountry id=${id}`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
