"use client";

import SliderArrow from "@/public/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SliderButton() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="fixed top-0 left-0 z-10 flex h-dvh flex-col items-center justify-center">
      <button className="group ml-1 hidden h-13 w-13 cursor-pointer items-center justify-center rounded-full border-2 transition-colors duration-500 ease-in-out xl:flex xl:hover:bg-foreground 2xl:ml-11">
        <Link className="p-4 pr-4.5" href="/">
          <Image
            src={SliderArrow}
            alt="Slider Arrow"
            className="transition-[filter] duration-500 ease-in-out xl:group-hover:invert dark:invert xl:dark:group-hover:invert-0"
          />
        </Link>
      </button>
    </div>
  );
}
