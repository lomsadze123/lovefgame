import { AppStoreButtons } from "./app-store-Buttons";
import AppleLogo from "@/public/icons/apple-logo.svg";
import PlayStoreLogo from "@/public/icons/play-store.svg";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="mb-[2.9rem] mt-11 border-t-[0.625rem] lg:border-t-0 w-full flex flex-col items-center">
      <div className="mt-[2.89rem] px-2 flex flex-col gap-[1.88rem] border-b pb-[1.88rem] lg:flex-row lg:items-center lg:justify-between lg:gap-7 sm:w-[90%]">
        <div className="space-y-[1.88rem]">
          <p className="flex flex-col [&_span]:leading-none">
            <span className="font-semibold text-3xl">LoveFrom</span>
            <span className="font-light text-lg">Games</span>
          </p>
          <a href="mailto:support@lfg.com">support@lfg.com</a>
        </div>

        <nav>
          <ul className="flex flex-col gap-5 lg:flex-row">
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
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

      <div className="flex flex-col items-center gap-[1.88rem] mt-[1.88rem] sm:flex-row sm:w-[90%] sm:justify-between">
        <SocialLinks />

        <small className="text-base">&copy; Copyright 2026</small>
      </div>
    </footer>
  );
}
