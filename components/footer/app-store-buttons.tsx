import Image, { type StaticImageData } from "next/image";

interface AppStoreButtonsProps {
  logo: StaticImageData;
  text: string;
  title: string;
  iconClassName?: string;
}

export function AppStoreButtons(props: AppStoreButtonsProps) {
  const { logo, text, title, iconClassName } = props;
  return (
    <div className="flex items-center gap-2 rounded-lg border bg-white px-2 py-1.5 text-black">
      <Image className={iconClassName} src={logo} alt="Product logo" />
      <div className="font-medium">
        <p className="text-[0.659rem] tracking-[-0.07em]">{text}</p>
        <p className="text-[1.395rem] leading-none tracking-[-0.07em]">
          {title}
        </p>
      </div>
    </div>
  );
}
