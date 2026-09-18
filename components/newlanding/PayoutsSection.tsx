import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowDownRight, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeLeft, FadeRight } from "./motion";

export default async function PayoutsSection() {
  const t = await getTranslations("payouts");

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <FadeLeft className="flex-1 flex justify-center">
            <div className="w-56 rounded-2xl bg-[#0a0a0a] p-5 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-red-500 flex items-center justify-center text-white font-bold text-xs">DT</div>
              <div className="flex items-center gap-2 text-white text-sm font-semibold">
                <Sparkles className="w-4 h-4" /> Multipliers
              </div>
              <div className="flex items-center gap-2 text-white text-sm font-semibold">
                <ArrowUpRight className="w-4 h-4 text-emerald-500" /> Options
              </div>
              <div className="flex items-center gap-2 text-white text-sm font-semibold">
                <ArrowDownRight className="w-4 h-4 text-red-400" /> Accumulators
              </div>
            </div>
          </FadeLeft>

          <FadeRight delay={0.15} className="flex-1 max-w-lg">
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
