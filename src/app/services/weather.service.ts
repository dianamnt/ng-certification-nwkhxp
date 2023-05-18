import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentForecast } from '../models/current-forecast.model';
import { FiveDayForecast } from '../models/five-day-forecast.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(zipcode: string): Observable<CurrentForecast> {
    return this.http.get<CurrentForecast>(
      'https://api.openweathermap.org/data/2.5/weather?zip=' +
        zipcode +
        ',us&appid=5a4b2d457ecbef9eb2a71e480b947604&units=metric'
    );
  }

  getFiveDayWeather(zipcode: string): Observable<FiveDayForecast> {
    return this.http.get<FiveDayForecast>(
      'https://api.openweathermap.org/data/2.5/forecast/daily?zip=' +
        zipcode +
        ',us&appid=5a4b2d457ecbef9eb2a71e480b947604&units=metric&cnt=5'
    );
  }
}
