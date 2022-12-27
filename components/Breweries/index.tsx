import useBreweries from '../../hooks/useBreweries';
import { Spinner, Heading } from '@chakra-ui/react';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';

export default function Breweries() {
  const { data, error, isLoading, isError } = useBreweries();

  if (isLoading)
    return (
      <div className="flex flex-col flex-1 items-center justify-center">
        <Spinner />
        <Heading>Loading the dashboard...</Heading>
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
