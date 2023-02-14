import Image from "next/image";
import tpl from '../../public/tpl.webp'

export function WelcomeMessage() {
  return (
    <>
      <h1 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl flex flex-row flex-wrap font-bold m-1">
        Welcome to Kane Bros. Lab
      </h1>
      <strong className="flex flex-row m-2">Proud Incubator and Programmer of The Punters League</strong>
      <a href="https://thepuntersleague.com">
        <Image src={tpl} alt="The Punters League Logo" width={202} height={242} />
      </a>
    </>
  );
}
