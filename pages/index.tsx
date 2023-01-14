import type { NextPageWithLayout } from './_app';
import Layout from '../components/Layout';
import Link from 'next/link';
import { CatFact } from '../components/CatFact';
import { GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchICatFact } from '../hooks/useCatFact';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['IBreweries'], () => fetchICatFact());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-black text-slate-300 flex flex-col flex-1 items-center justify-center">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">
        Current Project
      </h1>
      <Link href="/BreweryPage" className="text-4xl text-slate-400 underline">
        Breweries!
      </Link>
      <a
        className="text-slate-400 underline p-4"
        href="https://www.openbrewerydb.org/"
      >
        Fetched via Open Brewery DB
      </a>
      <a
        className="btn btn-xs bg-slate-700 mt-24 items-center justify-center"
        href="https://www.buymeacoffee.com/milsman2"
      >
        Buy me a coffee!
      </a>
      <h1 className="my-4 text-3xl font-extrabold tracking-tight leading-none text-slate-300 md:text-4xl lg:text-5xl">
        Cat Fact:
      </h1>
      <div className="flex flex-col items-center justify-center p-6 font-semibold">
        <CatFact />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
