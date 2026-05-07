"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const armedListeners = new Set<() => void>();
let armed = false;

const subscribeArmed = (l: () => void) => {
  armedListeners.add(l);
  return () => {
    armedListeners.delete(l);
  };
};

const notifyArmed = () => {
  for (const l of armedListeners) l();
};

export function armIntroDismissal() {
  if (armed) return;
  armed = true;
  notifyArmed();
}

export function resetIntroDismissal() {
  if (!armed) return;
  armed = false;
  notifyArmed();
}

function useArmed() {
  return useSyncExternalStore(
    subscribeArmed,
    () => armed,
    () => false,
  );
}

export function useIntroActive() {
  const [active, setActive] = useState(true);
  const isArmed = useArmed();

  useEffect(() => {
    if (!active || !isArmed) return;
    const dismiss = () => setActive(false);
    const opts = { once: true, passive: true } as const;
    window.addEventListener("wheel", dismiss, opts);
    window.addEventListener("touchstart", dismiss, opts);
    window.addEventListener("pointerdown", dismiss, { once: true });
    window.addEventListener("keydown", dismiss, { once: true });
    return () => {
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchstart", dismiss);
      window.removeEventListener("pointerdown", dismiss);
      window.removeEventListener("keydown", dismiss);
    };
  }, [active, isArmed]);

  return active;
}
