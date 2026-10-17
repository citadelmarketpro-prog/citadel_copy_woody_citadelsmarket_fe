import { Link2, ClipboardList, Component, MessageCircle, RefreshCw, Crown } from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, FadeDown, STAGGER_STEP } from "./motion";

const DIRS = [FadeUp, FadeLeft, FadeRight, FadeDown];

const FEATURES = [
  {
    icon: Link2,
    title: "Transparent Options Copying",
    body: "See exactly what you're mirroring—ticker, strategy, side (call/put), strike, expiry, entry/exit premium, size, and timestamps—plus a clear history of each leader's performance and drawdowns. No hidden fees, no black-box trades.",
  },
  {
    icon: ClipboardList,
    title: "Advanced Tools for Contracts",
    body: "Dial in risk before you copy: per-trade caps, %-of-equity allocation, max contracts, slippage guard (max premium), chain filters (min OI/volume, max bid-ask spread), and auto-hedge toggles for volatile names.",
  },
  {
    icon: Component,
    title: "Innovative Execution for Multi-Legs",
    body: "Copy simple contracts or complex structures as a unit: verticals, calendars, iron condors, butterflies. We sync legs, preserve ratios, and apply best-effort routing to help reduce mis-fills and legging risk when leaders trade.",
  },
  {
    icon: MessageCircle,
    title: "Trader-Centric Support",
    body: "Human help when it matters—real people on chat, phone, and email for account linking, order settings, and contract-specific questions (assignments, exercise, expirations).",
  },
  {
    icon: RefreshCw,
    title: "Learn While You Copy",
    body: "Leaders can attach notes, rationale, and risk context (IV, Greeks, catalysts) to each trade. Use strategy tags (breakout, earnings, theta, trend) and post-trade debriefs to sharpen your own playbook while you mirror.",
  },
  {
    icon: Crown,
    title: "Unique Options Features",
    body: "AutoGuard™: optional auto-TP/SL by premium, % move, or delta",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-olive-700 py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeUp>
          <div className="text-center">
            <h2 className="text-[34px] font-extrabold tracking-tight text-white sm:text-[44px]">
              Why choose OsaicMarkets
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-relaxed text-white/70">
              Our platform combines cutting-edge technology with expert insights
              to give you the best possible trading experience.
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Anim = DIRS[i % DIRS.length];
            return (
              <Anim key={f.title} delay={(i % 3) * STAGGER_STEP}>
                <div className="h-full rounded-3xl bg-cream-100 p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-olive-900/30">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-olive-600 text-white">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-[16px] font-bold leading-snug text-olive-ink">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-olive-ink/60">
                    {f.body}
                  </p>
                </div>
              </Anim>
            );
          })}
        </div>
      </div>
    </section>
  );
}
