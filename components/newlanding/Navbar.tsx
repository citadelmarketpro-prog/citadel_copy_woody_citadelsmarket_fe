"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import LangSwitcher from "./LangSwitcher";

const navItems = [
  {
    label: "Company",
    dropdown: {
      heading: "About",
      items: [
        { label: "About Us", sub: "Discover our story", href: "/about" },
        { label: "Insurance", sub: "Protect your investments", href: "/insurance" },
        { label: "Regulations", sub: "Compliance and security", href: "/regulations" },
        { label: "Lead Traders", sub: "Meet our top-performing traders", href: "/lead-traders" },
        { label: "Security", sub: "Your assets are protected", href: "/security" },
      ],
    },
  },
  {
    label: "Mirror trading",
    dropdown: {
      heading: "Trades",
      items: [
        { label: "Options copy trading", sub: "Copy top traders' options strategies", href: "/option-copy-trading" },
        { label: "Advanced trading account above PDT", sub: "Trade with higher limits and features", href: "/advance-trading" },
        { label: "Live trading interface", sub: "Real-time trading experience", href: "/trading-live" },
      ],
    },
  },
  {
    label: "Stocks",
    dropdown: {
      heading: "Stocks",
      items: [
        { label: "Swing trading", sub: "Short-term stock trading strategies", href: "/swing-trading" },
        { label: "Futures", sub: "Trade futures contracts", href: "/futures" },
        { label: "Options", sub: "Leverage options for flexibility", href: "/option-trading" },
        { label: "Oil and gas", sub: "Invest in energy sector assets", href: "/oil-and-gas" },
      ],
    },
  },
  { label: "Software", href: "/software" },
  { label: "Insight", href: "/insight" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="bg-[#0c5c45] sticky top-0 z-50 shadow-lg shadow-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo_light.png"
            alt="Citadels Market"
            width={180}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoveredNav(item.label)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-emerald-400 transition-colors py-2">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {hoveredNav === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-b-lg p-5 min-w-[520px] z-50 border-t-2 border-emerald-500">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-3">
                      {item.dropdown.heading}
                    </h4>
                    <ul className="grid grid-cols-3 gap-3 list-none p-0 m-0">
                      {item.dropdown.items.map((di) => (
                        <li key={di.label}>
                          <Link
                            href={di.href}
                            className="block p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors no-underline"
                          >
                            <span className="text-sm font-medium text-gray-800 block">{di.label}</span>
                            <span className="block text-xs text-gray-500 mt-0.5">{di.sub}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "/"}
                className="text-sm font-medium text-white/80 hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher />
          <Link
            href="/register"
            className="inline-flex items-center px-3 py-1.5 sm:px-5 sm:py-2 bg-white text-emerald-700 text-xs sm:text-sm font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Get Started
          </Link>
          <button
            className="md:hidden p-2 text-white/80"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a4f3b] border-t border-white/10 px-4 pb-6 space-y-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between py-3 text-sm font-medium text-white/80"
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpanded === item.label && (
                  <div className="pl-3 space-y-1 mb-2">
                    {item.dropdown.items.map((di) => (
                      <Link
                        key={di.label}
                        href={di.href}
                        className="block py-2 px-3 rounded-lg bg-white/10 text-sm text-white/80 no-underline"
                        onClick={() => setMobileOpen(false)}
                      >
                        {di.label}
                        <span className="block text-xs text-white/50">{di.sub}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "/"}
                className="block py-3 text-sm font-medium text-white/80 no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/register"
            className="block mt-3 text-center py-2.5 bg-white text-emerald-700 text-sm font-semibold rounded-lg no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="block mt-2 text-center py-2.5 border border-white/30 text-white text-sm font-semibold rounded-lg no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
