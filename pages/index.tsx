import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchWeather, useWeather, fetchCatFact } from '../hooks';
import {
  WeatherComponent,
  Dashboard,
  CatFact,
  WeatherCard,
  Tech,
} from '../components';

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
    <article className="items-center justify-evenly flex flex-col flex-1 w-full bg-black text-slate-300">
      <section className='flex flex-col flex-1 items-center py-24'>
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold m-1 flex flex-row">Welcome to Kane Bros. Lab</h1>
        <div className='flex flex-row items-center m-2'>
          <a
            className="btn bg-slate-700 lg:text-sm md:text-xs sm:text-xs"
            href="https://www.buymeacoffee.com/milsman2"
          >
            Buy me a coffee!
          </a>
          <Link href="/brewerypage" className="btn bg-slate-700">
            Breweries!
          </Link>
        </div>
      </section>
      <Dashboard>
        <WeatherComponent query={weatherQuery}>
          {weatherQuery.data?.properties?.periods && (
            <WeatherCard periods={weatherQuery.data.properties.periods} />
          )}
        </WeatherComponent>
        <Tech />
        <CatFact />
      </Dashboard >
    </article >
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
