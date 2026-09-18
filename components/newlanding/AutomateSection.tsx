import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeLeft, FadeRight } from "./motion";

export default async function AutomateSection() {
  const t = await getTranslations("automate");

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          <FadeLeft className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-2xl bg-gray-100 flex items-center justify-center">
              <Bot className="w-20 h-20 text-gray-400" />
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-[#0a0a0a] px-4 py-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-md bg-red-500 flex items-center justify-center text-white font-bold text-xs">DB</span>
                <div>
                  <div className="text-white font-bold text-sm">$45</div>
                  <div className="text-gray-400 text-xs">trade closed!</div>
                </div>
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
