import { IBrewery } from '../../src/lib/interfaces/IBreweries';

type BreweryProps = {
  brewery: IBrewery;
};

export default function SingleBrewery({ brewery }: BreweryProps) {
  return (
    <>
      <div className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">
        {brewery.name}
      </div>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {brewery.street}
      </p>
    </>
  );
}
