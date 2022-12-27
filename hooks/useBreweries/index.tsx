import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';
import { GetStaticProps } from 'next';

const fetchIBreweries = async (): Promise<IBrewery[]> => {
  const res: IBrewery[] = await (
    await fetch('https://api.openbrewerydb.org/breweries?by_city=houston')
  ).json();

  return res;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['IBreweries'], () => fetchIBreweries());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function useBreweries() {
  return useQuery<IBrewery[], Error>(['IBreweries'], () => fetchIBreweries());
}
