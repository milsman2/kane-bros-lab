import Link from 'next/link';

export function HomePageLinks() {
  return (
    <div className="flex flex-row items-center m-1">
      <a
        className="btn text-xs mx-2"
        href="https://www.buymeacoffee.com/milsman2"
      >
        Buy me a coffee!
      </a>
      <Link href="/brewerypage" className="btn text-xs mx-2">
        Breweries!
      </Link>
    </div>
  );
}
