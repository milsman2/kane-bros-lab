import { useCatFact } from '../../hooks/useCatFact';

export function CatFact() {
  const { data, error, isLoading, isError } = useCatFact();
  if (isLoading) return <div>Loading</div>;

  if (isError) return <div>{error.message}</div>;

  return <div>{data.fact}</div>;
}
