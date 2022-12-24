import { NextPageWithLayout } from '../_app';
import Layout from '../../components/Layout';
import { Weather } from '../../components/Weather';

const WeatherPage: NextPageWithLayout = () => {
  return (
    <div className="bg-black text-slate-300 flex flex-col flex-1 items-center justify-center">
      <div>More Next.js + TypeScript + React-Query coming soon.</div>
      <Weather />
    </div>
  );
};

export default WeatherPage;

WeatherPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
