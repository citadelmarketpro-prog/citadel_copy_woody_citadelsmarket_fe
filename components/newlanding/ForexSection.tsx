"use client";
import Image from "next/image";
import { FadeUp, ZoomIn } from "./motion";
import { useTranslations } from "next-intl";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}
