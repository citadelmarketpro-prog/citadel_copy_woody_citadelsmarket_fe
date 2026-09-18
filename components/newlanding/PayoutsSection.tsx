import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowDownRight, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeLeft, FadeRight } from "./motion";

export default async function PayoutsSection() {
  const t = await getTranslations("payouts");

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <FadeLeft className="relative order-1 w-full flex justify-center pb-6">
            <div className="relative w-full max-w-xs">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/front_images/businesswoman-buying-stocks-online-hispanic-young-woman-working-from-home-her-trading-business-laptop.jpg"
                  alt="Trader reviewing payouts across multiple markets"
                  fill
                  sizes="(min-width: 1024px) 320px, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#0a0a0a] p-4 w-44 sm:w-48 space-y-2 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-white font-bold text-xs">DT</div>
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> Multipliers
                </div>
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" /> Options
                </div>
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <ArrowDownRight className="w-3.5 h-3.5 text-red-400" /> Accumulators
                </div>
              </div>
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
