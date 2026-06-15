import Link from "next/link";
import { FadeUp, ZoomIn } from "./motion";

const stocks = [
  {
    title: "Swing Trading",
    desc: "Swing trading is a style of trading that attempts to capture short- to medium-term gains in a stock (or any financial instrument) over a period of a few days to several weeks. Swing traders primarily use technical analysis to look for trading opportunities.",
    href: "/swing-trading",
  },
  {
    title: "Futures",
    desc: "Futures contracts also exist for bonds and even bitcoin. Some traders like trading futures because they can take a substantial position (the amount invested) while putting up a relatively small amount of cash. That gives them greater potential for leverage than just owning the securities directly.",
    href: "/futures",
  },
  {
    title: "Options",
    desc: "Buying stocks and holding on to them with a view to making long term gains is after all, one of the more common investment strategies. It's also a perfectly sensible way to invest, providing you have some idea about which stocks.",
    href: "/option-trading",
  },
  {
    title: "Oil and Gas",
    desc: "Trade oil and gas commodities with Citadel Pros Market — access global energy markets with competitive spreads and powerful trading tools.",
    href: "#",
  },
];

export default function StocksSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-bold text-white mb-8">Stocks</h2>
        </FadeUp>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl list-none p-0 m-0">
          {stocks.map((item, i) => (
            <ZoomIn key={item.title} delay={0.08 * i}>
              <li>
                <Link
                  href={item.href}
                  className="block p-5 rounded-xl border border-[#333] bg-[#141414] hover:border-emerald-500 transition-colors no-underline"
                >
                  <div className="text-white font-semibold mb-2">{item.title}</div>
                  <p className="text-gray-400 text-sm leading-relaxed m-0">{item.desc}</p>
                </Link>
              </li>
            </ZoomIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
