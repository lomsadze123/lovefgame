import Image from "next/image";

const socials = [
  { name: "YouTube", icon: "/icons/youtube.svg", href: "#" },
  { name: "Instagram", icon: "/icons/instagram.svg", href: "#" },
  { name: "Facebook", icon: "/icons/facebook.svg", href: "#" },
  { name: "TikTok", icon: "/icons/tiktok.svg", href: "#" },
  { name: "Telegram", icon: "/icons/telegram.svg", href: "#" },
  { name: "X", icon: "/icons/x.svg", href: "#" },
  { name: "Threads", icon: "/icons/hashtag.svg", href: "#" },
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
