import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeLeft, FadeRight } from "./motion";

export default async function TestimonialsSection() {
  const t = await getTranslations("testimonials");

  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <FadeLeft className="order-1 w-full max-w-md mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
              <Image
                src="/front_images/trading-stock-stock-market-trading-investment-broker-stock-exchange-market.jpg"
                alt="A citamarkets trader reviewing the markets"
                fill
                sizes="(min-width: 1024px) 448px, 90vw"
                className="object-cover"
              />
            </div>
          </FadeLeft>

          <FadeRight delay={0.15} className="order-2 w-full text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">{t("title")}</h2>
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white rounded-2xl border border-gray-200 px-6 sm:px-8 py-6 max-w-full">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="w-6 h-6 bg-emerald-500 flex items-center justify-center text-white text-sm">
                    ★
                  </span>
                ))}
                <span className="w-6 h-6 bg-emerald-500/40 flex items-center justify-center text-white text-sm">★</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                {t("trustpilotScorePrefix")} <span className="font-semibold text-gray-900">4.0</span>{" "}
                {t("trustpilotScoreSuffix")} <span className="font-semibold text-gray-900">40,000</span>{" "}
                {t("trustpilotReviews")}
              </p>
              <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-sm">★ Trustpilot</span>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
