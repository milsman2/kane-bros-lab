import { ReactElement } from 'react';
import { CatFact } from '../../interfaces';
import { UseQueryResult } from '@tanstack/react-query';

type CatQuery = {
  query: UseQueryResult<CatFact, Error>;
};

export function CatFact({ query }: CatQuery): ReactElement {
  if (query.isInitialLoading)
    return (
      <div className="flex flex-col items-center justify-center btn btn-loading">
        Loading cat fact...
      </div>
    );

  if (query.isError && query.error instanceof Error)
    return (
      <div className="flex flex-col items-center justify-center btn btn-loading">
        {query.error.message}
      </div>
    );

  return (
    <>
      {query.data ? (
        <p className="flex flex-col items-center justify-center m-2">
          Cat Fact: {query.data.fact}
        </p>
      ) : (
        <div>No cat data at the meowment.</div>
      )}
    </>
  );
}
