import { GetStaticProps, GetStaticPaths } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import {
  fetchSingleBrewery,
  useSingleBrewery,
  fetchBreweries,
} from '../../hooks/useBreweries';
import { NextPageWithLayout } from '../_app';
import { Layout } from '../../components/Layout';
import { useRouter } from 'next/router';
import { SingleBrewery } from '../../components/SingleBrewery';
import { Brewery } from '../../src/lib/interfaces/Breweries';

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

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <article className="bg-black text-slate-300 hero min-h-screen">
      <SingleBrewery {...data} />
    </article>
  );
};

export default Brewery;

Brewery.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
