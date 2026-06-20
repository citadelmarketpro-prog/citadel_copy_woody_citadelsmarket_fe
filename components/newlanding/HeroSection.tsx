"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeLeft, FadeRight } from "./motion";
import { useTranslations } from "next-intl";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const integrations = [
  "Interactive Brokers", "tastytrade", "Tradier",
  "eOption", "Magnifi", "Olive Invest",
  "JP Morgan", "HSBC", "Citibank",
];

export default function HeroSection() {
  const t = useTranslations("hero");
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % integrations.length);
        setAnimating(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: darkGradient }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        <FadeLeft className="flex-1 max-w-xl">

          {/* Integration Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 text-xs font-medium">
              <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-400 whitespace-nowrap">{t("integratesWith")}</span>
              <span
                className="inline-block w-[160px]"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating ? "translateY(6px)" : "translateY(0)",
                  transition: "opacity 0.4s, transform 0.4s",
                }}
              >
                <span className="font-semibold text-white whitespace-nowrap">{integrations[activeIndex]}</span>
              </span>
            </div>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4"
            style={{
              background: "linear-gradient(180deg,#fff 0%,#a7f3d0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t("title")}
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            {t("subtitle")}
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/register"
              className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
            >
              {t("register")}
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-colors no-underline"
            >
              {t("login")}
            </Link>
          </div>
        </FadeLeft>

        <FadeRight delay={0.15} className="relative w-full h-[320px] sm:h-[380px] md:flex-1 md:max-w-[480px] md:h-[340px] lg:max-w-lg lg:h-[380px]">
          <Image
            src="/sample-landing/hero_image.png"
            alt="Trading platform"
            fill
            className="object-contain object-center"
            priority
          />
          <Image src="/sample-landing/hero-img1.svg" alt="" width={80} height={80} className="absolute left-[20%] top-0" />
          <Image src="/sample-landing/hero-img2.svg" alt="" width={80} height={80} className="absolute left-[20%] top-[60%]" />
        </FadeRight>
      </div>
    </section>
  );
}
