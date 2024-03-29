import { useQuery } from '@tanstack/react-query';
import { Brewery } from '../../interfaces/Breweries';

export const fetchBreweries = async (): Promise<Brewery[]> => {
  const response = await fetch(
    'https://api.openbrewerydb.org/breweries?by_city=houston&per_page=50'
  );

  if (!response.ok) {
    throw new Error(
      `Whoops! We're getting a Response Status: ${response.status}`
    );
  }

  return await response.json();
};

export const fetchSingleBrewery = async (id: string): Promise<Brewery> => {
  const response = await fetch(`https://api.openbrewerydb.org/breweries/${id}`);

  if (!response.ok) {
    throw new Error(
      `Whoops! We're getting a Response Status: ${response.status}`
    );
  }

  return await response.json();
};

export function useBreweries(select?: (data: Brewery[]) => Brewery[]) {
  return useQuery({
    queryKey: ['Breweries'],
    queryFn: () => fetchBreweries(),
    onError: (err: Error) => err,
    select,
  });
}

export function useBrewerySearch(id: string) {
  return useBreweries((data: Brewery[]) =>
    data.filter((brewery) => brewery.id.includes(id))
  );
}

export function useSingleBrewery(id: string) {
  return useQuery({
    queryKey: ['SingleBrewery', id],
    queryFn: () => fetchSingleBrewery(id),
    onError: (err: Error) => err,
  });
}
