import { useQuery } from '@tanstack/react-query';
import { Weather } from '../../interfaces/Weather';

export type ApiFetchError = {
  message: string;
  status: number;
  statusCode: string | number;
};

export const fetchWeather = async (): Promise<Weather> => {
  const response = await fetch(
    'https://api.weather.gov/gridpoints/HGX/65,96/forecast/hourly?units=us',
    {
      headers: {
        'User-Agent': 'kanebroslab.com, miles.k.kane@gmail.com',
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Whoops! We're getting a Response Status: ${response.status}`
    );
  }

  return await response.json();
};

export function useWeather() {
  return useQuery({
    queryKey: ['Weather'],
    queryFn: () => fetchWeather(),
    onError: (err: ApiFetchError) => err,
  });
}
