import { getTranslations } from "next-intl/server";
import { FadeUp } from "./motion";

export default async function TestimonialsSection() {
  const t = await getTranslations("testimonials");

  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">{t("title")}</h2>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white rounded-2xl border border-gray-200 px-8 py-6">
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
        </FadeUp>
      </div>
    </section>
  );
}
