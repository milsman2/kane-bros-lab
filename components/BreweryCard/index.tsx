import { ReactElement } from 'react';
import { IBrewery } from '../../src/lib/interfaces/IBreweries';
import Link from 'next/link';

export function BreweryCard({ id, name, website_url }: IBrewery): ReactElement {
  return (
    <div className="card bg-slate-800 shadow-xl h-full">
      <div className="card-body flex flex-col flex-1 items-center justify-center">
        <h2 className="card-title flex flex-wrap">{name}</h2>
        <div className="card-actions flex flex-col justify-center items-center">
          {website_url ? (
            <Link
              href={`${website_url}`}
              className="text-slate-200 btn btn-primary"
            >
              Brewery Site
            </Link>
          ) : (
            <div className="text-sm">No brewery site available</div>
          )}
          <Link
            href={`/BreweryPage/${id}`}
            className="text-slate-200 btn btn-primary"
          >
            Data Page
          </Link>
        </div>
      </div>
    </div>
  );
}
