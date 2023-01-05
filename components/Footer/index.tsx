import { ReactElement } from 'react';
import Link from 'next/link';

export default function Footer(): ReactElement {
  return (
    <footer className="flex flex-row justify-center items-center p-2">
      <Link
        href="https://blog.kanebroslab.com"
        className="flex flex-col flex-1 items-center justify-center"
      >
        See My HomeLab Blog
      </Link>
    </footer>
  );
}
