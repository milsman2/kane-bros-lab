import { GetStaticProps, GetStaticPaths } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import {
  fetchSingleBrewery,
  useSingleBrewery,
  fetchBreweries,
} from '../../hooks/';
import { NextPageWithLayout } from '../_app';
import { Layout, SingleBrewery } from '../../components/';
import { useRouter } from 'next/router';
import { Brewery } from '../../interfaces/';

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['SingleBrewery', id], () =>
    fetchSingleBrewery(id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchBreweries();
  const paths = data.map((brewery: Brewery) => ({
    params: { id: brewery.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

const Brewery: NextPageWithLayout = () => {
  const router = useRouter();
  const id = typeof router.query?.id === 'string' ? router.query.id : '';
  const { data, error, isLoading, isError } = useSingleBrewery(id);

  if (isLoading)
    return (
      <div className="flex flex-col flex-1 items-center justify-center">
        <button className="btn loading">Loading...</button>
      </div>
    );

  if (isError && error instanceof Error)
    return <span>Error: {error.message}</span>;

  return (
    <article className="bg-black text-slate-300 flex flex-col flex-1">
      {data ? (
        <SingleBrewery {...data} />
      ) : (
        <strong>No brewery data available at the moment.</strong>
      )}
    </article>
  );
};

export default Brewery;

Brewery.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
