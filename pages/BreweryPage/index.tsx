import { NextPageWithLayout } from '../_app';
import Layout from '../../components/Layout';
import Breweries from '../../components/Breweries';

const BreweryPage: NextPageWithLayout = () => {
  return (
    <div className="bg-black text-slate-400 flex flex-col flex-1 items-center justify-center p-2">
      <Breweries />
    </div>
  );
};

export default BreweryPage;

BreweryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
