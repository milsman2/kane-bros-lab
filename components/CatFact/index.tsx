import { ReactElement } from 'react';
import { useCatFact } from '../../hooks/useCatFact';

export function CatFact(): ReactElement {
  const { data, error, isLoading, isError } = useCatFact();

  if (isLoading) return <div className='flex flex-col items-center justify-center btn btn-loading'>Loading cat fact...</div>;

  if (isError && error instanceof Error) return <div className='flex flex-col items-center justify-center btn btn-loading'>{error.message}</div>;

  return (
    <>
      {data ? (
        <section className="flex flex-col flex-1 items-center justify-center p-2">
          <div className="text-small">Cat Fact:</div>
          <div className="text-xs">{data.fact}</div>
        </section>
      ) : (
        <div>No cat data at the meowment.</div>
      )}
    </>
  );
}
