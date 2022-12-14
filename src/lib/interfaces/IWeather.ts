export interface IWeather {
    cod:     string;
    message: number;
    cnt:     number;
    list:    List[];
    city:    City;
}

export interface City {
    id:         number;
    name:       string;
    coord:      Coord;
    country:    string;
    population: number;
    timezone:   number;
    sunrise:    number;
    sunset:     number;
}

export interface Coord {
    lat: number;
    lon: number;
}

export interface List {
    dt:         number;
    main:       MainClass;
    weather:    Weather[];
    clouds:     Clouds;
    wind:       Wind;
    visibility: number;
    pop:        number;
    rain?:      Rain;
    sys:        Sys;
    dt_txt:     Date;
}

export interface Clouds {
    all: number;
}

export interface MainClass {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    sea_level:  number;
    grnd_level: number;
    humidity:   number;
    temp_kf:    number;
}

export interface Rain {
    "3h": number;
}

export interface Sys {
    pod: Pod;
}

export enum Pod {
    D = "d",
    N = "n",
}

export interface Weather {
    id:          number;
    main:        MainEnum;
    description: Description;
    icon:        string;
}

export enum Description {
    Ash = "volcanic ash",
    BrokenClouds = "broken clouds",
    ClearSky = "clear sky",
    Drizzle = "drizzle",
    DrizzleRain = "drizzle rain",
    Dust = "sand/ dust whirls",
    ExtremeRain = "extreme rain",
    FewClouds = "few clouds",
    Fog = "fog",
    FreezingRain = "freezing rain",
    Haze = "Haze",
    HeavyIntensityDrizzle = "heavy intensity drizzle",
    HeavyIntensityDrizzleRain = "heavy intensity drizzle rain",
    HeavyIntensityShowerRain = " heavy intensity shower rain",
    HeavyIntensityRain = "heavy intensity rain",
    HeavySnow = "Heavy Snow",
    HeavyShowerSnow = "Heavy shower snow",
    LightIntensityDrizzle = "light intensity drizzle",
    LightIntensityDrizzleRain = "light intensity drizzle rain",
    LightIntensityShowerRain = "light intensity shower rain",
    LightRain = "light rain",
    LightRainAndSnow = "Light rain and snow",
    LightShowerSnow = "Light shower snow",
    LightSnow = "light snow",
    LightShowerSleet = "Light shower sleet",
    LightThunderstorm = "light thunderstorm",
    Mist = "mist",
    ModerateRain = "moderate rain",
    OvercastClouds = "overcast clouds",
    RainAndSnow = "Rain and snow",
    RaggedThunderstorm = "ragged thunderstorm",
    RaggedShowerRain = "ragged shower rain",
    Sand = "sand",
    ScatteredClouds = "scattered clouds",
    ShowerRain = "shower rain",
    ShowerSleet = "shower sleet",
    ShowerSnow = "Shower snow",
    Sleet = "Sleet",
    Smoke = "Smoke",
    Snow = "Snow",
    Squalls = "squalls",
    Thunderstorm = "thunderstorm",
    ThunderstormWithDrizzle = "thunderstorm with drizzle",
    ThunderstormWithHeavyDrizzle ="thunderstorm with heavy drizzle",
    ThunderstormWithLightDrizzle = "thunderstorm with light drizzle",
    ThunderstormWithLightRain = "thunderstorm with light rain",
    ThunderstormWithRain = "thunderstorm with rain",
    ThunderstormWithHeavyRain = "thunderstorm with heavy rain",
    Tornado = "tornado",
    VeryHeavyRain = "very heavy rain"
}

export enum MainEnum {
    Atmosphere = "Atmosphere",
    Clear = "Clear",
    Clouds = "Clouds",
    Drizzle = "Drizzle",
    Rain = "Rain",
    Snow = "Snow",
    Thunderstorm = "Thunderstorm"
}

export interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}
