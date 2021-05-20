import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Country } from '../models/country';

@Component({
  selector: 'chal-flag-game',
  templateUrl: './flag-game.component.html',
  styleUrls: ['./flag-game.component.scss'],
})
export class FlagGameComponent implements OnInit {
  countries: Country[];
  displayedCountries: Country[];
  continents: string[] = ['Asia', 'Africa', 'Americas', 'Europe', 'Oceania'];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.data
      .pipe(map((data) => data.countries))
      .subscribe((countries) => (this.countries = countries));
    this.displayedCountries = this.countries;
  }

  checkValue(event) {
    if (event.target.checked) {
      this.displayedCountries = this.countries.filter(
        (e) => e.region == event.target.value
      );
    } else {
      this.displayedCountries = this.countries;
    }
  }
}
