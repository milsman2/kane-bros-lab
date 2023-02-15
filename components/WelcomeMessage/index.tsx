export function WelcomeMessage() {
  return (
    <article className="flex flex-col items-center">
      <h1 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl flex flex-row flex-wrap font-bold m-2">
        Welcome to Kane Bros. Lab
      </h1>
      <section className="flex flex-row m-2 items-center">
        <p className="mx-1">Proud Incubator and Programmer of</p>
        <a href="https://thepuntersleague.com" className="underline">
          The Punters League
        </a>
      </section>
    </article>
  );
}
