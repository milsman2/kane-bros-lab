import { NestedChildren } from '../../interfaces';

export function Tech({ children }: NestedChildren) {
  return (
    <div className="flex flex-col">
      <div className="collapse">
        <input type="checkbox" id="tech_dropdown" aria-label="tech_dropdown" />
        <div className="collapse-title bg-slate-800">Tech Stack</div>
        <div className="collapse-content m-4 flex flex-col">{children}</div>
      </div>
    </div>
  );
}
