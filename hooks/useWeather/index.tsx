import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query';
import { IWeather } from '../../src/lib/interfaces/IWeather';

const fetchIWeather = async (): Promise<IWeather> => {
  const res = await fetch(
    'https://api.openweathermap.org/data/2.5/forecast?lat=29.7604&lon=-95.3698&appid=b835a15f93cccb6e137195a5b1302084&units=imperial'
  );
  const results: IWeather = await res.json();

  return results;
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['IPunter'], () => fetchIWeather());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const useWeather = () => {
  return useQuery<IWeather, Error>(['Weather'], () => fetchIWeather());
};

export { useWeather };
