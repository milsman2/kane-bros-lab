import { ReactElement, ReactNode } from 'react';

export type DashboardProps = {
  children: ReactNode;
};

export function Dashboard({ children }: DashboardProps): ReactElement {
  return (
    <h1 className="text-2xl flex flex-1 flex-col items-center justify-center">
      {children}
    </h1>
  );
}
