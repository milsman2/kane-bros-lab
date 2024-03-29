export interface Weather {
  context: ContextElement[];
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export type ContextElement = ContextClass | string;

export interface ContextClass {
  version: string;
  wx: string;
  geo: string;
  unit: string;
  vocab: string;
}

export interface Geometry {
  type: string;
  coordinates: Array<Array<number[]>>;
}

export interface Properties {
  updated: string;
  units: string;
  forecastGenerator: string;
  generatedAt: string;
  updateTime: string;
  validTimes: string;
  elevation: Elevation;
  periods: Period[];
}

export interface Elevation {
  unitCode: string;
  value: number | null;
}

export interface Period {
  number: number | null;
  name: string | null;
  startTime: string | null;
  endTime: string | null;
  isDaytime: boolean;
  temperature: number | null;
  temperatureUnit: string | null;
  temperatureTrend: string | null;
  windSpeed: string | null;
  windDirection: string | null;
  icon: string | null;
  shortForecast: string | null;
  detailedForecast: string | null;
}
