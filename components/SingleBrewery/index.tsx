import { Brewery } from '../../interfaces/Breweries';

type SingleBreweryProps = Pick<
  Brewery,
  'name' | 'street' | 'brewery_type' | 'phone' | 'updated_at'
>;

export function SingleBrewery({
  name,
  street,
  brewery_type,
  phone,
  updated_at,
}: SingleBreweryProps) {
  return (
    <section className="text-center flex flex-col flex-1 items-center justify-center">
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{street}</p>
      <p className="py-6">Brewery Type/Phase: {brewery_type}</p>
      <p className="py-6">Phone: {phone}</p>
      <p className="mb-4 font-normal text-gray-500">
        Last Updated: {updated_at.toString()}
      </p>
    </section>
  );
}
