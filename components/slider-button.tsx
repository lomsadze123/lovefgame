import Image from "next/image";
import SliderArrow from "@/public/icons/slider-arrow.svg";

export function SliderButton() {
  return (
    <button className="w-14 h-14">
      <Image src={SliderArrow} alt="Slider Arrow" />
    </button>
  );
}
