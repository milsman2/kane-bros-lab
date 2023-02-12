import nextjsicon from '../../public/nextjsicon.webp';
import tailwindcsslogo from '../../public/tailwindcsslogo.webp';
import dockerlogo from '../../public/dockerlogo.webp';
import prettierlogodark from '../../public/prettierlogodark.webp';
import reactquerylogo from '../../public/reactquerylogo.webp';
import Image from 'next/image';

export function Tech() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-evenly bg-slate-600">
      <Image
        src={nextjsicon}
        alt="Next.js logo"
        sizes="20vw"
        className="flex flex-col flex-1 items-center justify-center m-2"
      />
      <Image
        src={tailwindcsslogo}
        alt="Tailwind logo"
        sizes="20vw"
        className="flex flex-col flex-1 items-center justify-center m-2"
      />
      <div className="flex flex-col flex-1 items-center justify-center">
        <Image
          src={prettierlogodark}
          alt="Next.js logo"
          sizes="20vw"
          className="flex flex-col flex-1 items-center justify-center m-2"
        />
      </div>
      <div className="flex flex-col flex-1 items-center justify-center">
        <Image
          src={dockerlogo}
          alt="Next.js logo"
          sizes="20vw"
          className="flex flex-col flex-1 items-center justify-center m-2"
        />
      </div>
      <div className="flex flex-col flex-1 items-center justify-center">
        <Image
          src={reactquerylogo}
          alt="Next.js logo"
          sizes="20vw"
          className="flex flex-col flex-1 items-center justify-center m-2"
        />
      </div>
    </div>
  );
}
