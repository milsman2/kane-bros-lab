import { ReactElement } from 'react';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';
import Link from 'next/link';

type BreweryProps = {
  brewery: IBrewery;
};

export function BreweryCard({ brewery }: BreweryProps): ReactElement {
  return (
    <div className="card bg-slate-800 shadow-xl h-full">
      <div className="card-body flex flex-col flex-1">
        <h2 className="card-title flex flex-wrap items-center justify-center">
          {brewery.name}
        </h2>
        <div className="card-actions justify-center">
          {brewery.website_url ? (
            <Link
              href={`${brewery?.website_url}`}
              className="text-slate-200 btn btn-primary"
            >
              Brewery Site
            </Link>
          ) : (
            <div className="text-sm">No brewery site available</div>
          )}
        </div>
      </div>
    </div>
  );
}
