import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeLeft, FadeRight } from "./motion";

export default async function Mt5Section() {
  const t = await getTranslations("mt5");

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <FadeLeft className="flex-1 grid grid-cols-2 gap-4 max-w-md">
            <div className="rounded-2xl bg-gray-100 flex items-center justify-center py-10">
              <span className="text-2xl font-extrabold text-gray-900">{t("assets")}</span>
            </div>
            <div className="rounded-2xl bg-[#0a0a0a] flex items-center justify-center py-10">
              <span className="text-2xl font-extrabold text-white">{t("spreads")}</span>
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
