"use client";

import SliderArrow from "@/public/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";

export function SliderButton() {
  return (
    <button className="group absolute top-0 bottom-0 left-0 my-auto ml-11 hidden h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 transition-colors duration-500 ease-in-out xl:flex xl:hover:bg-foreground">
      <Link className="p-4.5 pr-5" href="/">
        <Image
          src={SliderArrow}
          alt="Slider Arrow"
          className="transition-[filter] duration-500 ease-in-out xl:group-hover:invert dark:invert xl:dark:group-hover:invert-0"
        />
      </Link>
    </button>
  );
}
