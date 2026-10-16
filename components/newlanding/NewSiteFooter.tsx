import Link from "next/link";
import { Smartphone } from "lucide-react";
import { FadeUp } from "./motion";

const FOOTER_COLS = [
  {
    head: "Legal",
    links: [
      { label: "Terms Of Service", href: "/terms-and-condition" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "AML Policy", href: "/aml-policy" },
      { label: "Regulations", href: "/regulations" },
    ],
  },
  {
    head: "Features",
    links: [{ label: "AutoGuard™", href: "/option-copy-trading" }],
  },
  {
    head: "Learn",
    links: [
      { label: "System Status", href: "/system-status" },
      { label: "Trade News", href: "/trade-news" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    head: "About us",
    links: [{ label: "Company", href: "/about" }],
  },
  {
    head: "Partnerships",
    links: [
      { label: "Lead Traders", href: "/lead-traders" },
      { label: "Refer a Friend", href: "/refer-a-friend" },
      { label: "Insurance", href: "/insurance" },
    ],
  },
  {
    head: "Contact",
    links: [
      { label: "support@osaicmarkets.com", href: "mailto:support@osaicmarkets.com" },
    ],
  },
];

export default function NewSiteFooter() {
  return (
    <footer className="bg-cream-100 pt-16">
      <div className="mx-auto max-w-[1300px] px-6">
        <FadeUp className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_1fr]">
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-olive-ink/20">
              Osaic<span className="text-olive-ink/30">Markets</span>
            </span>
            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white p-5">
              <div className="min-w-0">
                <p className="text-[15px] font-bold leading-snug text-olive-ink">
                  Copytrade with OsaicMarkets
                </p>
                <button className="mt-3 inline-flex items-center gap-2 rounded-full bg-olive-ink px-4 py-2 text-[12px] font-semibold text-white">
                  <Smartphone className="h-3.5 w-3.5" />
                  Download App
                </button>
              </div>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.head}>
              <h3 className="text-[13px] font-bold text-olive-ink">{col.head}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-olive-ink/55 hover:text-olive-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </FadeUp>

        <div className="mt-14 border-t border-olive-ink/10 py-8 text-[11px] leading-relaxed text-olive-ink/50">
          <p className="mb-3">
            <strong>Risk Warning:</strong> CFDs are complex instruments and come
            with a high risk of losing money rapidly due to leverage. You
            should consider copying a Lead Trader we provide that understands
            how CFDs work without the risk of losing your money. Trading
            derivatives is risky. It isn&apos;t suitable for everyone but only
            suitable for Lead Traders; you could lose substantially more than
            your initial investment if you don&apos;t copy trades from Lead
            Traders.
          </p>
          <p className="mb-3">
            <strong>OsaicMarkets</strong> is a global financial services
            provider. OsaicMarkets is a registered trademark of the group,
            that operates among various entities.
          </p>
          <p className="mb-3">
            OsaicMarkets Limited is registered in Canada, registration
            number: 116797. Registered address: Lower Mount Royal, AB T2T 5H7,
            Canada.
          </p>
          <p className="mb-3">
            OsaicMarkets Limited is registered in the United Kingdom,
            Company number 09851229. Registered address: 100 Pall Mall, St.
            James&apos;s London SW1Y 5NQ, United Kingdom.
          </p>
          <p>
            &copy; {new Date().getFullYear()} This website and
            technology/platform services are owned and operated by
            OsaicMarkets Limited, with Registered address: 11264 Playa Court
            Culver City, California. SEC: (008-53574).
          </p>
        </div>
      </div>
    </footer>
  );
}
