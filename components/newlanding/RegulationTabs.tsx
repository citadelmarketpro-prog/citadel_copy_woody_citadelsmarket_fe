"use client";

import Image from "next/image";
import { useState } from "react";

const regulations = [
  {
    id: "SEC",
    flag: "/sample-landing/us.png",
    title: "Citadels Market USA",
    body: 'Citadels Market is authorised and regulated by the Securities & Exchange Commission ("SEC") with number 000-56441.',
  },
  {
    id: "ASIC",
    flag: "/sample-landing/au.png",
    title: "Citadels Market Australia",
    body: 'Citadels Market is authorised and regulated by the Australian Securities & Investments Commission ("ASIC") with AFSL number 416259.',
  },
  {
    id: "AUSTRAC",
    flag: "/sample-landing/au.png",
    title: "Citadels Market Digital PTY LTD (Australia)",
    body: "Citadels Market Digital Pty Ltd is licensed by ASIC as a Corporate Authorised Representative (AFS Representative Number 001285278) of Citadels Market Australia Pty Ltd (AFSL 416279) and is registered as a Digital Currency Exchange with AUSTRAC with Registration No. 100284469.",
  },
  {
    id: "BaFin",
    flag: "/sample-landing/de.png",
    title: "Citadels Market Asset Management (Germany)",
    body: 'Citadels Market Asset Management GmbH is authorised and regulated by the German Federal Financial Supervisory Authority ("BaFin") with license number HRB 73417.',
  },
  {
    id: "CIMA",
    flag: "/sample-landing/ky.png",
    title: "Citadels Market Atlantic Corporation",
    body: 'Citadels Market Atlantic Corporation is authorised and regulated by the Cayman Islands Monetary Authority ("CIMA") with license number 1811356.',
  },
  {
    id: "ESCA",
    flag: "/sample-landing/ae.png",
    title: "Citadels Market Global Financial Services LLC",
    body: "Citadels Market Global Financial Services LLC of the UAE is regulated by the Securities and Commodities Authority of the UAE, as a Category 1 Trading Broker for Over-the-Counter Derivatives Contracts and Foreign Exchange Spot Markets, under ESCA license number 20200000088.",
  },
  {
    id: "FSC",
    flag: "/sample-landing/bvi.png",
    title: "Citadels Market FX International",
    body: 'Citadels Market FX International Corporation is authorized and regulated by the Financial Services Commission of the British Virgin Islands ("FSC") with license number SIBA/L/14/1098.',
  },
  {
    id: "FMA",
    flag: "/sample-landing/at.png",
    title: "Citadels Market Austria",
    body: 'Citadels Market Asset Management GmbH – Austria branch is authorised and regulated by the Financial Markets Authority ("FMA") with license number 491179z.',
  },
  {
    id: "MAS",
    flag: "/sample-landing/MS.png",
    title: "Citadels Market Global Markets PTE. LTD",
    body: 'Citadels Market Global Markets PTE. LTD. is authorised and regulated by the Monetary Authority of Singapore ("MAS") with license number CMS101144.',
  },
  {
    id: "TFG",
    flag: "/sample-landing/cn.png",
    title: "Ikon Financial Services Corporation Ltd",
    body: 'Ikon Financial Services Corporation Ltd is regulated by the Tianjin Financial Government ("TFG") under the registration number 120000400164019.',
  },
  {
    id: "VFSC",
    flag: "/sample-landing/vu.png",
    title: "Citadels Market Pacific",
    body: 'Citadels Market Pacific (V) Ltd is authorised and regulated by the Vanuatu Financial Services Commission ("VFSC") with license number 700497.',
  },
];

export default function RegulationTabs() {
  const [active, setActive] = useState("SEC");
  const current = regulations.find((r) => r.id === active)!;

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {regulations.map((reg) => (
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
          {current.id} Regulation
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{current.title}</h3>
        <p className="text-gray-600 leading-relaxed">{current.body}</p>
      </div>
    </div>
  );
}
