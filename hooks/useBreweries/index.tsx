import { useQuery } from '@tanstack/react-query';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';

export const fetchIBreweries = async (): Promise<IBrewery[]> => {
  return await (
    await fetch('https://api.openbrewerydb.org/breweries?by_city=houston')
  ).json();
};

export default function useBreweries() {
  return useQuery<IBrewery[], Error>(['IBreweries'], () => fetchIBreweries());
}
