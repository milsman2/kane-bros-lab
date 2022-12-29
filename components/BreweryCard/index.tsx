import { ReactElement } from 'react';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';

type BreweryProps = {
  brewery: IBrewery;
};

export function BreweryCard({ brewery }: BreweryProps): ReactElement {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg flex flex-col flex-wrap p-2">
      <div className="flex flex-wrap bg-slate-800 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        {brewery.name}
      </div>
    </div>
  );
}
