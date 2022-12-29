import { ReactElement } from 'react';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';

type BreweryProps = {
  brewery: IBrewery;
};

export function BreweryCard({ brewery }: BreweryProps): ReactElement {
  return (
    <div className="card bg-slate-800 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{brewery.name}</h2>
        <p>More information coming soon!</p>
      </div>
    </div>
  );
}
