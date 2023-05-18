import { Weather } from './current-forecast.model';

export class FiveDayForecast {
  city?: City;
  list?: AuxForecast[];
}

export class City {
  name?: string;
}

export class AuxForecast {
  dt?: number;
  temp?: Temp;
  weather?: Weather[];
}

export class Temp {
  day?: number;
  min?: number;
  max?: number;
}
