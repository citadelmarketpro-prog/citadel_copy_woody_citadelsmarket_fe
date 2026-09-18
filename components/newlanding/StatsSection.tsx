"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeUp } from "./motion";

export default function StatsSection() {
  const t = useTranslations("stats");

  const stats = [
    { value: "1M+", label: t("traderAccounts") },
    { value: "30M+", label: t("monthlyTransactions") },
    { value: "$16M+", label: t("avgMonthlyPayouts") },
    { value: "$211M", label: t("monthlyTradeTurnover") },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % stats.length), 3000);
    return () => clearInterval(id);
  }, [stats.length]);

  const at = (offset: number) => stats[(index + offset + stats.length * 4) % stats.length];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
        <FadeUp>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">{t("headline")}</h2>
          <p className="text-gray-500 text-base sm:text-lg mb-10 lg:mb-14 max-w-md lg:max-w-none">{t("subtitle")}</p>
        </FadeUp>

        <div className="relative w-full lg:mx-auto lg:max-w-sm rounded-3xl bg-gray-50 px-8 py-10 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`top-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="text-2xl font-extrabold text-gray-300">{at(-1).value}</div>
              <p className="text-gray-300 text-xs mt-1">{at(-1).label}</p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={`mid1-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="text-5xl font-extrabold text-gray-900">{at(0).value}</div>
              <p className="text-gray-500 text-sm mt-1">{at(0).label}</p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={`bottom-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-2xl font-extrabold text-gray-300">{at(1).value}</div>
              <p className="text-gray-300 text-xs mt-1">{at(1).label}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
