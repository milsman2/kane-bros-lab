import { useCatFact } from '../../hooks/useCatFact';

export function CatFact() {
  const { data, error, isLoading, isError } = useCatFact();

  if (isLoading) return <div>Loading</div>;

  if (isError && error instanceof Error) return <div>{error.message}</div>;

  return (
    <>
      {data ? <div>{data.fact}</div> : <div>No cat data at the meowment.</div>}
    </>
  );
}
