import useBreweries from '../../hooks/useBreweries';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';
import { ReactElement } from 'react';
import { BreweryCard } from '../BreweryCard';

export default function Breweries(): ReactElement {
  const { data, error, isLoading, isError } = useBreweries();

  if (isLoading)
    return (
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1>Loading the dashboard...</h1>
      </div>
    );

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">
        Kane Bros. Lab Area Breweries
      </h1>
      <div className="flex-1 flex-col grid grid-cols-3">
        {data.map((brewery: IBrewery) => (
          <BreweryCard key={brewery.id} brewery={brewery} />
        ))}
      </div>
    </div>
  );
}
