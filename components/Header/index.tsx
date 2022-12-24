import { ReactElement } from 'react';
import Link from 'next/link';

const Header = (): ReactElement => {
  return (
    <nav className="flex justify-between flex-wrap content-center bg-slate-900 p-2 sticky top-0">
      <div className="flex items-center text-slate-100 mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Kane Bros. Lab
        </span>
        <Link href="/WeatherPage" className="text-sm ml-4">
          Lab Weather
        </Link>
      </div>
    </nav>
  );
};

export default Header;
