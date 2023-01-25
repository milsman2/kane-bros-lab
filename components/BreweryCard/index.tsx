import { ReactElement } from 'react';
import { Brewery } from '../../src/lib/interfaces/Breweries';
import Link from 'next/link';

type BreweryCardProps = Pick<Brewery, 'id' | 'name' | 'website_url'>;

export function BreweryCard({
  id,
  name,
  website_url,
}: BreweryCardProps): ReactElement {
  return (
    <div className="card bg-slate-800 shadow-xl h-full">
      <div className="card-body flex flex-col flex-1 items-center justify-center">
        <h2 className="card-title flex flex-wrap items-center justify-center">
          {name}
        </h2>
        <div className="card-actions flex flex-col justify-center items-center">
          {website_url ? (
            <a
              href={`${website_url}`}
              className="text-slate-200 btn btn-primary"
            >
              Brewery Site
            </a>
          ) : (
            <div className="text-sm">No brewery site available</div>
          )}
          <Link
            href={`/brewerypage/${id}`}
            className="text-slate-200 btn btn-primary"
          >
            Data Page
          </Link>
        </div>
      </div>
    </div>
  );
}
