import { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <footer className="flex flex-wrap justify-center items-center p-2 bg-slate-900 mt-auto">
      <a className="text-slate-400 ml-5" href="https://blog.kanebroslab.com">
        See My HomeLab Blog
      </a>
    </footer>
  );
}
