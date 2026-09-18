import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FadeUp } from "./motion";

export default async function BecomeProSection() {
  const t = await getTranslations("finalCta");

  return (
    <section className="py-16 sm:py-24 bg-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">{t("title")}</h2>
          <p className="text-white/90 text-base sm:text-lg mb-8">{t("subtitle")}</p>
          <Link
            href="/register"
            className="inline-block px-8 py-3.5 bg-[#0a0a0a] text-white font-semibold rounded-full hover:bg-black transition-colors no-underline"
          >
            {t("cta")}
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
