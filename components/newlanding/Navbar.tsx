"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

type SimpleLink = { label: string; href: string };

type NavItem =
  | { label: string; href: string; dropdown?: undefined }
  | {
      label: string;
      href?: undefined;
      dropdown: { groups: { heading?: string; links: SimpleLink[] }[] };
    };

// Mirrors the footer's own link groups (components/newlanding/SiteFooter.tsx)
// so the navbar and footer never drift out of sync with each other.
const NAV_ITEMS: NavItem[] = [
  {
    label: "Trading",
    dropdown: {
      groups: [
        {
          heading: "Trades",
          links: [
            { label: "Swing Trading", href: "/swing-trading" },
            { label: "Futures", href: "/futures" },
            { label: "Buy Options", href: "/option-trading" },
            { label: "Oil & Gas", href: "/oil-and-gas" },
          ],
        },
        {
          heading: "Tools",
          links: [
            { label: "Option Copy Trading", href: "/option-trading" },
            { label: "Stock and Advance Trading", href: "/advance-trading" },
            { label: "Buy Live Trading", href: "/trading-live" },
            { label: "Copy Trading", href: "/option-copy-trading" },
          ],
        },
      ],
    },
  },
  {
    label: "Company",
    dropdown: {
      groups: [
        {
          links: [
            { label: "About us", href: "/about" },
            { label: "Insurance", href: "/insurance" },
            { label: "Demo Account", href: "/register" },
          ],
        },
      ],
    },
  },
  {
    label: "Support",
    dropdown: {
      groups: [
        {
          links: [
            { label: "Contact Us", href: "/contact" },
            { label: "System Status", href: "/system-status" },
            { label: "Latest market news", href: "/trade-news" },
            { label: "Refer a Friend", href: "/refer-a-friend" },
            { label: "FAQ", href: "/faq" },
          ],
        },
      ],
    },
  },
  {
    label: "Legal",
    dropdown: {
      groups: [
        {
          links: [
            { label: "Terms & Conditions", href: "/terms-and-condition" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "AML Policy", href: "/aml-policy" },
            { label: "Regulations (SEC)", href: "/regulations" },
          ],
        },
      ],
    },
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="sticky top-0 z-50 bg-cream-100 px-3 pt-2 sm:px-5 sm:pt-3">
      <header className="relative mx-auto max-w-[1320px] rounded-[28px] bg-olive-500/95 shadow-lg shadow-olive-900/20 backdrop-blur supports-[backdrop-filter]:bg-olive-500/90">
        <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-7">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-0.5">
            <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              Osaic
            </span>
            <span className="text-xl font-extrabold tracking-tight text-lime-300 sm:text-2xl">
              Markets
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHovered(item.label)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <button className="flex items-center gap-1 py-2 text-[15px] font-medium text-white/80 transition-colors hover:text-white">
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>

                  {hovered === item.label && (
                    <div className="absolute left-1/2 top-full z-10 w-max min-w-[220px] -translate-x-1/2 pt-3">
                      <div
                        className={`flex gap-8 rounded-2xl bg-white p-5 shadow-xl shadow-olive-900/15 ${
                          item.dropdown.groups.length > 1 ? "" : ""
                        }`}
                      >
                        {item.dropdown.groups.map((group, gi) => (
                          <div key={gi}>
                            {group.heading && (
                              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-olive-ink/40">
                                {group.heading}
                              </p>
                            )}
                            <ul className="flex flex-col gap-2">
                              {group.links.map((l) => (
                                <li key={l.label}>
                                  <Link
                                    href={l.href}
                                    className="whitespace-nowrap text-[14px] font-medium text-olive-ink/80 hover:text-olive-ink"
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[15px] font-medium text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-5 text-sm font-semibold text-olive-ink transition-transform hover:scale-[1.03]"
            >
              Log in <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/register"
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-olive-ink px-5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Get started for free <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-olive-ink/40 backdrop-blur-sm lg:hidden">
          <div className="mx-3 mt-3 max-h-[85vh] overflow-y-auto rounded-[28px] bg-cream-100 p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-0.5" onClick={() => setMobileOpen(false)}>
                <span className="text-xl font-extrabold tracking-tight text-olive-ink">Osaic</span>
                <span className="text-xl font-extrabold tracking-tight text-olive-600">Markets</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-olive-ink/10 text-olive-ink"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="border-b border-olive-ink/5">
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-olive-ink/90 hover:bg-olive-ink/5"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="flex flex-col gap-4 px-3 pb-4">
                        {item.dropdown.groups.map((group, gi) => (
                          <div key={gi}>
                            {group.heading && (
                              <p className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-olive-ink/40">
                                {group.heading}
                              </p>
                            )}
                            <div className="flex flex-col gap-1">
                              {group.links.map((l) => (
                                <Link
                                  key={l.label}
                                  href={l.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="rounded-lg px-2 py-2 text-sm text-olive-ink/75 hover:bg-olive-ink/5"
                                >
                                  {l.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-medium text-olive-ink/90 hover:bg-olive-ink/5"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full border border-olive-ink/15 bg-white text-sm font-semibold text-olive-ink"
              >
                Log in
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full bg-olive-ink text-sm font-semibold text-white"
              >
                Get started for free
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
