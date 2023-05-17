import { Component, OnInit } from '@angular/core';
import { Forecast } from '../../models/forecast.model';

@Component({
  selector: 'app-current-forecast-page',
  templateUrl: './current-forecast-page.component.html',
  styleUrls: ['./current-forecast-page.component.css'],
})
export class CurrentForecastPageComponent implements OnInit {
  zipcode: string = '';
  zipcodes: string[] = [];

  constructor() {}

  ngOnInit() {
    this.getForecasts();
  }

  private getForecasts() {
    const localStorageValue = localStorage.getItem('zipcodes');
    if (localStorageValue !== null) {
      this.zipcodes = JSON.parse(localStorageValue);
    }
  }

  addTolocalStorage() {
    this.zipcodes.push(this.zipcode);
    localStorage.setItem('zipcodes', JSON.stringify(this.zipcodes));
    this.zipcode = '';
  }
}
