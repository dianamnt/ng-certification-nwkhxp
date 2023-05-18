import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Forecast } from '../../models/forecast.model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css'],
})
export class ForecastCardComponent implements OnInit {
  @Input() zipcode: string;
  @Output() delete = new EventEmitter<string>();
  forecast: Forecast = new Forecast();
  imgSrc = 'https://www.angulartraining.com/images/weather/';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getCurrentForecast();
  }

  private getCurrentForecast() {
    this.weatherService.getCurrentWeather(this.zipcode).subscribe((data) => {
      this.forecast.zip = this.zipcode;
      this.forecast.location = data.name;
      this.forecast.weather = data.weather[0].main;
      this.forecast.temp = data.main.temp;
      this.forecast.max = data.main.temp_max;
      this.forecast.min = data.main.temp_min;
      this.setIcon();
    });
  }

  private setIcon() {
    let icon = this.forecast.weather;
    if (this.forecast.weather === 'Clear') {
      icon = 'sun';
    }
    this.imgSrc = this.imgSrc + icon.toLowerCase() + '.png';
  }

  deleteForecast() {
    this.delete.emit(this.zipcode);
  }
}
