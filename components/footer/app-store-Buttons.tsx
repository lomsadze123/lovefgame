import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";

interface AppStoreButtonsProps {
  logo: StaticImageData;
  text: string;
  title: string;
}

export function AppStoreButtons(props: AppStoreButtonsProps) {
  const { logo, text, title } = props;
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 border">
      <Image
        className={clsx(title === "App Store" ? "w-[1.365rem]" : "w-[1.65rem]")}
        src={logo}
        alt="Product logo"
      />
      <div>
        <p className="text-[0.659rem]">{text}</p>
        <p className="text-[1.395rem] leading-none">{title}</p>
      </div>
    </div>
  );
}
