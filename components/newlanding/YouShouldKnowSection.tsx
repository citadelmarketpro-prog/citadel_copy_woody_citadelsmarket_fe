import Link from "next/link";
import { FadeUp, FadeLeft, FadeRight } from "./motion";

export default function YouShouldKnowSection() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <FadeUp>
          <h2 className="text-[34px] font-extrabold tracking-tight text-olive-ink sm:text-[44px]">
            You should know&hellip;
          </h2>
          <p className="mt-3 text-[15px] text-olive-ink/55">.. trading is not easy</p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
          <FadeLeft delay={0}>
            <div className="h-full rounded-3xl bg-white p-9">
              <p className="text-[12px] font-bold uppercase tracking-widest text-rose-500">
                The Challenge
              </p>
              <h3 className="mt-3 text-[24px] font-bold leading-snug text-olive-ink">
                Studying the market takes time
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-olive-ink/60">
                Building and maintaining a trading strategy is hard. Options
                require timing, strategy, and discipline. Only 11&ndash;26% of
                manual investors succeed on their own.
              </p>
            </div>
          </FadeLeft>

          <FadeRight delay={0.06}>
            <div className="h-full rounded-3xl bg-white p-9">
              <p className="text-[12px] font-bold uppercase tracking-widest text-olive-600">
                The Solution
              </p>
              <h3 className="mt-3 text-[24px] font-bold leading-snug text-olive-ink">
                Beat the odds with Copy Trading
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-olive-ink/60">
                Proven Success Rate. Over 73% of investors generate profits by
                copying top leaders&mdash;especially in dynamic options markets.
              </p>
              <Link
                href="/register"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-lime-400 px-6 text-[14px] font-bold text-olive-ink transition-transform hover:scale-[1.03]"
              >
                Start copy trading
              </Link>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
