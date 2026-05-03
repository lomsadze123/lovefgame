import { SectionHeader } from "@/components";

export default function AboutPage() {
  return (
    <main className="px-7 mt-9 md:mt-15 max-w-330">
      <section className="text-center">
        <h1 className="text-[2rem] font-bold">ABOUT US</h1>
        <p className="my-[1.9rem] md:text-xl font-light">
          LoveFrom Games is a video game studio, dedicated to crafting immersive
          gaming experiences. We are passionate about pushing the boundaries of
          creativity and technology to deliver unforgettable adventures to
          players worldwide. With a talented team of developers, designers, and
          storytellers, we strive to create games that resonate deeply with
          audiences and leave a lasting impression.
        </p>
        <button className="bg-foreground text-button-text py-2 px-[1.64rem] rounded-lg">
          Get in Touch
        </button>
      </section>

      <section className="flex flex-col gap-[3.1rem] mt-14 lg:flex-row">
        <div>
          <SectionHeader
            title="Our Mission"
            className="[&>div]:h-px gap-5 [&_h3]:text-2xl [&>div]:max-w-[70dvw] [&>div]:mx-auto [&_h3]:text-center lg:[&_h3]:text-left lg:[&>div]:max-w-1/2 lg:[&>div]:mx-0"
          />
          <p className="mt-5 font-light md:text-xl">
            At LoveFrom Games, our mission is to Make something beautiful,
            inspire and entertain gamers by leveraging the latest technologies
            and pushing the limits of game design. We believe in the power of
            storytelling and strive to create captivating narratives that draw
            players into rich and immersive worlds. With a commitment to quality
            and innovation, we aim to set new standards in the gaming industry
            and redefine what it means to play
          </p>
        </div>

        <div>
          <SectionHeader
            title="Our Vision"
            className="[&>div]:h-px gap-5 [&_h3]:text-2xl [&>div]:max-w-[70dvw] [&>div]:mx-auto [&_h3]:text-center lg:[&_h3]:text-right lg:[&>div]:max-w-1/2 lg:[&>div]:mr-0 lg:[&>div]:ml-auto"
          />
          <p className="mt-5 font-light md:text-xl">
            To become a world where games are not just played - but felt. Where
            every experience we create sets a new benchmark for beauty, emotion,
            and innovation. We envision LoveFrom Games at the forefront of a new
            era in interactive entertainment - where technology disappears, and
            pure imagination takes over. A place where stories are lived, not
            told, and where every player finds something unforgettable.
          </p>
        </div>
      </section>
    </main>
  );
}
