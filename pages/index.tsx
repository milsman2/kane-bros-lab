import type { NextPageWithLayout } from './_app';
import Layout from '../components/Layout';
import Link from 'next/link';

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-black text-slate-300 flex flex-col flex-1 items-center justify-center">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">
        Current Project
      </h1>
      <Link href="/BreweryPage" className="text-4xl text-slate-400 underline">
        Breweries!
      </Link>
      <Link
        className="text-slate-400 underline p-4"
        href="https://www.openbrewerydb.org/"
      >
        Fetched via Open Brewery DB
      </Link>
      <Link
        className="btn btn-xs bg-slate-700 mt-24 items-center justify-center"
        href="https://www.buymeacoffee.com/milsman2"
      >
        Buy me a coffee!
      </Link>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
