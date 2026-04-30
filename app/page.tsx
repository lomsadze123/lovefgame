import { HeroHeading, Logo } from "@/components";
import { AppStoreButtons } from "@/components/footer/app-store-Buttons";
import { SocialLinks } from "@/components/footer/social-links";
import { SectionHeader } from "@/components/section-header";
import AppleLogo from "@/public/icons/apple-logo.svg";
import PlayStoreLogo from "@/public/icons/play-store.svg";

export default function Home() {
  return (
    <main className="flex-1">
      {/* <Logo /> */}
      {/* <HeroHeading /> */}
      {/* <AppStoreButtons
        logo={AppleLogo}
        text="Download on the"
        title="App Store"
      />
      <AppStoreButtons
        logo={PlayStoreLogo}
        text="Get it on"
        title="PLay Store"
      /> */}

      {/* <SocialLinks /> */}

      <SectionHeader
        title="Our Mission"
        // subtitle="How we collect, use, and protect your information."
        // date="Last updated: 21 April 2026"
        className="[&_h3]:text-2xl [&>div]:bg-primary-text [&>div]:h-px gap-5"
      />
    </main>
  );
}
