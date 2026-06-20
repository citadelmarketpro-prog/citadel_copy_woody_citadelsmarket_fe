import { FadeUp } from "./motion";
import { getTranslations } from "next-intl/server";

export default async function StockDerivativesSection() {
  const t = await getTranslations("stockDerivatives");
  return (
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeUp>
        <div
          className="relative rounded-2xl overflow-hidden flex flex-col lg:flex-row justify-between gap-10"
          style={{
            background: "url('/sample-landing/stock-cfds.jpeg') center/cover no-repeat",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 p-10 sm:p-16 max-w-xl">
            <div className="text-2xl font-bold text-white mb-8 leading-tight">
              {t("title")}
            </div>
            <div className="space-y-4 text-white text-sm leading-relaxed">
              <div>
                <strong>{t("p1Head")}</strong> {t("p1")}
              </div>
              <div>
                <strong>{t("p2Head")}</strong> {t("p2")}
              </div>
              <div>
                <strong>{t("p3Head")}</strong> {t("p3")}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
