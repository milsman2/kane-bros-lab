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
    <article className="flex flex-col flex-1 items-center justify-center w-full bg-black text-slate-300">
      <h1 className="text-5xl font-bold mt-12">Welcome to Kane Bros. Lab</h1>
      <Link href="/brewerypage" className="text-4xl text-slate-400 underline">
        Breweries!
      </Link>
      <a
        className="text-slate-400 underline p-4"
        href="https://www.openbrewerydb.org/"
      >
        Fetched via Open Brewery DB
      </a>
      <a
        className="btn btn-xs bg-slate-700 items-center justify-center"
        href="https://www.buymeacoffee.com/milsman2"
      >
        Buy me a coffee!
      </a>
      <h1 className="text-3xl font-extrabold tracking-tight leading-none text-slate-300 md:text-4xl lg:text-5xl">
        Cat Fact:
      </h1>
      <Dashboard>
        <CatFact />
        <WeatherComponent query={weatherQuery}>
          {weatherQuery.data?.properties?.periods && (
            <WeatherCard periods={weatherQuery.data.properties.periods} />
          )}
        </WeatherComponent>
      </Dashboard>
    </article>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
