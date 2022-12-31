import { NextPageWithLayout } from '../_app';
import Layout from '../../components/Layout';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { fetchIBreweries, useBreweries } from '../../hooks/useBreweries';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';
import { BreweryCard } from '../../components';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['IBreweries'], () => fetchIBreweries());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const BreweryPage: NextPageWithLayout = () => {
  const { data, error, isLoading, isError } = useBreweries();

  if (isLoading)
    return (
      <div className="flex flex-col flex-1 items-center justify-center">
        <button className="btn loading">Loading...</button>
      </div>
    );

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div className="bg-black text-slate-400 flex flex-col flex-1 items-center justify-center p-2">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">
        Kane Bros. Lab Area Breweries
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center gap-8">
        {data.map((brewery: IBrewery) => (
          <BreweryCard key={brewery.id} brewery={brewery} />
        ))}
      </div>
    </div>
  );
};

export default BreweryPage;

BreweryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
