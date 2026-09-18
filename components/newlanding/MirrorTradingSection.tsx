import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { FadeLeft, FadeRight } from "./motion";
import { getTranslations } from "next-intl/server";

export default async function MirrorTradingSection() {
  const t = await getTranslations("copyExperts");

  return (
    <section className="py-14 sm:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <FadeLeft className="order-2 lg:order-2 w-full max-w-md">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{t("title")}</h2>
            <p className="text-gray-400 text-base leading-relaxed mb-5">{t("body")}</p>
            <Link
              href="/mirror-trading"
              className="inline-flex items-center gap-1.5 text-red-500 font-semibold hover:text-red-400 transition-colors no-underline"
            >
              {t("cta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeLeft>

          <FadeRight delay={0.15} className="relative order-1 lg:order-1 w-full flex justify-center pb-6">
            <div className="relative w-full max-w-xs">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/front_images/happy-investor-having-success-with-cryptocurrency-investment-pc.jpg"
                  alt="Trader celebrating a successful copy trade"
                  fill
                  sizes="(min-width: 1024px) 320px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#141414] border border-white/10 p-4 w-40 sm:w-44 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center text-white font-bold text-xs">cT</span>
                  <TrendingUp className="w-4 h-4 text-emerald-500 ml-auto" />
                </div>
                <div className="text-xl font-extrabold text-white mb-3">{t("sampleReturn")}</div>
                <span className="block text-center py-1.5 rounded-full bg-red-500 text-white text-xs font-semibold">Copy</span>
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
