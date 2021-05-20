import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class FlagGameService {
  private readonly URL: string =
    'https://restcountries.eu/rest/v2/all?fields=name;capital;region;subregion;latlng;area;flag';

  constructor(private _http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this._http.get<Country[]>(this.URL);
  }
}
