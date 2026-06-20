import Image from "next/image";
import { FadeUp, ZoomIn } from "./motion";
import { getTranslations } from "next-intl/server";

const featureKeys = [
  { headKey: "f1Head", bodyKey: "f1Body" },
  { headKey: "f2Head", bodyKey: "f2Body" },
  { headKey: "f3Head", bodyKey: "f3Body" },
  { headKey: "f4Head", bodyKey: "f4Body" },
];

export default async function FeaturesSection() {
  const t = await getTranslations("features");
  return (
    <section className="py-14 sm:py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {featureKeys.map((f, i) => (
            <ZoomIn key={f.headKey} delay={0.08 * i}>
              <div>
                <h3 className="text-gray-900 font-extrabold text-lg mt-0 mb-2">{t(f.headKey as any)}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{t(f.bodyKey as any)}</p>
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
