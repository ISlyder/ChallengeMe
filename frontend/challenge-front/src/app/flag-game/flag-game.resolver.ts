import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Country } from '../models/country';
import { FlagGameService } from './flag-game.service';

@Injectable({
  providedIn: 'root',
})
export class FlagGameResolver implements Resolve<Country[]> {
  constructor(private _countriesApi: FlagGameService) {}
  resolve(): Observable<Country[]> {
    return this._countriesApi.getAllCountries();
  }
}
