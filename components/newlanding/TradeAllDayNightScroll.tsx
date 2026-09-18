"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TradeAllDayNightScroll({
  dayTitle,
  nightTitle,
  subtitle,
  cta,
}: {
  dayTitle: string;
  nightTitle: string;
  subtitle: string;
  cta: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const raw = -rect.top / total;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const nightReveal = progress;

  const threshold = 0.5;
  const band = 0.1;
  const dayOpacity = Math.min(1, Math.max(0, (threshold + band / 2 - progress) / band));
  const nightOpacity = Math.min(1, Math.max(0, (progress - (threshold - band / 2)) / band));

  return (
    <section ref={sectionRef} className="relative h-[240vh]">
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
        {/* Day background, fills the entire screen */}
        <Image
          src="/new_images/img_30.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* Night overlay, wipes upward from the bottom as the user scrolls */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(${(1 - nightReveal) * 100}% 0 0 0)` }}
        >
          <Image
            src="/new_images/img_14.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060c1e]/85 via-[#0a1330]/85 to-[#05070f]/90" />
          <div className="absolute w-2.5 h-2.5 rounded-full bg-white/70 blur-[2px] top-[14%] left-[6%]" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-white/60 blur-[1px] top-[24%] left-[80%]" />
          <div className="absolute w-2 h-2 rounded-full bg-white/50 blur-[2px] top-[60%] left-[88%]" />
        </div>

        {/* Day text */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20"
          style={{ opacity: dayOpacity, pointerEvents: dayOpacity < 0.5 ? "none" : "auto" }}
        >
          <div className="max-w-xl">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4">
              {dayTitle}
            </h2>
            <p className="text-gray-800 text-base sm:text-lg mb-6">{subtitle}</p>
            <Link
              href="/register"
              className="inline-block w-fit px-8 py-3.5 bg-red-500 text-white font-semibold rounded-full hover:bg-red-400 transition-colors no-underline"
            >
              {cta}
            </Link>
          </div>
        </div>

        {/* Night text */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20"
          style={{ opacity: nightOpacity, pointerEvents: nightOpacity < 0.5 ? "none" : "auto" }}
        >
          <div className="max-w-xl">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4">
              {nightTitle}
            </h2>
            <p className="text-gray-200 text-base sm:text-lg mb-6">{subtitle}</p>
            <Link
              href="/register"
              className="inline-block w-fit px-8 py-3.5 bg-red-500 text-white font-semibold rounded-full hover:bg-red-400 transition-colors no-underline"
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
