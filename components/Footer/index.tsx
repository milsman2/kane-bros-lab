import { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <footer className="flex flex-row justify-center items-center p-2">
      <a
        href="https://blog.kanebroslab.com"
        className="flex flex-col flex-1 items-center justify-center"
      >
        See My HomeLab Blog
      </a>
    </footer>
  );
}
