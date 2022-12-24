import type { NextPageWithLayout } from './_app';
import Layout from '../components/Layout';

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-black text-slate-300 flex flex-col flex-1 items-center justify-center">
      <div>More Next.js + TypeScript + React-Query coming soon.</div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
