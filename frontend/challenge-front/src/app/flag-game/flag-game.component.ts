import {Component, OnInit} from '@angular/core';
import {Country} from '../models/country';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'chal-flag-game',
  templateUrl: './flag-game.component.html',
  styleUrls: ['./flag-game.component.scss']
})
export class FlagGameComponent implements OnInit {
  countries: Country[];
  sortedArray: Country[];
  currentCountry: Country;
  victory: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data
      .pipe(map((data) => data.countries))
      .subscribe((countries) => {
        this.countries = countries;
        this.sortedArray = countries;
      });
    this.victory = false;
    this.currentCountry = this.sortedArray[0];
  }

  next(): void {
    if (this.sortedArray.length > 0) {
      this.sortedArray.shift();
      this.currentCountry = this.sortedArray[0];
    }
    else if (this.sortedArray.length === 0) {
      this.victory = true;
    }
  }
}
