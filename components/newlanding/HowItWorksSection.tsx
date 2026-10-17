import { FadeUp, FadeLeft, FadeRight, FadeDown, IconPop, STAGGER_STEP } from "./motion";

const DIRS = [FadeUp, FadeLeft, FadeRight, FadeDown];

const STEPS = [
  {
    n: "01",
    title: "Choose your Expert Trader",
    body: "Browse a curated list of top traders with verified performance metrics.",
  },
  {
    n: "02",
    title: "Set your Investment level",
    body: "Decide how much to allocate based on your risk appetite",
  },
  {
    n: "03",
    title: "Copy trades Automatically",
    body: "Every trade your expert makes is mirrored in your account, in real time.",
  },
  {
    n: "04",
    title: "Track & adjust your portfolio",
    body: "Monitor performance and adjust allocations whenever you like.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <FadeUp>
          <h2 className="text-[34px] font-extrabold tracking-tight text-olive-ink sm:text-[44px]">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-relaxed text-olive-ink/60">
            Getting started with copy trading is simple. Follow these four easy
            steps to begin your investment journey today.
          </p>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Anim = DIRS[i % DIRS.length];
            return (
              <Anim key={step.n} delay={i * STAGGER_STEP}>
                <div className="group h-full rounded-3xl bg-cream-100 p-7 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-olive-900/10">
                  <IconPop
                    delay={i * STAGGER_STEP + 0.12}
                    className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-olive-600 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  >
                    {step.n}
                  </IconPop>
                  <h3 className="text-[17px] font-bold leading-snug text-olive-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-olive-ink/60">
                    {step.body}
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
