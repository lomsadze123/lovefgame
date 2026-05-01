"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

const TEXT = "Dream it, Build it";
const MIRROR_TEXT = "Dream it Build it";
const MIRROR_COUNT = 2;
const MIRROR_GAP = 50;
const MIRROR_SCALE_STEP = 0.15;

const HEADING_CLASSES = "text-4xl whitespace-nowrap leading-none";
const MIRROR_CLASSES = `${HEADING_CLASSES} tracking-[0.05em]`;

export function HeroHeading() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <section ref={ref} className="relative h-[130vh] w-full">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="relative">
          {Array.from({ length: MIRROR_COUNT }, (_, i) => i + 1).map((i) => (
            <Mirror
              key={`up-${i}`}
              progress={scrollYProgress}
              index={i}
              direction={-1}
            />
          ))}
          <h2 className={`relative z-10 tracking-wide ${HEADING_CLASSES}`}>
            {TEXT}
          </h2>
          {Array.from({ length: MIRROR_COUNT }, (_, i) => i + 1).map((i) => (
            <Mirror
              key={`down-${i}`}
              progress={scrollYProgress}
              index={i}
              direction={1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Mirror({
  progress,
  index,
  direction,
}: {
  progress: MotionValue<number>;
  index: number;
  direction: 1 | -1;
}) {
  const y = useTransform(progress, [0, 1], [0, direction * index * MIRROR_GAP]);
  const opacity = useTransform(
    progress,
    [0, 1],
    [0, Math.max(0.1, 0.45 - (index - 1) * 0.18)],
  );
  const scale = useTransform(
    progress,
    [0, 1],
    [1, 1 + index * MIRROR_SCALE_STEP],
  );

  return (
    <motion.span
      aria-hidden
      style={{
        y,
        opacity,
        scale,
        WebkitTextStroke: "0.5px currentColor",
        WebkitTextFillColor: "transparent",
        WebkitMaskImage:
          direction === -1
            ? "linear-gradient(to bottom, black 50%, transparent 50%)"
            : "linear-gradient(to bottom, transparent 50%, black 50%)",
        maskImage:
          direction === -1
            ? "linear-gradient(to bottom, black 50%, transparent 50%)"
            : "linear-gradient(to bottom, transparent 50%, black 50%)",
      }}
      className={`pointer-events-none absolute inset-0 flex justify-center ${MIRROR_CLASSES}`}
    >
      {MIRROR_TEXT}
    </motion.span>
  );
}
