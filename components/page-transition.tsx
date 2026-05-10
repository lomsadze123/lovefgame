"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

type ExitingFrame = { id: number; node: HTMLElement; height: number };

const TRANSITION = { duration: 1.6, ease: [0.22, 1, 0.36, 1] as const };

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  const [enterId, setEnterId] = useState(0);
  const [exiting, setExiting] = useState<ExitingFrame | null>(null);
  const [animateEnter, setAnimateEnter] = useState(false);

  if (lastPath !== pathname) {
    const main =
      typeof document !== "undefined"
        ? (document.querySelector(
            "[data-live-page] main",
          ) as HTMLElement | null)
        : null;
    const height = Math.min(main?.offsetHeight ?? 0, window.innerHeight);
    const node = main ? (main.cloneNode(true) as HTMLElement) : null;
    setLastPath(pathname);
    setEnterId((id) => id + 1);
    setAnimateEnter(true);
    if (node) {
      setExiting({ id: enterId + 1, node, height });
    }
  }

  return (
    <div className="relative grid w-full flex-1 grid-cols-1 grid-rows-[minmax(0,1fr)] overflow-x-clip">
      {exiting && (
        <ExitingPage
          key={exiting.id}
          node={exiting.node}
          height={exiting.height}
          onDone={() => setExiting(null)}
        />
      )}
      <motion.div
        key={pathname}
        data-live-page
        initial={
          animateEnter
            ? {
                x: "25%",
                clipPath: "inset(0px 0px 0px 100%)",
                filter: "blur(18px) brightness(0.45)",
                opacity: 0.35,
                scaleX: 0.95,
              }
            : false
        }
        animate={{
          x: 0,
          clipPath: "inset(0px 0px 0px 0px)",
          filter: "blur(0px) brightness(1)",
          opacity: 1,
          scaleX: 1,
        }}
        transition={TRANSITION}
        style={{
          gridArea: "1 / 1 / 2 / 2",
          zIndex: 1,
          background: "var(--background)",
          willChange: "transform, clip-path, opacity, filter",
        }}
        className="flex w-full flex-col items-center"
      >
        {children}
      </motion.div>
    </div>
  );
}

function ExitingPage({
  node,
  height,
  onDone,
}: {
  node: HTMLElement;
  height: number;
  onDone: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    c.appendChild(node);
  }, [node]);

  return (
    <motion.div
      ref={containerRef}
      initial={{
        opacity: 1,
        scaleX: 1,
        x: 0,
        clipPath: "inset(0px 0px 0px 0px)",
      }}
      animate={{
        x: "-30%",
        scaleX: 0.5,
        opacity: 0,
        clipPath: "inset(0px 100% 0px 0px)",
      }}
      transition={TRANSITION}
      onAnimationComplete={onDone}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: height || "auto",
        zIndex: 2,
        transformOrigin: "0% 50%",
        background: "var(--background)",
        willChange: "transform, clip-path, opacity",
        pointerEvents: "none",
        overflow: "hidden",
      }}
      className="flex w-full flex-col items-center"
    />
  );
}
