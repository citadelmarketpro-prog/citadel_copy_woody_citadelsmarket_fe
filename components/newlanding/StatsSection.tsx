import Image from "next/image";
import { Globe2, Users, ArrowLeftRight, Wallet, RefreshCw } from "lucide-react";
import { ZoomIn } from "./motion";
import { getTranslations } from "next-intl/server";

const stats = [
  { icon: <Users className="w-7 h-7 text-emerald-400" />, head: "1M+", descKey: "traderAccounts", bg: "bg-[#111]" },
  { icon: <ArrowLeftRight className="w-7 h-7 text-emerald-400" />, head: "30M+", descKey: "monthlyTransactions", bg: "bg-[#0a0a0a]" },
  { icon: <Wallet className="w-7 h-7 text-emerald-400" />, head: "$16M+", descKey: "avgMonthlyPayouts", bg: "bg-[#0a0a0a]" },
  { icon: <RefreshCw className="w-7 h-7 text-emerald-400" />, head: "$211M", descKey: "monthlyTradeTurnover", bg: "bg-[#111]" },
];

export default async function StatsSection() {
  const t = await getTranslations("stats");
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Large card */}
          <ZoomIn className="col-span-2 lg:row-span-2">
            <div className="relative rounded-2xl overflow-hidden min-h-[260px] h-full bg-[#0d1829]">
              <Image
                src="/sample-landing/960.webp"
                alt="World map"
                fill
                className="object-cover opacity-60"
              />
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full min-h-[260px]">
                <Globe2 className="w-7 h-7 text-emerald-400 mb-4" />
                <div className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                  {t("countriesTitle")}
                </div>
                <p className="text-gray-300 text-sm mt-3 max-w-xs">
                  {t("countriesDesc")}
                </p>
              </div>
            </div>
          </ZoomIn>

          {/* 4 stat cards */}
          {stats.map((s, i) => (
            <ZoomIn key={s.head} delay={0.08 * (i + 1)}>
              <div className={`${s.bg} rounded-2xl p-6 flex flex-col justify-between min-h-[160px]`}>
                {s.icon}
                <div>
                  <div className="text-3xl font-extrabold text-white">{s.head}</div>
                  <p className="text-gray-400 text-sm mt-1">{t(s.descKey as any)}</p>
                </div>
              </div>
            </ZoomIn>
          ))}

        </div>
      </div>
    </section>
  );
}
