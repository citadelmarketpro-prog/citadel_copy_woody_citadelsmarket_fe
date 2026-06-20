import { FadeUp, ZoomIn } from "./motion";
import { getTranslations } from "next-intl/server";

export default async function MirrorTradingSection() {
  const t = await getTranslations("mirrorTrading");

  const items = [
    { title: t("i1Title"), desc: t("i1Desc") },
    { title: t("i2Title"), desc: t("i2Desc") },
    { title: t("i3Title"), desc: t("i3Desc") },
    { title: t("i4Title"), desc: t("i4Desc") },
  ];

  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{t("title")}</h2>
        </FadeUp>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl list-none p-0 m-0">
          {items.map((item, i) => (
            <ZoomIn key={i} delay={0.08 * i}>
              <li className="p-5 rounded-xl border border-[#333] bg-[#141414] hover:border-emerald-500 hover:bg-emerald-600 transition-colors cursor-default group">
                <div className="text-white font-semibold mb-2">{item.title}</div>
                <p className="text-gray-400 group-hover:text-white text-sm leading-relaxed m-0 transition-colors">{item.desc}</p>
              </li>
            </ZoomIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
