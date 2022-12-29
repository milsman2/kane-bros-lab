import type { NextPageWithLayout } from './_app';
import Layout from '../components/Layout';
import Link from 'next/link';

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-black text-slate-300 flex flex-col flex-1 items-center justify-center">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-800 md:text-5xl lg:text-6xl">
        Current Project
      </h1>
      <Link href="/BreweryPage" className="text-4xl text-slate-400 underline">
        Breweries!
      </Link>
      <Link
        className="text-slate-500 underline p-4"
        href="https://www.openbrewerydb.org/"
      >
        Fetched via Open Brewery DB
      </Link>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
