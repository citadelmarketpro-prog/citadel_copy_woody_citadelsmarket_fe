import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FadeUp, ZoomIn } from "./motion";

export default async function StocksSection() {
  const t = await getTranslations("stocksSection");

  const stocks = [
    { title: t("s1Title"), desc: t("s1Desc"), href: "/swing-trading" },
    { title: t("s2Title"), desc: t("s2Desc"), href: "/futures" },
    { title: t("s3Title"), desc: t("s3Desc"), href: "/option-trading" },
    { title: t("s4Title"), desc: t("s4Desc"), href: "#" },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-bold text-white mb-8">{t("title")}</h2>
        </FadeUp>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl list-none p-0 m-0">
          {stocks.map((item, i) => (
            <ZoomIn key={i} delay={0.08 * i}>
              <li>
                <Link
                  href={item.href}
                  className="block p-5 rounded-xl border border-[#333] bg-[#141414] hover:border-emerald-500 transition-colors no-underline"
                >
                  <div className="text-white font-semibold mb-2">{item.title}</div>
                  <p className="text-gray-400 text-sm leading-relaxed m-0">{item.desc}</p>
                </Link>
              </li>
            </ZoomIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
