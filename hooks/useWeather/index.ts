import { useQuery } from '@tanstack/react-query';
import { Weather } from '../../interfaces/Weather';

export const fetchWeather = async (): Promise<Weather> => {
  const response = await fetch(
    'https://api.weather.gov/gridpoints/HGX/65,96/forecast/hourly?units=us'
  );

  if (!response.ok) {
    throw new Error(`Whoops! We're getting a ${response.status}`);
  }

  return await response.json();
};

export function useWeather() {
  return useQuery(['Weather'], () => fetchWeather());
}
