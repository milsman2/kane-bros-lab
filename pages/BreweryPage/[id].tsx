import { GetStaticProps, GetStaticPaths } from 'next';
import { dehydrate } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { fetchIBreweries, useBreweries } from '../../hooks/useBreweries';
import { NextPageWithLayout } from '../_app';
import Layout from '../../components/Layout';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';
import { useRouter } from 'next/router';
import SingleBrewery from '../../components/SingleBrewery';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['IBreweries'], () => fetchIBreweries());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchIBreweries();
  const paths = data.map((brewery: IBrewery) => ({
    params: { id: brewery.id },
  }));

  return { paths, fallback: false };
};

const Brewery: NextPageWithLayout = () => {
  const { data, error, isLoading, isError } = useBreweries();
  const router = useRouter();
  const { id } = router.query;
  const filteredBreweries = data?.filter(
    (brewery: IBrewery) => brewery.id === id
  );

  if (isLoading)
    return (
      <div className="flex flex-col flex-1 items-center justify-center">
        <button className="btn loading">Loading...</button>
      </div>
    );

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div className="bg-black text-slate-300 flex flex-col flex-1 items-center justify-center p-2">
      {filteredBreweries?.map((brewery: IBrewery) => {
        return <SingleBrewery key={brewery.id} brewery={brewery} />;
      })}
    </div>
  );
};

export default Brewery;

Brewery.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
