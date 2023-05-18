import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Forecast } from '../../models/forecast.model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-five-day-forecast-page',
  templateUrl: './five-day-forecast-page.component.html',
  styleUrls: ['./five-day-forecast-page.component.css'],
})
export class FiveDayForecastPageComponent implements OnInit {
  zipcode: string;
  locationName: string;
  forecasts: Forecast[] = [];
  imgSrc: string = 'https://www.angulartraining.com/images/weather/';

  constructor(
    private weatherService: WeatherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getForecasts();
  }

  private getForecasts() {
    this.weatherService
      .getFiveDayWeather(this.getZipcode())
      .subscribe((data) => {
        this.locationName = data.city.name;
        data.list.forEach((el) => {
          let newForecast = new Forecast();
          newForecast.date = new Date(el.dt);
          newForecast.weather = el.weather[0].main;
          newForecast.temp = el.temp.day;
          newForecast.min = el.temp.min;
          newForecast.max = el.temp.max;
          let icon = newForecast.weather.toLowerCase();
          if (icon === 'clear') {
            icon = 'sun';
          }
          newForecast.imgSrc = this.imgSrc + icon + '.png';
        });
      });
  }

  private getZipcode(): string {
    return (this.zipcode = this.route.snapshot.paramMap.get('id'));
  }

  goBack() {
    this.router.navigate(['forecast']);
  }
}
