import AppleLogo from "@/public/icons/apple-logo.svg";
import PlayStoreLogo from "@/public/icons/play-store.svg";
import Link from "next/link";
import { AppStoreButtons } from "./app-store-Buttons";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="mt-11 flex w-full flex-col items-center border-t-[0.625rem] pb-[2.9rem] lg:mt-0 lg:border-t-[#FFFFFF] lg:bg-black lg:pb-16.5 lg:text-white">
      <div className="mt-[2.89rem] flex flex-col gap-[1.88rem] border-b px-2 pb-[1.88rem] sm:w-[90%] lg:flex-row lg:items-center lg:justify-between lg:gap-7">
        <div>
          <p className="mb-[1.88rem] flex flex-col lg:mb-10 [&_span]:leading-none">
            <span className="text-3xl font-semibold">LoveFrom</span>
            <span className="text-lg font-light">Games</span>
          </p>
          <a href="mailto:support@lfg.com">support@lfg.com</a>
        </div>

        <nav>
          <ul className="flex flex-col gap-5 lg:flex-row xl:gap-18">
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of service</Link>
            </li>
            <li>Support</li>
          </ul>
        </nav>

        <div className="flex gap-5">
          <AppStoreButtons
            logo={AppleLogo}
            text="Download on the"
            title="App Store"
          />
          <AppStoreButtons
            logo={PlayStoreLogo}
            text="Get it on"
            title="PLay Store"
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
