import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "./motion";

const footerCols = [
  {
    head: "Trades",
    links: [
      { label: "Swing Trading", href: "/swing-trading" },
      { label: "FX & Futures", href: "/futures" },
      { label: "Buy Options", href: "/option-trading" },
      { label: "Oil & Gas", href: "/oil-and-gas" },
    ],
  },
  {
    head: "Tools",
    links: [
      { label: "Option Copy Trading", href: "/option-trading" },
      { label: "FX & Advance Trading", href: "/advance-trading" },
      { label: "Buy Live Trading", href: "/live-trading" },
      { label: "Copy Trading", href: "/option-copy-trading" },
    ],
  },
  {
    head: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Insurance", href: "/insurance" },
      { label: "Demo Account", href: "/register" },
    ],
  },
  {
    head: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "System Status", href: "/system-status" },
      { label: "Latest market news", href: "/news" },
      { label: "Refer a Friend", href: "/referral" },
    ],
  },
  {
    head: "Legals",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "AML Policy", href: "#" },
      { label: "Regulations (SEC)", href: "#" },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer
      className="text-gray-400 text-xs"
      style={{
        background:
          "linear-gradient(229deg,rgb(75,75,75) 1.87%,rgb(10,10,10) 95.11%)",
      }}
    >
      <FadeUp>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-10 justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/logo_light.png"
                  alt="Citadels Market"
                  width={100}
                  height={36}
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>

            <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 flex-1 max-w-4xl">
              {footerCols.map((col) => (
                <div key={col.head}>
                  <h3 className="text-white text-base font-semibold mb-3">{col.head}</h3>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="text-gray-400 hover:text-white transition-colors text-xs no-underline"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-8 border border-[#383838] rounded-xl p-5">
            <div className="space-y-4 text-gray-400 text-xs leading-relaxed">
              <p>
                <strong>Risk Warning:</strong> CFDs are complex instruments and come with a high risk of losing money
                rapidly due to leverage. You should consider copying a Lead Trader we provide that understand how CFDs
                work without the risk of losing your money. Trading derivatives is risky. It isn&apos;t suitable for
                everyone but only suitable for Lead Traders; you could lose substantially more than your initial
                investment if you don&apos;t copy trades from Lead Traders.
              </p>
              <p>
                <strong>Citadels Market</strong> is a global financial services provider. Citadels Market is a
                registered trademark of the group, that operates among various entities.
              </p>
              <p>
                Citadels Market Limited is registered in Canada, registration number: 2023-00465. Registered
                address: Lower Mount Royal, AB T2T 5H7, Canada.
              </p>
              <p>
                Citadels Market Limited is registered in the United Kingdom, Company number 1054675. Registered
                address: 100 Pall Mall, St. James&apos;s London SW1Y 5NQ, United Kingdom.
              </p>
              <p>
                © 2025 This website and technology/platform services are owned and operated by Citadels Market
                Limited, with Registered address: 11264 Playa Court Culver City, California. SEC: (000-56441).
              </p>
            </div>
          </div>
        </div>
      </FadeUp>
    </footer>
  );
}
