import { NestedChildren } from '../../interfaces';

export function Tech({ children }: NestedChildren) {
  return (
    <div className="flex flex-col flex-1 justify-evenly">
      <div className="bg-slate-600 grid grid-cols-5 justify-evenly items-center">
        {children}
      </div>
    </div>
  );
}
