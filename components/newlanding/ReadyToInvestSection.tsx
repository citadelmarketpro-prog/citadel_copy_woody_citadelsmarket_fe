import { ShieldCheck, Link2, Repeat2 } from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, FadeDown, STAGGER_STEP } from "./motion";

const DIRS = [FadeUp, FadeLeft, FadeRight, FadeDown];

const STEPS = [
  {
    icon: ShieldCheck,
    title: "Create Your Account.",
    body: "Join now to unlock options-focused copy trading.",
  },
  {
    icon: Link2,
    title: "Find Your Match",
    body: "Explore leaders known for success in options—contracts, spreads, tickers—you name it.",
  },
  {
    icon: Repeat2,
    title: "Copy and grow",
    body: "Replicate trades, refine strategies, and learn—all while staying in control.",
  },
];

export default function ReadyToInvestSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-olive-700 to-olive-900 py-20 sm:py-28">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <FadeUp>
          <h2 className="text-[34px] font-extrabold tracking-tight text-white sm:text-[48px]">
            Ready to Invest Smarter?
          </h2>
        </FadeUp>

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <span className="pointer-events-none absolute left-[calc(16.6%+28px)] right-[calc(16.6%+28px)] top-11 hidden h-px bg-white/25 sm:block" />
          {STEPS.map((step, i) => {
            const Anim = DIRS[i % DIRS.length];
            return (
              <Anim key={step.title} delay={i * STAGGER_STEP}>
                <div className="relative h-full rounded-3xl bg-cream-100 p-7 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-olive-900/30">
                  <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-olive-600 text-white">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-[16px] font-bold leading-snug text-olive-ink">{step.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-olive-ink/60">{step.body}</p>
                </div>
              </Anim>
            );
          })}
        </div>
      </div>
    </section>
  );
}
