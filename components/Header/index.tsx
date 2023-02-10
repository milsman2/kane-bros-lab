import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import githubmarkwhite from '../../public/githubMarkWhite.png';

export function Header(): ReactElement {
  return (
    <div className="navbar bg-slate-800">
      <div className="navbar-start">
        <Link className="normal-case text-xl" href="/">
          Kane Bros. Lab
        </Link>
        <a
          href="https://github.com/milsman2/kane-bros-lab"
          className="h-7 w-7 ml-5"
        >
          <Image src={githubmarkwhite} alt="Github logo" />
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn" href="https://eadotechnologies.com">
          via Eado Tech.
        </a>
      </div>
    </div>
  );
}
