import { ReactElement } from 'react';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';
import Link from 'next/link';

type BreweryProps = {
  brewery: IBrewery;
};

export function BreweryCard({ brewery }: BreweryProps): ReactElement {
  return (
    <div className="card bg-slate-800 shadow-xl h-full">
      <div className="card-body flex flex-col flex-1 items-center justify-center">
        <h2 className="card-title flex flex-wrap">{brewery.name}</h2>
        <div className="card-actions flex flex-col justify-center items-center">
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
          <Link
            href={`/BreweryPage/${brewery.id}`}
            className="text-slate-200 btn btn-primary"
          >
            Data Page
          </Link>
        </div>
      </div>
    </div>
  );
}
