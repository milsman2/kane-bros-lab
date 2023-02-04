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
      <h1 className="text-5xl font-bold m-4">Welcome to Kane Bros. Lab</h1>
      <section className="flex flex-row">
        <a
          className="btn bg-slate-700 p-4 mx-2"
          href="https://www.buymeacoffee.com/milsman2"
        >
          Buy me a coffee!
        </a>
        <Link href="/brewerypage" className="btn bg-slate-700 p-4 mx-2">
          Breweries!
        </Link>
      </section>
      <Dashboard>
        <WeatherComponent query={weatherQuery}>
          {weatherQuery.data?.properties?.periods && (
            <WeatherCard periods={weatherQuery.data.properties.periods} />
          )}
        </WeatherComponent>
        <CatFact />
      </Dashboard>
    </article>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
