"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FadeUp, ZoomIn, FadeRight } from "./motion";
import { useTranslations } from "next-intl";

function TradingViewWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initialized.current) return;
    initialized.current = true;
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: "500",
      tabs: [
        {
          title: "Stocks",
          symbols: [
            { s: "NASDAQ:AAPL",  d: "Apple" },
            { s: "NASDAQ:GOOGL", d: "Alphabet" },
            { s: "NASDAQ:MSFT",  d: "Microsoft" },
            { s: "NASDAQ:AMZN",  d: "Amazon" },
            { s: "NASDAQ:NVDA",  d: "NVIDIA" },
            { s: "NYSE:TSLA",    d: "Tesla" },
            { s: "NYSE:META",    d: "Meta" },
            { s: "NYSE:JPM",     d: "JPMorgan" },
          ],
          originalTitle: "Stocks",
        },
      ],
    });
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div style={{ contain: "layout style", minHeight: 500 }}>
      <div ref={containerRef} className="tradingview-widget-container w-full max-w-full overflow-hidden" style={{ height: 500 }}>
        <div className="tradingview-widget-container__widget w-full" style={{ height: 500 }} />
      </div>
    </div>
  );
}

export default function ForexSection() {
  const t = useTranslations("forex");

  const stockFeatures = [
    { img: "/sample-landing/pair.svg", head: t("f1Head"), body: t("f1Body") },
    { img: "/sample-landing/leverage.svg", head: t("f2Head"), body: t("f2Body") },
    { img: "/sample-landing/spread.svg", head: t("f3Head"), body: t("f3Body") },
    { img: "/sample-landing/speed.svg", head: t("f4Head"), body: t("f4Body") },
  ];

  return (
    <section className="py-14 sm:py-20 bg-emerald-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("title")}</h2>
          <p className="text-gray-600 mb-8 text-sm">
            {t("subtitle")}
          </p>
        </FadeUp>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-[3]">
            {stockFeatures.map((f, i) => (
              <ZoomIn key={i} delay={0.08 * i}>
                <div>
                  <Image src={f.img} alt={f.head} width={40} height={40} className="mb-3" />
                  <h3 className="text-gray-900 font-semibold text-base mt-0 mb-1">{f.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
          <FadeRight delay={0.2} className="flex-[2] rounded-xl overflow-hidden w-full min-h-[500px] max-w-full">
            <TradingViewWidget />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
