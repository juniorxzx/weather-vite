namespace Weather {
  export type current = {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: WeatherDetails[];
    wind_deg: number;
    wind_speed: number;
    city: string;
  };
  export type WeatherDetails = {
    description: string;
    icon: string;
    id: number;
    main: string;
  };
}
