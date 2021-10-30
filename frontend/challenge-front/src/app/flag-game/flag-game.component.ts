import {Component, OnInit} from '@angular/core';
import {Country} from '../models/country';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

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
  answer = '';
  counter: number;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.route.data
      .pipe(map((data) => data.countries))
      .subscribe((countries) => {
        this.countries = countries;
        this.sortedArray = countries.sort(() => Math.random() > .5 ? 1 : -1);
      });
    this.victory = false;
    this.currentCountry = this.sortedArray[0];
    this.counter = 0;
  }

  nextFlag(): void {
    const translatedCountryName: string = this.translate.instant(`COUNTRY.${this.currentCountry.name}`);
    if (this.isAnswerCorrect(translatedCountryName)) {
      this.sortedArray.shift();
      this.currentCountry = this.sortedArray[0];
      this.answer = '';
      this.counter++;
    } else if (this.sortedArray && this.sortedArray.length === 0) {
      this.victory = true;
    }
  }

  skip(): void {
    if (this.sortedArray) {
      this.sortedArray.sort(() => Math.random() > .5 ? 1 : -1);
      this.currentCountry = this.sortedArray[0];
    }
  }

  isAnswerCorrect(name: string): boolean {
    return this.sortedArray
      && this.sortedArray.length > 0
      && !this.victory
      && this.answer.toLowerCase() === name.toLowerCase();
  }
}
