export function WelcomeMessage() {
  return (
    <>
      <h1 className="text-2xl md:text-4xl sm:text-3xl flex flex-row flex-wrap font-bold mt-1">
        Welcome to Kane Bros. Lab
      </h1>
      <section className="flex flex-col m-1 items-center justify-center">
        <p className="text-lg">Proud Incubator and Programmer of</p>
        <a
          href="https://thepuntersleague.com"
          className="underline font-bold text-2xl"
        >
          The Punters League
        </a>
      </section>
    </>
  );
}
