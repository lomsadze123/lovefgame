"use client";

import { useTheme } from "next-themes";
import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { runNoiseTransition } from "./run-noise-transition";
import Sun from "@/public/icons/sun.svg";
import Moon from "@/public/icons/moon.svg";

const subscribe = () => () => {};

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";
  const next = isDark ? "light" : "dark";

  const handleToggle = () => {
    const button = buttonRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!button || prefersReducedMotion) {
      setTheme(next);
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const color: [number, number, number] =
      next === "dark" ? [0, 0, 0] : [1, 1, 1];

    runNoiseTransition(x, y, color, () => setTheme(next));
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={`Switch to ${next} theme`}
      onClick={handleToggle}
      className="w-28.25 h-10 mb-12.5 bg-foreground flex items-center justify-center rounded-3xl fixed bottom-0 left-0 right-0 mx-auto sm:w-13"
    >
      <span aria-hidden="true" suppressHydrationWarning>
        {isDark ? (
          <Image src={Sun} alt="Sun" />
        ) : (
          <Image src={Moon} alt="Moon" />
        )}
      </span>
    </button>
  );
}
