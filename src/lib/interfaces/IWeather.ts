export interface IWeather {
    lat: string;
    lon: string;
    timezone: string;
}

export interface current {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
}

export interface weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}