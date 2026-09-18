import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FadeUp } from "./motion";

export default async function BecomeProSection() {
  const t = await getTranslations("finalCta");

  return (
    <section className="relative py-16 sm:py-24 bg-red-500 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/front_images/woman-working-laptop.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-red-600/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-600/85 to-red-500/60" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
