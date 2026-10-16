"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const vp = { once: true, amount: 0.1 };
const DURATION = 0.3;
const EASE = [0.16, 1, 0.3, 1] as const;

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION, delay, ease: EASE }}
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
      initial={{ opacity: 0, y: -22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION, delay, ease: EASE }}
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
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: DURATION, delay, ease: EASE }}
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
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: DURATION, delay, ease: EASE }}
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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: DURATION, delay, ease: EASE }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Fast per-item stagger step for cascading grids/lists. */
export const STAGGER_STEP = 0.06;
