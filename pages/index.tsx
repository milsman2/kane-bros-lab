import type { NextPageWithLayout } from './_app';
import Layout from '../components/Layout';
import Link from 'next/link';

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-black text-slate-300 flex flex-col flex-1 items-center justify-center">
      <h1 className="p-4">Current Projects</h1>
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
