import { NextPageWithLayout } from '../_app';
import { Layout } from '../../components/Layout';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { fetchBreweries, useBreweries } from '../../hooks/useBreweries';
import { BreweryCard } from '../../components';
import { Brewery } from '../../interfaces/Breweries';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['Breweries'], () => fetchBreweries());

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

  if (isError && error instanceof Error)
    return <span>Error: {error.message}</span>;

  return (
    <div className="bg-black text-slate-300 flex flex-col flex-1">
      <section className="text-center flex flex-col flex-1 items-center justify-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">
          Kane Bros. Lab Area Breweries
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center gap-8">
          {data ? (
            data.map((brewery: Brewery) => (
              <BreweryCard key={brewery.id} {...brewery} />
            ))
          ) : (
            <div>No brewery data avilable at the moment</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BreweryPage;

BreweryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};