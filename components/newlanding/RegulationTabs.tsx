"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const regulationIds = [
  { id: "SEC", flag: "/sample-landing/us.png", titleKey: "sec_title", bodyKey: "sec_body" },
];

export default function RegulationTabs() {
  const t = useTranslations("regulationsPage");
  const [active, setActive] = useState("SEC");
  const current = regulationIds.find((r) => r.id === active)!;

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {regulationIds.map((reg) => (
          <button
            key={reg.id}
            onClick={() => setActive(reg.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
              active === reg.id
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
            }`}
          >
            <Image
              src={reg.flag}
              alt={reg.id}
              width={24}
              height={24}
              className="w-6 h-6 rounded-full object-cover"
            />
            {reg.id}
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
          {current.id} {t("regulationLabel")}
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{t(current.titleKey)}</h3>
        <p className="text-gray-600 leading-relaxed">{t(current.bodyKey)}</p>

        <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
              Company Number
            </p>
            <p className="text-sm font-semibold text-gray-900">09851229</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
              Registration Number
            </p>
            <p className="text-sm font-semibold text-gray-900">116797</p>
          </div>
        </div>
      </div>
    </div>
  );
}
