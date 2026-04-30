import Image, { type StaticImageData } from "next/image";

interface AppStoreButtonsProps {
  logo: StaticImageData;
  text: string;
  title: string;
}

export function AppStoreButtons(props: AppStoreButtonsProps) {
  const { logo, text, title } = props;
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5">
      <Image src={logo} alt="Product logo" />
      <div>
        <p className="text-[0.66rem]">{text}</p>
        <p className="text-[1.4rem] leading-none">{title}</p>
      </div>
    </div>
  );
}
