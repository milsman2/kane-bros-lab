import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
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
import nextjsicon from '../public/nextjsicon.webp';
import tailwindcsslogo from '../public/tailwindcsslogo.webp';
import dockerlogo from '../public/dockerlogo.webp';
import prettierlogodark from '../public/prettierlogodark.webp'
import reactquerylogo from '../public/reactquerylogo.webp'

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
    <article className="h-full items-center justify-center w-full bg-black text-slate-300">
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="text-5xl font-bold m-1">Welcome to Kane Bros. Lab</h1>
        <section className="flex flex-row m-1">
          <a
            className="btn bg-slate-700 p-4 mx-2"
            href="https://www.buymeacoffee.com/milsman2"
          >
            Buy me a coffee!
          </a>
          <Link href="/brewerypage" className="btn bg-slate-700 p-2 mx-2">
            Breweries!
          </Link>
        </section>
      </div>
      <Dashboard>
        <WeatherComponent query={weatherQuery}>
          {weatherQuery.data?.properties?.periods && (
            <WeatherCard periods={weatherQuery.data.properties.periods} />
          )}
        </WeatherComponent>
        <Tech>
          <Image src={reactquerylogo} alt="React Query logo" />
          <Image src={nextjsicon} alt="Next.js logo" />
          <Image src={prettierlogodark} alt="Prettier logo" />
          <Image src={dockerlogo} alt="Docker logo" />
          <Image src={tailwindcsslogo} alt="Tailwind logo" />
        </Tech>
        <CatFact />
      </Dashboard>
    </article>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
