"use client";

import { useHideOnScrollDown } from "@/hooks/use-hide-on-scroll-down";
import Moon from "@/public/icons/moon.svg";
import Sun from "@/public/icons/sun.svg";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRef, useSyncExternalStore } from "react";
import { runNoiseTransition } from "./run-noise-transition";

const subscribe = () => () => {};

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hidden = useHideOnScrollDown();
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

    runNoiseTransition(x, y, () => setTheme(next));
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={`Switch to ${next} theme`}
      onClick={handleToggle}
      className={clsx(
        "fixed right-0 bottom-0 left-0 mx-auto mb-12.5 flex h-10 w-28.25 items-center justify-center rounded-3xl bg-foreground lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:mt-12 lg:mr-20 lg:mb-0 lg:w-13 xl:mr-28 2xl:mt-18.5",
        "transition-transform duration-500 ease-out will-change-transform motion-reduce:transition-none",
        hidden
          ? "translate-y-[calc(100%+3.5rem)] sm:translate-y-0"
          : "translate-y-0",
      )}
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
