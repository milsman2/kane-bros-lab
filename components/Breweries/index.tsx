import useBreweries from '../../hooks/useBreweries';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';
import { ReactElement } from 'react';

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
      <h1 className="text-3xl p-4">Kane Bros. Lab Area Breweries</h1>
      <ul>
        {data.map((brewery: IBrewery) => (
          <li key={brewery.id}>
            <ul>{brewery.name}</ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
