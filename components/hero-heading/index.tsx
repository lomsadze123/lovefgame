"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

import {
  BOLD_D,
  G1_FILL_D,
  G1_STROKE_D,
  G2_FILL_D,
  G2_STROKE_D,
  G3_FILL_D,
  G3_STROKE_D,
  G4_FILL_D,
  G4_STROKE_D,
} from "./paths";

const BOLD_CENTER_Y = 384;
const GROUP_CENTER_TOP_MAIN = 291;
const GROUP_CENTER_TOP_THIN = 328.6;
const GROUP_CENTER_BOTTOM_THIN = 421.6;
const GROUP_CENTER_BOTTOM_MAIN = 471.1;

const SCALE_MAIN = 0.92;
const SCALE_THIN = 0.954;

const WHEEL_SENSITIVITY = 0.18;

const MIRROR_CONFIGS = [
  {
    maskId: "path-1-outside-1_2001_1227",
    gradientId: "paint0_linear_2001_1227",
    region: { x: "104.677", y: "234.021", width: "1141", height: "114" },
    fillD: G1_FILL_D,
    strokeD: G1_STROKE_D,
  },
  {
    maskId: "path-3-outside-2_2001_1227",
    gradientId: "paint1_linear_2001_1227",
    region: { x: "124.677", y: "273.598", width: "1101", height: "110" },
    fillD: G2_FILL_D,
    strokeD: G2_STROKE_D,
  },
  {
    maskId: "path-5-outside-3_2001_1227",
    gradientId: "paint2_linear_2001_1227",
    region: { x: "104.677", y: "414.145", width: "1141", height: "114" },
    fillD: G3_FILL_D,
    strokeD: G3_STROKE_D,
  },
  {
    maskId: "path-7-outside-4_2001_1227",
    gradientId: "paint3_linear_2001_1227",
    region: { x: "124.677", y: "366.629", width: "1101", height: "110" },
    fillD: G4_FILL_D,
    strokeD: G4_STROKE_D,
  },
] as const;

export function HeroHeading() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollPercentRef = useRef(0);

  const progressMV = useMotionValue(0);
  const progress = useSpring(progressMV, {
    stiffness: 80,
    damping: 22,
    mass: 0.4,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let inView = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.5 },
    );
    observer.observe(el);

    const onWheel = (e: WheelEvent) => {
      if (!inView) return;
      const prev = scrollPercentRef.current;
      const goingUp = e.deltaY < 0;
      const goingDown = e.deltaY > 0;
      const escaping = (prev <= 0 && goingUp) || (prev >= 100 && goingDown);
      if (escaping) return;

      e.preventDefault();
      const next = Math.max(
        0,
        Math.min(100, prev + e.deltaY * WHEEL_SENSITIVITY),
      );
      scrollPercentRef.current = next;
      progressMV.set(next / 100);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", onWheel);
    };
  }, [progressMV]);

  const yTopMain = useTransform(
    progress,
    [0, 1],
    [0, BOLD_CENTER_Y - GROUP_CENTER_TOP_MAIN],
  );
  const yTopThin = useTransform(
    progress,
    [0, 1],
    [0, BOLD_CENTER_Y - GROUP_CENTER_TOP_THIN],
  );
  const yBottomMain = useTransform(
    progress,
    [0, 1],
    [0, BOLD_CENTER_Y - GROUP_CENTER_BOTTOM_MAIN],
  );
  const yBottomThin = useTransform(
    progress,
    [0, 1],
    [0, BOLD_CENTER_Y - GROUP_CENTER_BOTTOM_THIN],
  );

  const scaleTopMain = useTransform(progress, [0, 1], [1, SCALE_MAIN]);
  const scaleTopThin = useTransform(progress, [0, 1], [1, SCALE_THIN]);
  const scaleBottomMain = useTransform(progress, [0, 1], [1, SCALE_MAIN]);
  const scaleBottomThin = useTransform(progress, [0, 1], [1, SCALE_THIN]);
  const opacityMirror = useTransform(progress, [0, 0.98, 1], [1, 1, 0]);

  const groupAnims = [
    { y: yTopMain, scale: scaleTopMain },
    { y: yTopThin, scale: scaleTopThin },
    { y: yBottomMain, scale: scaleBottomMain },
    { y: yBottomThin, scale: scaleBottomThin },
  ];

  return (
    <div
      ref={ref}
      className="relative scale-25 sm:scale-50 lg:scale-75 xl:scale-100"
    >
      <svg
        width="1344"
        height="768"
        viewBox="0 0 1344 768"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2001_1227)">
          {MIRROR_CONFIGS.map((cfg, i) => (
            <motion.g
              key={cfg.maskId}
              style={{
                y: groupAnims[i].y,
                scale: groupAnims[i].scale,
                opacity: opacityMirror,
                transformBox: "fill-box",
                transformOrigin: "center",
              }}
            >
              <mask
                id={cfg.maskId}
                maskUnits="userSpaceOnUse"
                x={cfg.region.x}
                y={cfg.region.y}
                width={cfg.region.width}
                height={cfg.region.height}
                fill="black"
              >
                <rect
                  fill="white"
                  x={cfg.region.x}
                  y={cfg.region.y}
                  width={cfg.region.width}
                  height={cfg.region.height}
                />
                <path d={cfg.fillD} />
              </mask>
              <path
                d={cfg.fillD}
                style={{ fill: "var(--background)" }}
              />
              <path
                d={cfg.strokeD}
                fill={`url(#${cfg.gradientId})`}
                mask={`url(#${cfg.maskId})`}
              />
            </motion.g>
          ))}
          <path
            d={BOLD_D}
            style={{ fill: "var(--foreground)" }}
            transform="translate(0 13)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2001_1227"
            x1="672.115"
            y1="243.867"
            x2="672.115"
            y2="317.636"
            gradientUnits="userSpaceOnUse"
          >
            <stop style={{ stopColor: "var(--hero-mirror-edge)" }} />
            <stop offset="1" style={{ stopColor: "var(--background)" }} />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2001_1227"
            x1="672.115"
            y1="288.375"
            x2="672.115"
            y2="352.918"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              style={{ stopColor: "var(--hero-mirror-edge)", stopOpacity: 0.7 }}
            />
            <stop offset="1" style={{ stopColor: "var(--background)" }} />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2001_1227"
            x1="672.115"
            y1="528.452"
            x2="672.425"
            y2="475.681"
            gradientUnits="userSpaceOnUse"
          >
            <stop style={{ stopColor: "var(--hero-mirror-edge)" }} />
            <stop offset="1" style={{ stopColor: "var(--background)" }} />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2001_1227"
            x1="672.8"
            y1="472.496"
            x2="672.8"
            y2="405.87"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              style={{ stopColor: "var(--hero-mirror-edge)", stopOpacity: 0.7 }}
            />
            <stop offset="1" style={{ stopColor: "var(--background)" }} />
          </linearGradient>
          <clipPath id="clip0_2001_1227">
            <rect width="1344" height="768" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
