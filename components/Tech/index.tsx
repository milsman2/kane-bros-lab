import { NestedChildren } from '../../interfaces';

export function Tech({ children }: NestedChildren) {
  return (
    <div className="flex flex-col flex-1 m-4">
      <div className="bg-slate-600 grid grid-cols-5 gap-8 items-center p-4">
        {children}
      </div>
    </div>
  );
}
