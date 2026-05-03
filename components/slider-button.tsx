import SliderArrow from "@/public/icons/slider-arrow.svg";
import Image from "next/image";

export function SliderButton() {
  return (
    <button className="h-14 w-14">
      <Image src={SliderArrow} alt="Slider Arrow" />
    </button>
  );
}
