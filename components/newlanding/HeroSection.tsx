"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeLeft, FadeRight } from "./motion";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] min-h-[680px] sm:min-h-[720px] lg:min-h-0">
      <div className="absolute inset-0">
        <Image
          src="/new_images/68e5277221bc2157f07bfbef_home-background-hero.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Mobile / tablet: person image as a full-bleed backdrop, text overlaid on top */}
      <div className="absolute inset-0 lg:hidden">
        <div className="absolute right-[-10%] bottom-0 w-[92%] max-w-[440px]" style={{ aspectRatio: "1080 / 1724" }}>
          <Image
            src="/new_images/img_76.webp"
            alt=""
            fill
            sizes="90vw"
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-14 min-h-[680px] sm:min-h-[720px] lg:min-h-0 flex flex-col justify-end lg:block">
        <div className="relative flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-8 lg:min-h-[560px] xl:min-h-[620px]">
          <FadeLeft className="max-w-xl pb-10 sm:pb-12 lg:pb-12 z-10 text-left">
            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-1">{t("kicker")}</p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-4 sm:mb-6">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
              <br />
              {t("titleLine3")}
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md">
              {t("subtitle")}
            </p>
            <Link
              href="/register"
              className="inline-block px-8 py-3.5 bg-red-500 text-white font-semibold rounded-full hover:bg-red-400 transition-colors no-underline"
            >
              {t("openAccount")}
            </Link>
          </FadeLeft>

          {/* Desktop: phone mockup + person composition */}
          <FadeRight
            delay={0.15}
            className="hidden lg:flex relative w-full justify-end lg:flex-1 lg:self-end"
          >
            <div
              className="relative w-full max-w-[420px] xl:max-w-[480px]"
              style={{ aspectRatio: "1080 / 1724" }}
            >
              <div
                className="absolute left-[-4%] bottom-0 w-[56%] z-0"
                style={{ aspectRatio: "500 / 1070" }}
              >
                <Image
                  src="/new_images/68e7987ec7025c4c00764605_device-home-hero.webp"
                  alt="citamarkets trading app"
                  fill
                  sizes="260px"
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>
              <Image
                src="/new_images/img_76.webp"
                alt="Trader checking the citamarkets app"
                fill
                sizes="480px"
                className="relative z-10 object-contain object-bottom"
              />
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
