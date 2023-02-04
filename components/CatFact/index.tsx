import { ReactElement } from 'react';
import { useCatFact } from '../../hooks/useCatFact';

export function CatFact(): ReactElement {
  const { data, error, isLoading, isError } = useCatFact();

  if (isLoading) return <div>Loading</div>;

  if (isError && error instanceof Error) return <div>{error.message}</div>;

  return (
    <>
      {data ? (
        <section className="flex flex-col">
          <div className="text-3xl">Cat Fact:</div>
          <div>{data.fact}</div>
        </section>
      ) : (
        <div>No cat data at the meowment.</div>
      )}
    </>
  );
}
