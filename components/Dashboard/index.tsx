import { ReactElement, ReactNode } from 'react';

export type DashboardProps = {
  children: ReactNode;
};

export function Dashboard({ children }: DashboardProps): ReactElement {
  return (
    <article className="flex flex-col flex-1 items-center justify-around lg:w-3/4">
      {children}
    </article>
  );
}
