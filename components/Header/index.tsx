import { ReactElement } from 'react';
import Link from 'next/link';

const Header = (): ReactElement => {
  return (
    <nav className="flex justify-between flex-wrap content-center bg-slate-900 p-2 sticky top-0">
      <div className="flex items-center text-slate-100 mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link href="/">Kane Bros. Lab</Link>
        </span>
        <Link href="/BreweryPage" className="text-sm ml-4">
          Breweries
        </Link>
      </div>
    </nav>
  );
};

export default Header;
