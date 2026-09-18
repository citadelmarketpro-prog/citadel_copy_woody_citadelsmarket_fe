import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeLeft, FadeRight } from "./motion";

export default async function Mt5Section() {
  const t = await getTranslations("mt5");

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <FadeLeft className="relative order-1 w-full max-w-md pb-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/front_images/african-american-man-using-pc-purchase-sell-stocks.jpg"
                alt="Trader using the citamarkets MT5 platform"
                fill
                sizes="(min-width: 1024px) 448px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-4 rounded-xl bg-gray-100 px-3 sm:px-4 py-2 sm:py-2.5 shadow-lg">
              <span className="text-xs sm:text-sm font-extrabold text-gray-900">{t("assets")}</span>
            </div>
            <div className="absolute -bottom-2 right-4 rounded-xl bg-[#0a0a0a] px-3 sm:px-4 py-2 sm:py-2.5 shadow-lg">
              <span className="text-xs sm:text-sm font-extrabold text-white">{t("spreads")}</span>
            </div>
          </FadeLeft>

          <FadeRight delay={0.15} className="order-2 w-full max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">{t("title")}</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">{t("body")}</p>
            <Link
              href="/advance-trading"
              className="inline-flex items-center gap-1.5 text-red-500 font-semibold hover:text-red-400 transition-colors no-underline"
            >
              {t("cta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
