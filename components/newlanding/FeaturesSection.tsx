import { FadeUp, ZoomIn } from "./motion";
import { getTranslations } from "next-intl/server";

export default async function FeaturesSection() {
  const t = await getTranslations("features");

  const features = [
    { head: t("f1Head"), body: t("f1Body") },
    { head: t("f2Head"), body: t("f2Body") },
    { head: t("f3Head"), body: t("f3Body") },
    { head: t("f4Head"), body: t("f4Body") },
  ];

  return (
    <section className="py-14 sm:py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {features.map((f, i) => (
            <ZoomIn key={i} delay={0.08 * i}>
              <div>
                <h3 className="text-gray-900 font-extrabold text-lg mt-0 mb-2">{f.head}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{f.body}</p>
              </div>
            </ZoomIn>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="mb-8">
            <h3 className="text-gray-900 font-extrabold text-lg mt-0 mb-2">
              {t("fundingHead")}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {t("fundingBody")}
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Scrolling payment strip */}
      <div className="overflow-hidden w-full h-28">
        <div className="animate-scroll-strip">
          {[0, 1, 2, 3].map((i) => (
            <img
              key={i}
              src="/sample-landing/strip-b.svg"
              alt=""
              className="h-28 w-auto flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
