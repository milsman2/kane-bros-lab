import { IBrewery } from '../../src/lib/interfaces/IBreweries';

type BreweryProps = {
  brewery: IBrewery;
};

export default function SingleBrewery({ brewery }: BreweryProps) {
  console.log(typeof brewery);
  return (
    <>
      <div className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">
        {brewery.name}
      </div>
      <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
        {brewery.street}
      </p>
      <p className="mb-4 text-large font-normal text-gray-400 lg:text-large">
        Brewery Type/Phase: {brewery.brewery_type}
      </p>
      <p className="mb-4 font-normal text-gray-400">Phone: {brewery.phone}</p>
      <p className="mb-4 font-normal text-gray-500">
        Last Updated: {brewery.updated_at.toString()}
      </p>
    </>
  );
}
