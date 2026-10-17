"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const vp = { once: true, amount: 0.15 };

// Snappy spring with a touch of overshoot — reads as "alive" rather than
// a soft linear fade. Tuned so it settles fast (no lingering wobble).
const SPRING = { type: "spring" as const, stiffness: 260, damping: 22, mass: 0.7 };

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 56, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
      initial={{ opacity: 0, y: -56, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
      initial={{ opacity: 0, x: -64 }}
      whileInView={{ opacity: 1, x: 0 }}
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
      initial={{ opacity: 0, x: 64 }}
      whileInView={{ opacity: 1, x: 0 }}
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
