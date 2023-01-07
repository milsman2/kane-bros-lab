import { IBrewery } from '../../src/lib/interfaces/IBreweries';

type SingleBreweryProps = Pick<
  IBrewery,
  'name' | 'street' | 'brewery_type' | 'phone' | 'updated_at'
>;

export default function SingleBrewery({
  name,
  street,
  brewery_type,
  phone,
  updated_at,
}: SingleBreweryProps) {
  return (
    <>
      <div className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">
        {name}
      </div>
      <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
        {street}
      </p>
      <p className="mb-4 text-large font-normal text-gray-400 lg:text-large">
        Brewery Type/Phase: {brewery_type}
      </p>
      <p className="mb-4 font-normal text-gray-400">Phone: {phone}</p>
      <p className="mb-4 font-normal text-gray-500">
        Last Updated: {updated_at.toString()}
      </p>
    </>
  );
}
