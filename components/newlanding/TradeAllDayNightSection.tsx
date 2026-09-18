import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FadeUp } from "./motion";

export default async function TradeAllDayNightSection() {
  const t = await getTranslations("tradeAllDay");

  const panels = [
    { title: t("dayTitle"), img: "/new_images/img_30.webp", textDark: true },
    { title: t("nightTitle"), img: "/new_images/img_14.webp", textDark: false },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2">
      {panels.map((p) => (
        <FadeUp key={p.title} className="relative h-[420px] sm:h-[480px] overflow-hidden">
          <Image src={p.img} alt={p.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 max-w-sm">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">{p.title}</h3>
            <p className="text-gray-100 text-sm sm:text-base mb-6">{t("subtitle")}</p>
            <Link
              href="/register"
              className="inline-block w-fit px-7 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-400 transition-colors no-underline"
            >
              {t("cta")}
            </Link>
          </div>
        </FadeUp>
      ))}
    </section>
  );
}
