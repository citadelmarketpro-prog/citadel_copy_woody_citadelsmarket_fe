"use client";

import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Star } from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, ZoomIn } from "./motion";

const AVATAR_PHOTOS = [
  "/team/team_3.jpg",
  "/images/team_1.jpg",
  "/images/pro_woman_1.jpg",
  "/images/young-woman-working.jpg",
  "/team/team_6.jpg",
];

function FloatingTraderCard({
  name,
  role,
  photo,
  side,
}: {
  name: string;
  role: string;
  photo: string;
  side: "left" | "right";
}) {
  return (
    <div
      className={`absolute top-1/2 hidden -translate-y-1/2 items-center gap-2.5 rounded-full border border-olive-ink/10 bg-white px-3.5 py-2.5 shadow-xl shadow-olive-900/10 sm:flex ${
        side === "left" ? "left-0 sm:left-2 lg:left-10" : "right-0 sm:right-2 lg:right-10"
      }`}
    >
      <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <Image src={photo} alt={name} fill sizes="32px" className="object-cover" />
      </span>
      <div className="pr-1 text-left leading-tight">
        <p className="text-[13px] font-semibold text-olive-ink">{name}</p>
        <p className="text-[11px] text-olive-ink/60">{role}</p>
      </div>
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400/60 text-olive-700">
        <TrendingUp className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      {/* Subtle vertical stripe texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(104,127,63,0.05) 0px, rgba(104,127,63,0.05) 1px, transparent 1px, transparent 120px)",
        }}
      />

      <div className="relative mx-auto max-w-[900px] px-6 pb-20 pt-16 text-center sm:pb-28 sm:pt-20">
        {/* Eyebrow badge */}
        <FadeUp>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-olive-ink shadow-sm">
            <TrendingUp className="h-3.5 w-3.5 text-olive-600" />
            Real-time options &amp; futures copy trading
          </div>
        </FadeUp>

        <FadeLeft delay={0.1}>
          <FloatingTraderCard name="Speki" role="Value investor" photo="/images/pro_woman_2.jpg" side="left" />
        </FadeLeft>
        <FadeRight delay={0.1}>
          <FloatingTraderCard name="Romy lane" role="Strategist" photo="/team/team_4.jpg" side="right" />
        </FadeRight>

        <FadeUp delay={0.04}>
          <h1 className="text-[40px] font-extrabold leading-[1.08] tracking-tight text-olive-ink sm:text-[56px] lg:text-[64px]">
            Copy Futures, Options &amp;
            <br />
            Contracts with{" "}
            <span className="text-olive-600">Precision</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.08}>
          <p className="mx-auto mt-6 max-w-[480px] text-[15px] leading-relaxed text-olive-ink/65 sm:text-[17px]">
            We empower you to mirror real-time stock and options trades from top-performing
            traders. Whether you&apos;re following tickers, contracts, or strategic options
            moves, our platform brings precision, flexibility, and transparency&mdash;straight
            to your fingertips
          </p>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex h-12 items-center justify-center rounded-full bg-lime-400 px-7 text-[15px] font-bold text-olive-ink transition-transform hover:scale-[1.03]"
            >
              Start copy trading
            </Link>
            <Link
              href="/lead-traders"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[15px] font-semibold text-olive-ink shadow-sm transition-transform hover:scale-[1.03]"
            >
              View expert traders
            </Link>
          </div>
        </FadeUp>

        {/* Social proof */}
        <ZoomIn delay={0.16}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <div className="flex -space-x-3">
              {AVATAR_PHOTOS.map((photo, i) => (
                <span
                  key={i}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-cream-100"
                >
                  <Image src={photo} alt="" fill sizes="40px" className="object-cover" />
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-lime-400 text-lime-400" />
              ))}
            </div>
            <p className="text-sm text-olive-ink/55">Join over 50million users worldwide</p>
          </div>
        </ZoomIn>
      </div>
    </section>
  );
}
