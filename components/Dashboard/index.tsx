import { ReactElement, ReactNode } from 'react';

export type DashboardProps = {
  children: ReactNode;
};

export function Dashboard({ children }: DashboardProps): ReactElement {
  return (
    <article className="flex flex-1 my-24 flex-col items-center justify-between">
      {children}
    </article>
  );
}
