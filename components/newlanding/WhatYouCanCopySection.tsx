import { BarChart3, Sparkles, GitMerge } from "lucide-react";
import { FadeUp } from "./motion";

const ITEMS = [
  {
    icon: BarChart3,
    title: "Stocks & ETFs",
    body: "Full-share orders or fractional allocations, instantaneous entry/exit mirroring, price-based T/P and S/L.",
  },
  {
    icon: Sparkles,
    title: "Single-Leg Options (Calls & Puts)",
    body: "Replicate trade by trade: ticker, strike, expiry, premium, quantity, and timestamp.",
  },
  {
    icon: GitMerge,
    title: "Multi-Leg Options Strategies",
    body: "Copy complex structures as a single unit: verticals, iron condors, butterflies, calendars, ratio spreads, etc. We preserve leg ratios and leg timing to reduce legging risk.",
  },
];

export default function WhatYouCanCopySection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <FadeUp>
          <h2 className="text-[34px] font-extrabold tracking-tight text-olive-ink sm:text-[44px]">
            What you can copy
          </h2>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-5 text-left sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-cream-100 p-7">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-olive-600 text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="text-[16px] font-bold leading-snug text-olive-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-olive-ink/60">
                  {item.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
