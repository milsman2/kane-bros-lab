import { NextPageWithLayout } from '../_app';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import {
  fetchBreweries,
  useBreweries,
  useBrewerySearch,
  useDebounce,
} from '../../hooks/';
import { BreweryCard, Layout } from '../../components';
import { Brewery } from '../../interfaces/';
import { useState } from 'react';

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
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 300);
  const brewSearchQuery = useBrewerySearch(debouncedSearchValue);
  const brewQuery = useBreweries();

  if (brewQuery.isLoading)
    return (
      <div className="flex flex-col flex-1 items-center justify-center">
        <button className="btn loading">Loading...</button>
      </div>
    );

  if (brewQuery.isError && brewQuery.error instanceof Error)
    return (
      <strong className="flex flex-col flex-1 items-center justify-center">
        Error: {brewQuery.error.message}
      </strong>
    );

  return (
    <div className="bg-black text-slate-300 flex flex-col flex-1">
      <section className="text-center flex flex-col">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">
          Kane Bros. Lab Area Breweries
        </h1>
        <a
          className="text-slate-400 underline p-4"
          href="https://www.openbrewerydb.org/"
        >
          Fetched via Open Brewery DB
        </a>
        <input
          placeholder="Search Breweries"
          onChange={(e) => setSearchValue(e.target.value)}
          className="m-4"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center gap-4 m-8 p-2 rounded-md outline-double outline-8">
          {searchValue === ''
            ? brewQuery.data?.map((brewery: Brewery) => (
                <BreweryCard key={brewery.id} {...brewery} />
              ))
            : brewSearchQuery.data?.map((brewery: Brewery) => (
                <BreweryCard key={brewery.id} {...brewery} />
              ))}
        </div>
      </section>
    </div>
  );
};

export default BreweryPage;

BreweryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
