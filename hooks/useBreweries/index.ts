import { useQuery } from '@tanstack/react-query';
import { Brewery } from '../../src/lib/interfaces/Breweries';

export const fetchBreweries = async (): Promise<Brewery[]> => {
  const response = await fetch(
    'https://api.openbrewerydb.org/breweries?by_city=houston'
  );

  if (!response.ok) {
    throw new Error(`Whoops! We're getting a ${response.status}`);
  }

  return await response.json();
};

export const fetchSingleBrewery = async (id: string): Promise<Brewery> => {
  const response = await fetch(`https://api.openbrewerydb.org/breweries/${id}`);

  if (!response.ok) {
    throw new Error(`Whoops! We're getting a ${response.status}`);
  }

  return await response.json();
};

export function useBreweries() {
  return useQuery<Brewery[], Error>(['Breweries'], () => fetchBreweries());
}

export function useSingleBrewery(id: string) {
  return useQuery<Brewery, Error>(['SingleBrewery', id], () =>
    fetchSingleBrewery(id)
  );
}
