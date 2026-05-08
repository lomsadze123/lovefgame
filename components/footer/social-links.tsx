import Image from "next/image";

const socials = [
  {
    name: "YouTube",
    icon: "/icons/youtube.svg",
    href: "https://www.youtube.com/channel/UC2kaS-NXiUolJBkF8NqK0OQ",
  },
  {
    name: "Instagram",
    icon: "/icons/instagram.svg",
    href: "https://www.instagram.com/LoveFromgames/",
  },
  {
    name: "Facebook",
    icon: "/icons/facebook.svg",
    href: "https://www.facebook.com/LoveFromGames/",
  },
  {
    name: "TikTok",
    icon: "/icons/tiktok.svg",
    href: "https://www.tiktok.com/@lovefromgames",
  },
  {
    name: "Telegram",
    icon: "/icons/telegram.svg",
    href: "https://t.me/LoveFromGames",
  },
  {
    name: "X",
    icon: "/icons/x.svg",
    href: "https://x.com/LoveFromgames",
  },
  {
    name: "Threads",
    icon: "/icons/hashtag.svg",
    href: "https://www.threads.com/@LoveFromgames",
  },
];

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-5">
      {socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="transition-opacity hover:opacity-70"
          >
            <Image
              src={social.icon}
              alt=""
              width={28}
              height={28}
              aria-hidden
              className="h-auto w-6.25 lg:invert dark:invert"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
