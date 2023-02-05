import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout';
import Link from 'next/link';
// import Image from 'next/image';
import { GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchWeather, useWeather, fetchCatFact } from '../hooks';
import {
  WeatherComponent,
  Dashboard,
  CatFact,
  WeatherCard,
} from '../components';
// import logolight from '../public/logolight.png'
// import nextjsseeklogo from '../public/nextjsseeklogo.com.png'
// import tailwind from '../public/tailwind.png'
// import prettierbannerdark from '../public/prettierbannerdark.png'

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
      <section className="flex flex-row m-2">
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
        {/* <Tech>
          <section className='grid grid-cols-4 bg-slate-600 items-center justify-between content-center'>
            <div className='flex flex-col flex-1 items-center justify-center p-4'>
              <Image src={logolight} alt="React Query logo" />
            </div>
            <div className='flex flex-col flex-1 items-center justify-center p-4'>
              <Image src={nextjsseeklogo} alt="Next.js logo" />
            </div>
            <div className='flex flex-col flex-1 items-center justify-center p-4'>
              <Image src={tailwind} alt="Tailwind logo" />
            </div>
            <div className='flex flex-col flex-1 items-center justify-center p-4'>
              <Image src={prettierbannerdark} alt="Tailwind logo" />
            </div>
          </section>
        </Tech> */}
        <CatFact />
      </Dashboard>
    </article>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
