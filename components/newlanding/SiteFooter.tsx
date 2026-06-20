"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FadeUp, ZoomIn } from "./motion";
import LiquidityProvidersSection from "@/components/site/LiquidityProvidersSection";

const awards = [
  "/sample-landing/best-partners-program-global-2024-min.svg",
  "/sample-landing/top-trusted-financial-institution-2024-min.svg",
  "/sample-landing/most-trusted-forex-broker-global-2024-min.svg",
  "/sample-landing/best-fx-broker-global-2024-min.svg",
  "/sample-landing/best-customer-support-global-2024-min.svg",
  "/sample-landing/best-partners-program-global-2024-min.svg",
  "/sample-landing/most-transparent-broker-asia-2024-min.svg",
];

export default function SiteFooter() {
  const t = useTranslations("footer");

  const values = [
    { head: t("v1Head"), body: t("v1Body") },
    { head: t("v2Head"), body: t("v2Body") },
    { head: t("v3Head"), body: t("v3Body") },
  ];

  const footerCols = [
    {
      head: t("tradesCol"),
      links: [
        { label: t("swingTrading"), href: "/swing-trading" },
        { label: t("fxFutures"), href: "/futures" },
        { label: t("buyOptions"), href: "/option-trading" },
        { label: t("oilGas"), href: "/oil-and-gas" },
      ],
    },
    {
      head: t("toolsCol"),
      links: [
        { label: t("optionCopy"), href: "/option-trading" },
        { label: t("fxAdvance"), href: "/advance-trading" },
        { label: t("buyLive"), href: "/trading-live" },
        { label: t("copyTrading"), href: "/option-copy-trading" },
      ],
    },
    {
      head: t("companyCol"),
      links: [
        { label: t("aboutUs"), href: "/about" },
        { label: t("insurance"), href: "/insurance" },
        { label: t("demoAccount"), href: "/register" },
      ],
    },
    {
      head: t("supportCol"),
      links: [
        { label: t("contactUs"), href: "/contact" },
        { label: t("systemStatus"), href: "/system-status" },
        { label: t("latestNews"), href: "/trade-news" },
        { label: t("referFriend"), href: "/refer-a-friend" },
      ],
    },
    {
      head: t("legalsCol"),
      links: [
        { label: t("termsConditions"), href: "/terms-and-condition" },
        { label: t("privacyPolicy"), href: "/privacy-policy" },
        { label: t("amlPolicy"), href: "/aml-policy" },
        { label: t("regulations"), href: "/regulations" },
      ],
    },
  ];

  return (
    <>
      {/* Our Values */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("valuesTitle")}</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <ZoomIn key={i} delay={0.1 * i}>
                <div
                  className="rounded-xl p-6 min-h-44"
                  style={{
                    backgroundImage: "url('/sample-landing/chat-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{v.head}</h3>
                  <p className="text-gray-800 text-sm leading-relaxed m-0">{v.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Everywhere banner */}
      <section>
        <ZoomIn>
          <Image
            src="/sample-landing/trade_everywhere.webp"
            alt="Trade Anywhere"
            width={1920}
            height={600}
            className="w-full h-auto"
          />
        </ZoomIn>
      </section>

      {/* Achievements */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-4xl font-bold text-gray-900 mb-10">{t("achievementsTitle")}</h2>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {awards.map((src, i) => (
              <ZoomIn key={i} delay={0.06 * i} className="flex justify-center">
                <Image
                  src={src}
                  alt="Award"
                  width={130}
                  height={110}
                  className="h-20 w-auto object-contain opacity-60"
                />
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      <LiquidityProvidersSection />

      {/* CTA */}
      <section
        className="py-28 sm:py-36"
        style={{
          backgroundImage: "url('/sample-landing/66585fe0e1dc7e70cc75d804_cta-10.webp')",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <FadeUp>
            <div className="bg-[#181c25] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                  {t("ctaTitle")}
                </h2>
                <p className="text-white text-base">
                  {t("ctaDesc")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-emerald-600 text-white font-extrabold rounded-full text-base hover:bg-emerald-500 transition-colors no-underline w-full sm:w-auto"
                >
                  {t("tryDemo")}
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-full text-base hover:bg-emerald-500 transition-colors no-underline w-full sm:w-auto"
                >
                  {t("tradersHub")}
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-gray-400 text-xs"
        style={{
          background: "linear-gradient(229deg,rgb(75,75,75) 1.87%,rgb(10,10,10) 95.11%)",
        }}
      >
        <FadeUp>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col lg:flex-row gap-10 justify-between">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/images/logo_light.png"
                    alt="Citadels Market"
                    width={200}
                    height={72}
                    className="h-24 w-auto object-contain"
                  />
                </Link>
              </div>

              <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 flex-1 max-w-4xl">
                {footerCols.map((col, ci) => (
                  <div key={ci}>
                    <h3 className="text-white text-base font-semibold mb-3">{col.head}</h3>
                    <ul className="space-y-3 list-none p-0 m-0">
                      {col.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className="text-gray-400 hover:text-white transition-colors text-xs no-underline"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>

            <div className="mt-8 border border-[#383838] rounded-xl p-5">
              <div className="space-y-4 text-gray-400 text-xs leading-relaxed">
                <p>
                  <strong>{t("riskWarning")}:</strong> {t("riskText")}
                </p>
                <p>{t("companyDesc1")}</p>
                <p>{t("companyDesc2")}</p>
                <p>{t("companyDesc3")}</p>
                <p>{t("companyDesc4")}</p>
                <p>{t("companyDesc5")}</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </footer>
    </>
  );
}
