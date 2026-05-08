"use client";

import { animate, AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  armIntroDismissal,
  resetIntroDismissal,
  useHeroAtTop,
  useIntroActive,
} from "../hooks";

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

const TRANSITION = { duration: 1.6, ease: [0.22, 1, 0.36, 1] as const };

const LINES = ["LoveFrom", "Games"] as const;
const TOTAL_CHARS = LINES.reduce((sum, line) => sum + line.length, 0);
const TYPING_DURATION = 2.6;
const POST_LOAD_DELAY_MS = 3500;
const CURSOR_FADE_TOTAL_MS = 1000;

const LINE_CLASS = [
  "min-h-[1em] text-[3.35rem] leading-none font-semibold sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem]",
  "min-h-[1em] text-[2.05rem] leading-none sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
] as const;

const CURSOR_BASE =
  "ml-[0.04em] inline-block h-[1.1em] w-[0.06em] translate-y-[0.05em] bg-current align-middle";

function ScrollLock() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, []);
  return null;
}

function Cursor({ visible, fading }: { visible: boolean; fading: boolean }) {
  const visibility = visible ? "visible" : "hidden";
  if (fading) {
    return (
      <motion.span
        aria-hidden
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        style={{ visibility }}
        className={CURSOR_BASE}
      />
    );
  }
  return (
    <span
      aria-hidden
      style={{ visibility }}
      className={`${CURSOR_BASE} animate-cursor-blink`}
    />
  );
}

function LogoMark({
  typedCount,
  showCursor = true,
}: {
  typedCount: number;
  showCursor?: boolean;
}) {
  const cursorFading = typedCount >= TOTAL_CHARS;
  return (
    <h1 className="inline-flex flex-col">
      {LINES.map((line, i) => {
        const start = LINES.slice(0, i).reduce((s, l) => s + l.length, 0);
        const end = start + line.length;
        const isLast = i === LINES.length - 1;
        const cursorOnLine = isLast
          ? typedCount >= start
          : typedCount >= start && typedCount < end;
        const typedInLine = Math.max(
          0,
          Math.min(line.length, typedCount - start),
        );
        return (
          <span key={i} className={LINE_CLASS[i]}>
            {line.slice(0, typedInLine)}
            {showCursor && <Cursor visible={cursorOnLine} fading={cursorFading} />}
          </span>
        );
      })}
    </h1>
  );
}

const HIDDEN_STATE = {
  y: "-30%",
  scale: 0.5,
  opacity: 0,
  clipPath: "inset(0px 0px 100% 0px)",
} as const;

const VISIBLE_STATE = {
  y: 0,
  scale: 1,
  opacity: 1,
  clipPath: "inset(0px 0px 0% 0px)",
} as const;

let logoDismissed = false;

export function Logo() {
  const isClient = useIsClient();
  const introActive = useIntroActive();
  const heroAtTop = useHeroAtTop();
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (!introActive) logoDismissed = true;
  }, [introActive]);

  useEffect(() => {
    let cancelled = false;
    let delayTimer: number | undefined;
    let armTimer: number | undefined;
    let typingCtrl: ReturnType<typeof animate> | undefined;

    resetIntroDismissal();

    const run = async () => {
      const fontsReady = document.fonts
        ? document.fonts.ready
        : Promise.resolve();
      const windowLoaded =
        document.readyState === "complete"
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              window.addEventListener("load", () => resolve(), { once: true });
            });

      await Promise.all([fontsReady, windowLoaded]);
      if (cancelled) return;

      delayTimer = window.setTimeout(() => {
        if (cancelled) return;
        typingCtrl = animate(0, TOTAL_CHARS, {
          duration: TYPING_DURATION,
          ease: "linear",
          onUpdate: (v) => setTypedCount(Math.min(TOTAL_CHARS, Math.floor(v))),
          onComplete: () => {
            setTypedCount(TOTAL_CHARS);
            armTimer = window.setTimeout(() => {
              if (!cancelled) armIntroDismissal();
            }, CURSOR_FADE_TOTAL_MS);
          },
        });
      }, POST_LOAD_DELAY_MS);
    };

    void run();

    return () => {
      cancelled = true;
      if (delayTimer) clearTimeout(delayTimer);
      if (armTimer) clearTimeout(armTimer);
      typingCtrl?.stop();
    };
  }, []);

  const visible = introActive || heroAtTop;

  const overlay = (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={logoDismissed ? HIDDEN_STATE : false}
          animate={VISIBLE_STATE}
          exit={HIDDEN_STATE}
          transition={TRANSITION}
          style={{
            background: "var(--background)",
            willChange: "transform, clip-path, opacity",
          }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {introActive && <ScrollLock />}
          <LogoMark
            typedCount={introActive ? typedCount : TOTAL_CHARS}
            showCursor={introActive}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return isClient ? createPortal(overlay, document.body) : null;
}
