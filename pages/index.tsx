import type { NextPageWithLayout } from './_app';
import Layout from '../components/Layout';
import Link from 'next/link';

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-black text-slate-300 flex flex-col flex-1 items-center justify-center">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-800 md:text-5xl lg:text-6xl">
        Current Projects
      </h1>
      <Link
        href="https://thepuntersleague.com"
        className="text-3xl text-slate-400 underline"
      >
        The Punters League
      </Link>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
