"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { locales, localeNames, type Locale } from "@/i18n/routing";

export default function AuthLangSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Locale>("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((r) => r.startsWith("NEXT_LOCALE="))
      ?.split("=")[1] as Locale | undefined;
    if (cookie && (locales as readonly string[]).includes(cookie)) {
      setCurrent(cookie);
    }
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function select(locale: Locale) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    setCurrent(locale);
    setOpen(false);
    window.location.reload();
  }

  return (
    <div ref={ref} className="relative flex justify-center">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-black transition-colors py-1.5 px-3 rounded-md hover:bg-white/10 dark:hover:bg-black/10 border border-gray-700 dark:border-gray-300"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4 shrink-0" />
        <span>{localeNames[current]}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-50 overflow-hidden py-1 max-h-60 overflow-y-auto">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => select(locale)}
              className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors text-left ${
                locale === current
                  ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
              }`}
            >
              <span>{localeNames[locale]}</span>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">{locale.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
