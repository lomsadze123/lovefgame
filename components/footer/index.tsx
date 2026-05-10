import AppleLogo from "@/public/icons/apple-logo.svg";
import PlayStoreLogo from "@/public/icons/play-store.svg";
import Link from "next/link";
import { AppStoreButtons } from "./app-store-buttons";
import { SocialLinks } from "./social-links";

const hoverUnderline =
  "xl:relative xl:after:absolute xl:after:bottom-0 xl:after:left-0 xl:after:h-px xl:after:w-0 xl:after:bg-current xl:after:transition-[width] xl:after:duration-500 xl:hover:after:w-full";

export function Footer() {
  return (
    <footer className="mt-11 flex w-full flex-col items-center border-t-[0.625rem] pb-[2.9rem] lg:mt-0 lg:border-t-[#FFFFFF] lg:bg-black lg:pb-16.5 lg:text-white">
      <div className="mt-[2.89rem] flex flex-col gap-[1.88rem] border-b px-2 pb-[1.88rem] sm:w-[90%] lg:flex-row lg:items-center lg:justify-between lg:gap-7">
        <Link href="/" className="flex flex-col [&_span]:leading-none">
          <span className="text-3xl font-semibold">LoveFrom</span>
          <span className="text-lg font-light">Games</span>
        </Link>

        <nav>
          <ul className="flex flex-col gap-5 lg:flex-row xl:gap-18">
            <li className={hoverUnderline}>
              <Link href="/about">About us</Link>
            </li>
            <li className={hoverUnderline}>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li className={hoverUnderline}>
              <Link href="/terms">Terms of service</Link>
            </li>
            <li className={hoverUnderline}>
              <a href="mailto:support@lovefromgames.com">Support</a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-5">
          <AppStoreButtons
            logo={AppleLogo}
            text="Download on the"
            title="App Store"
            iconClassName="w-[1.365rem]"
            href="https://apps.apple.com/us/app/paper-toss/id6451116448"
          />
          <AppStoreButtons
            logo={PlayStoreLogo}
            text="Get it on"
            title="Play Store"
            iconClassName="w-[1.65rem]"
            href="https://play.google.com/store/apps/dev?id=7282945627507088067"
          />
        </div>
      </div>

      <div className="mt-[1.88rem] flex flex-col items-center gap-[1.88rem] sm:w-[90%] sm:flex-row sm:justify-between">
        <SocialLinks />

        <small className="text-base">&copy; Copyright 2026</small>
      </div>
    </footer>
  );
}
