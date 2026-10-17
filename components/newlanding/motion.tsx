"use client";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

const vp = { once: true, amount: 0.15 };

// Snappy spring with a touch of overshoot — reads as "alive" rather than
// a soft linear fade. Tuned so it settles fast (no lingering wobble).
const SPRING = { type: "spring" as const, stiffness: 260, damping: 22, mass: 0.7 };

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 56, scale: 0.96, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ ...SPRING, delay }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeDown({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -56, scale: 0.96, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ ...SPRING, delay }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -64, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ ...SPRING, delay }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 64, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ ...SPRING, delay }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ZoomIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ ...SPRING, delay }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Fast per-item stagger step for cascading grids/lists. */
export const STAGGER_STEP = 0.07;

/**
 * Scroll-linked parallax wrapper — moves its children a bit slower/faster
 * than the page scroll for continuous depth, not just a one-time reveal.
 * `strength` in px: positive drifts content up as you scroll past it.
 */
export function Parallax({
  children,
  strength = 60,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export type { MotionValue };
