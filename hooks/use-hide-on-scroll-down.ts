"use client";

import { useEffect, useState } from "react";

interface Options {
  showAfter?: number;
  delta?: number;
}

export function useHideOnScrollDown({
  showAfter = 80,
  delta = 6,
}: Options = {}) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const diff = y - lastY;

      if (Math.abs(diff) > delta) {
        if (diff > 0 && y > showAfter) {
          setHidden(true);
        } else if (diff < 0) {
          setHidden(false);
        }
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter, delta]);

  return hidden;
}
