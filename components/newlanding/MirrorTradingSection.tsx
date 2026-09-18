import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { FadeLeft, FadeRight } from "./motion";
import { getTranslations } from "next-intl/server";

export default async function MirrorTradingSection() {
  const t = await getTranslations("copyExperts");

  return (
    <section className="py-14 sm:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          <FadeLeft className="flex-1 max-w-md">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{t("title")}</h2>
            <p className="text-gray-400 text-base leading-relaxed mb-5">{t("body")}</p>
            <Link
              href="/mirror-trading"
              className="inline-flex items-center gap-1.5 text-red-500 font-semibold hover:text-red-400 transition-colors no-underline"
            >
              {t("cta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeLeft>

          <FadeRight delay={0.15} className="flex-1 flex justify-center">
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 w-full max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-9 h-9 rounded-lg bg-red-500 flex items-center justify-center text-white font-bold text-sm">cT</span>
                <TrendingUp className="w-5 h-5 text-emerald-500 ml-auto" />
              </div>
              <div className="text-3xl font-extrabold text-white mb-4">{t("sampleReturn")}</div>
              <div className="flex items-end gap-1 h-16 mb-4">
                {[30, 45, 35, 55, 48, 65, 60, 78].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-emerald-500" style={{ height: `${h}%` }} />
                ))}
              </div>
              <span className="block text-center py-2.5 rounded-full bg-red-500 text-white text-sm font-semibold">Copy</span>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
