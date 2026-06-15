"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const vp = { once: true, amount: 0.15 };

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
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
      initial={{ opacity: 0, x: -48 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
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
      initial={{ opacity: 0, x: 48 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
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
      initial={{ opacity: 0, scale: 0.82 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
