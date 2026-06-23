"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const regulationIds = [
  { id: "SEC",     flag: "/sample-landing/us.png",  titleKey: "sec_title",     bodyKey: "sec_body"     },
  { id: "ASIC",    flag: "/sample-landing/au.png",  titleKey: "asic_title",    bodyKey: "asic_body"    },
  { id: "AUSTRAC", flag: "/sample-landing/au.png",  titleKey: "austrac_title", bodyKey: "austrac_body" },
  { id: "BaFin",   flag: "/sample-landing/de.png",  titleKey: "bafin_title",   bodyKey: "bafin_body"   },
  { id: "CIMA",    flag: "/sample-landing/ky.png",  titleKey: "cima_title",    bodyKey: "cima_body"    },
  { id: "ESCA",    flag: "/sample-landing/ae.png",  titleKey: "esca_title",    bodyKey: "esca_body"    },
  { id: "FSC",     flag: "/sample-landing/bvi.png", titleKey: "fsc_title",     bodyKey: "fsc_body"     },
  { id: "FMA",     flag: "/sample-landing/at.png",  titleKey: "fma_title",     bodyKey: "fma_body"     },
  { id: "MAS",     flag: "/sample-landing/MS.png",  titleKey: "mas_title",     bodyKey: "mas_body"     },
  { id: "TFG",     flag: "/sample-landing/cn.png",  titleKey: "tfg_title",     bodyKey: "tfg_body"     },
  { id: "VFSC",    flag: "/sample-landing/vu.png",  titleKey: "vfsc_title",    bodyKey: "vfsc_body"    },
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
      </div>
    </div>
  );
}
