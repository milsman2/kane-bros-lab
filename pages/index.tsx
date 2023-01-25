import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout';
import Link from 'next/link';
import { CatFact } from '../components/CatFact';
import { GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchCatFact } from '../hooks/useCatFact';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['CatFact'], () => fetchCatFact());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Home: NextPageWithLayout = () => {
  return (
    <article className="bg-black text-slate-300 hero min-h-screen">
      <section className="hero-content text-center flex-col flex-1">
        <h1 className="text-5xl font-bold">Welcome to Kane Bros. Lab</h1>
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
          className="btn btn-xs bg-slate-700 mt-24 items-center justify-center"
          href="https://www.buymeacoffee.com/milsman2"
        >
          Buy me a coffee!
        </a>
        <h1 className="my-4 text-3xl font-extrabold tracking-tight leading-none text-slate-300 md:text-4xl lg:text-5xl">
          Cat Fact:
        </h1>
        <strong>
          <CatFact />
        </strong>
      </section>
    </article>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
