"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeUp, FadeLeft, FadeRight, FadeDown, STAGGER_STEP } from "./motion";

const DIRS = [FadeUp, FadeLeft, FadeRight, FadeDown];

const FAQS = [
  {
    q: "Do I need trading experience?",
    a: "No. OsaicMarkets is built so beginners can mirror vetted expert traders, while experienced investors can fine-tune allocation, risk caps, and contract filters themselves.",
  },
  {
    q: "Can I stop copying anytime?",
    a: "Yes, you can pause or stop copying any leader instantly from your dashboard. Open positions can be closed immediately or left to run, your choice.",
  },
  {
    q: "Is my money safe?",
    a: "Your funds are held with top-tier regulated institutions, and you remain in full control of withdrawals at all times. We never commingle client funds with company funds.",
  },
  {
    q: "What is the minimum investment?",
    a: "You can start copy trading with as little as a few hundred dollars, allowing fractional allocation across multiple leaders based on your risk appetite.",
  },
];

export default function NewFAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <FadeUp>
          <h2 className="text-[34px] font-extrabold tracking-tight text-olive-ink sm:text-[44px]">
            Your Questions, answered
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-relaxed text-olive-ink/60">
            Have questions about copy trading? Find answers to the most common
            questions our investors ask.
          </p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const Anim = DIRS[i % DIRS.length];
            return (
              <Anim key={item.q} delay={(i % 2) * STAGGER_STEP}>
                <div className="rounded-2xl bg-white p-6">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[15px] font-bold text-olive-ink">{item.q}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream-200 text-olive-ink">
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex"
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </motion.span>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-[13px] leading-relaxed text-olive-ink/60">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Anim>
            );
          })}
        </div>
      </div>
    </section>
  );
}
