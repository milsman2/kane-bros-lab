import { NestedChildren } from '../../interfaces';

export function Tech({ children }: NestedChildren) {
  return (
    <div className=" flex flex-col flex-1 text-sm">
      <div className="bg-slate-800 flex flex-col flex-1">Tech Stack</div>
      <div className="m-2">{children}</div>
    </div>
  );
}
