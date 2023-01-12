import { useQuery } from '@tanstack/react-query';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';

export const fetchIBreweries = async (): Promise<IBrewery[]> => {
  return await (
    await fetch('https://api.openbrewerydb.org/breweries?by_city=houston')
  ).json();
};

export const fetchSingleBrewery = async (id: string): Promise<IBrewery> => {
  return await (
    await fetch(`https://api.openbrewerydb.org/breweries/${id}`)
  ).json();
};

export function useBreweries() {
  return useQuery<IBrewery[], Error>(['IBreweries'], () => fetchIBreweries());
}

export function useSingleBrewery(id: string) {
  return useQuery<IBrewery, Error>(['SingleBrewery', id], () =>
    fetchSingleBrewery(id)
  );
}
