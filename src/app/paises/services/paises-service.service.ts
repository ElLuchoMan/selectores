import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {
  private baseUrl: string = 'https://restcountries.eu/rest/v2'
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  get regiones(): string[] {
    return [...this._regiones];
  }
  constructor(private http: HttpClient) { }
  gePaisesPortRegion(region: string): Observable<PaisSmall[]> {
    const url: string = `${this.baseUrl}/region/${region}?fields=alpha3Code;name`
    return this.http.get<PaisSmall[]>(url);
  }
}
