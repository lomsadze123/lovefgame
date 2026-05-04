import SliderArrow from "@/public/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";

export function SliderButton() {
  return (
    <button className="absolute top-1/3 left-0 ml-11 hidden h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 xl:flex">
      <Link className="p-4.5 pr-5" href="/">
        <Image src={SliderArrow} alt="Slider Arrow" />
      </Link>
    </button>
  );
}
