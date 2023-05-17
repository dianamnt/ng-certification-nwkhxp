export class CurrentForecast {
  name?: string;
  main?: Main;
  weather?: Weather[];
}

export class Main {
  temp?: number;
  temp_max?: number;
  temp_min?: number;
}

export class Weather {
  main?: string;
}
