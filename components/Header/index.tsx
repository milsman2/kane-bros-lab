import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header(): ReactElement {
  return (
    <div className="navbar bg-slate-800">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52"
          >
            <li tabIndex={0}>
              <div className="justify-between">
                Projects
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </g>
                </svg>
              </div>
              <ul className="p-2">
                <li>
                  <a href="https://thepuntersleague.com">The Punters League</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link className="normal-case text-xl" href="/">
          Kane Bros. Lab
        </Link>
        <a href="https://github.com/milsman2/kane-bros-lab">
          <Image
            src="/github-mark-white.png"
            alt="Github logo"
            width={25}
            height={25}
            className="mx-2"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <div>
              Projects
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </g>
              </svg>
            </div>
            <ul className="p-2">
              <a href="https://thepuntersleague.com">The Punters League</a>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" href="https://eadotechnologies.com">
          via Eado Tech.
        </a>
      </div>
    </div>
  );
}
