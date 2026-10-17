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

// Bouncier than SPRING — icons are tiny, so a playful overshoot reads as
// "pop" rather than jank. One-shot (settles and stops), so it's cheap.
const ICON_SPRING = { type: "spring" as const, stiffness: 320, damping: 14, mass: 0.6 };

/**
 * Wraps a card's icon badge: pops in (scale + slight rotate) a beat after
 * the card itself, then stays still — the hover wiggle is handled by the
 * caller via plain CSS (group-hover), not JS, so it costs nothing at rest.
 */
export function IconPop({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ ...ICON_SPRING, delay }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.span>
  );
}
