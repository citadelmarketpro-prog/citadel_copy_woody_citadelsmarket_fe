import { getTranslations } from "next-intl/server";
import { FadeUp, FadeLeft, FadeRight } from "./motion";

export default async function TradingFingertipsSection() {
  const t = await getTranslations("tradingFingertips");

  return (
    <section className="py-14 sm:py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-bold text-white mb-2">{t("title")}</h2>
          <p className="text-gray-400 mb-8 text-sm">{t("subtitle")}</p>
        </FadeUp>
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-6 p-6 sm:p-8">
            <FadeLeft className="flex-1 text-gray-900">
              <h3 className="text-xl font-bold mb-4">
                {t("cardTitle")}
              </h3>
              <p className="text-sm leading-relaxed mb-3">{t("p1")}</p>
              <p className="text-sm leading-relaxed mb-3">{t("p2")}</p>
              <p className="text-sm leading-relaxed">{t("p3")}</p>
            </FadeLeft>
            <FadeRight delay={0.15} className="flex-1 flex items-center">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-lg"
              >
                <source src="/sample-landing/media/video.mp4" type="video/mp4" />
              </video>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
}
