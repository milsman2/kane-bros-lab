import type { NextPageWithLayout } from './_app';
import { GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchWeather, useWeather, fetchCatFact } from '../hooks';
import {
  WeatherComponent,
  CatFact,
  WeatherCard,
  Tech,
  Layout,
} from '../components';
import { Dashboard } from '../components/Dashboard';
import { HomePageLinks } from '../components/HomePageLinks';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['CatFact'], () => fetchCatFact());
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
    <section className="flex flex-col flex-1 items-center justify-center bg-black text-slate-300">
      <h1 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl flex flex-row flex-wrap font-bold m-1">
        Welcome to Kane Bros. Lab
      </h1>
      <HomePageLinks />
      <Dashboard>
        <WeatherComponent query={weatherQuery}>
          {weatherQuery.data?.properties?.periods && (
            <WeatherCard periods={weatherQuery.data.properties.periods} />
          )}
        </WeatherComponent>
        <Tech />
        <CatFact />
      </Dashboard>
    </section>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
