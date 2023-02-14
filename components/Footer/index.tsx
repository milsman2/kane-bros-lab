import { ReactElement } from 'react';

export function Footer(): ReactElement {
  return (
    <footer className="bg-slate-800">
      <a
        href="https://blog.kanebroslab.com"
        className="flex flex-col flex-1 items-center justify-center text-slate-100 p-2"
      >
        See My HomeLab Blog
      </a>
    </footer>
  );
}
