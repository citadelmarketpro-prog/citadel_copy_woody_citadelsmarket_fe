import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeLeft, FadeRight } from "./motion";

export default async function AutomateSection() {
  const t = await getTranslations("automate");

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <FadeLeft className="order-2 lg:order-2 w-full max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">{t("title")}</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">{t("body")}</p>
            <Link
              href="/advance-trading"
              className="inline-flex items-center gap-1.5 text-red-500 font-semibold hover:text-red-400 transition-colors no-underline"
            >
              {t("cta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeLeft>

          <FadeRight delay={0.15} className="relative order-1 lg:order-1 w-full flex justify-center pb-6">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/front_images/laptop-with-graphs-statistics-glasses-table.jpg"
                  alt="Automated trading strategy running unattended"
                  fill
                  sizes="(min-width: 640px) 256px, 224px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-[#0a0a0a] px-4 py-3 flex items-center gap-2 shadow-xl">
                <span className="w-8 h-8 rounded-md bg-red-500 flex items-center justify-center text-white font-bold text-xs">DB</span>
                <div>
                  <div className="text-white font-bold text-sm">$45</div>
                  <div className="text-gray-400 text-xs">trade closed!</div>
                </div>
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
