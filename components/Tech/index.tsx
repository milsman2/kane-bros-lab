import nextjsicon from '../../public/nextjsicon.webp';
import tailwindcsslogo from '../../public/tailwindcsslogo.webp';
import dockerlogo from '../../public/dockerlogo.webp';
import prettierlogodark from '../../public/prettierlogodark.webp';
import reactquerylogo from '../../public/reactquerylogo.webp';
import Image from 'next/image';

export function Tech() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-1 items-center justify-evenly bg-slate-600">
        <Image src={nextjsicon} alt="Next.js logo" sizes="15vw" />
        <Image src={tailwindcsslogo} alt="Tailwind logo" sizes="15vw" />
        <Image src={prettierlogodark} alt="Next.js logo" sizes="15vw" />
        <Image src={dockerlogo} alt="Next.js logo" sizes="15vw" />
        <Image src={reactquerylogo} alt="Next.js logo" sizes="15vw" />
      </div>
    </div>
  );
}
