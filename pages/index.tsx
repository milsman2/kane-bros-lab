import type { NextPageWithLayout } from './_app';
import { GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchWeather, useWeather } from '../hooks';
import {
  WeatherComponent,
  WeatherCard,
  Layout,
  WelcomeMessage,
  HomePageLinks,
} from '../components';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['Weather'], () => fetchWeather());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Home: NextPageWithLayout = () => {
  const weatherQuery = useWeather();

  return (
    <article className="flex flex-col flex-1 items-center justify-evenly bg-black text-slate-300">
      <WelcomeMessage />
      <HomePageLinks />
      <WeatherComponent query={weatherQuery}>
        {weatherQuery.data?.properties?.periods && (
          <WeatherCard periods={weatherQuery.data.properties.periods} />
        )}
      </WeatherComponent>
    </article>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
