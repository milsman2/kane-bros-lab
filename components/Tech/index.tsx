import nextjsicon from '../../public/nextjsicon.webp';
import tailwindcsslogo from '../../public/tailwindcsslogo.webp';
import dockerlogo from '../../public/dockerlogo.webp';
import prettierlogodark from '../../public/prettierlogodark.webp';
import reactquerylogo from '../../public/reactquerylogo.webp';
import Image from 'next/image';

export function Tech() {
  return (
    <div className="w-full flex flex-row flex-wrap items-center bg-slate-600 m-4">
      <div className="relative h-24 flex flex-col flex-1">
        <Image
          src={nextjsicon}
          alt="Next.js logo"
          fill={true}
          className="object-contain"
        />
      </div>
      <div className="relative h-24 flex flex-col flex-1">
        <Image
          src={tailwindcsslogo}
          alt="Tailwind logo"
          fill={true}
          className="object-contain"
        />
      </div>
      <div className="relative h-24 flex flex-col flex-1">
        <Image
          src={prettierlogodark}
          alt="Next.js logo"
          fill={true}
          className="object-contain"
        />
      </div>
      <div className="relative h-24 flex flex-col flex-1">
        <Image
          src={dockerlogo}
          alt="Next.js logo"
          fill={true}
          className="object-contain"
        />
      </div>
      <div className="relative h-24 flex flex-col flex-1 ">
        <Image
          src={reactquerylogo}
          alt="Next.js logo"
          fill={true}
          className="object-contain"
        />
      </div>
    </div>
  );
}
