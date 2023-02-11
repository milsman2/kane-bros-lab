import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchWeather, useWeather, fetchCatFact } from '../hooks';
import { WeatherComponent, CatFact, WeatherCard, Tech } from '../components';

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
    <section className="flex flex-col flex-1 items-center bg-black text-slate-300">
      <h1 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl flex flex-row flex-wrap font-bold m-1">
        Welcome to Kane Bros. Lab
      </h1>
      <div className="flex flex-row items-center m-1">
        <a
          className="btn text-xs mx-2"
          href="https://www.buymeacoffee.com/milsman2"
        >
          Buy me a coffee!
        </a>
        <Link href="/brewerypage" className="btn text-xs mx-2">
          Breweries!
        </Link>
      </div>
      <article className="flex flex-col flex-1">
        <WeatherComponent query={weatherQuery}>
          {weatherQuery.data?.properties?.periods && (
            <WeatherCard periods={weatherQuery.data.properties.periods} />
          )}
        </WeatherComponent>
        <Tech />
        <CatFact />
      </article>
    </section>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
