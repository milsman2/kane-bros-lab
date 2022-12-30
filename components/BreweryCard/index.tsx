import { ReactElement } from 'react';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';
import Link from 'next/link';

type BreweryProps = {
  brewery: IBrewery;
};

export function BreweryCard({ brewery }: BreweryProps): ReactElement {
  return (
    <div className="card bg-slate-800 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{brewery.name}</h2>
        <div className="card-actions justify-center">
          <Link
            href={`${brewery?.website_url}`}
            className="text-slate-200 btn btn-primary"
          >
            Brewery Site
          </Link>
        </div>
      </div>
    </div>
  );
}
