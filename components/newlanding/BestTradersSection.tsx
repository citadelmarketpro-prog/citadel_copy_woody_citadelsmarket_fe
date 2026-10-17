"use client";

import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, FadeDown, STAGGER_STEP } from "./motion";

const DIRS = [FadeUp, FadeLeft, FadeRight, FadeDown];

export type Trader = {
  id: number;
  name: string;
  username: string;
  avatar: string | null;
  gain: string;
  risk: number;
  copiers: number;
  is_active: boolean;
};

function riskLabel(risk: number): { label: string; className: string } {
  if (risk <= 3) return { label: "Low Risk", className: "bg-emerald-50 text-emerald-600" };
  if (risk <= 6) return { label: "Moderate Risk", className: "bg-amber-50 text-amber-600" };
  return { label: "High Risk", className: "bg-rose-50 text-rose-500" };
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export default function BestTradersSection({ traders }: { traders: Trader[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (traders.length === 0) return null;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeUp>
          <div className="text-center">
            <h2 className="text-[34px] font-extrabold tracking-tight text-olive-ink sm:text-[44px]">
              Copy from the best traders
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-relaxed text-olive-ink/60">
              Our expert traders are carefully vetted professionals with proven
              track records and years of experience in the financial markets.
            </p>
          </div>
        </FadeUp>

        <FadeUp className="relative mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {traders.map((t, i) => {
                const risk = riskLabel(t.risk);
                const Anim = DIRS[i % DIRS.length];
                return (
                  <div key={t.id} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)]">
                    <Anim delay={i * STAGGER_STEP} className="h-full">
                      <div className="h-full rounded-3xl border border-olive-ink/10 bg-cream-100 p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-olive-900/10">
                        <div className="flex items-center gap-3">
                          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-olive-400 flex items-center justify-center">
                            {t.avatar ? (
                              <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" />
                            ) : (
                              <span className="text-[14px] font-bold text-white">{initialsOf(t.name)}</span>
                            )}
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-[15px] font-bold text-olive-ink">{t.name}</p>
                            <p className="truncate text-[12px] text-olive-ink/55">{t.username}</p>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between rounded-2xl bg-white px-5 py-4">
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-[22px] font-bold text-olive-ink">
                                ${Number(t.gain).toLocaleString()}
                              </span>
                              <TrendingUp className="h-4 w-4 text-olive-600" />
                            </div>
                            <p className="mt-1 text-[11px] text-olive-ink/50">Profit (1M)</p>
                          </div>
                          <div className="text-right">
                            <span className="text-[22px] font-bold text-olive-ink">
                              {t.copiers.toLocaleString()}
                            </span>
                            <p className="mt-1 text-[11px] text-olive-ink/50">Copiers</p>
                          </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between">
                          <span className="text-[13px] font-medium text-olive-ink/70">Risk level:</span>
                          <span className={`rounded-full px-3 py-1 text-[12px] font-semibold ${risk.className}`}>
                            {risk.label}
                          </span>
                        </div>

                        <Link
                          href="/register"
                          className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full border border-olive-ink/15 bg-white text-[14px] font-semibold text-olive-ink transition-colors hover:bg-olive-ink/5"
                        >
                          Copy trader
                        </Link>
                      </div>
                    </Anim>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full bg-white text-olive-ink shadow-lg lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 translate-x-5 items-center justify-center rounded-full bg-white text-olive-ink shadow-lg lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
