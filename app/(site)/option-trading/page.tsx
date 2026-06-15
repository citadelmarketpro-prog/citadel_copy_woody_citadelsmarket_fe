import Image from "next/image";
import {
  Layers,
  PenLine,
  ArrowRightLeft,
} from "lucide-react";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const spreadHighlights = [
  {
    Icon: Layers,
    head: "What is an options spread?",
    body: "A spread is when you enter a position on two or more options contracts based on the same underlying stock — for example, buying options on a specific equity and also writing contracts on the same stock.",
  },
  {
    Icon: ArrowRightLeft,
    head: "Why use spreads?",
    body: "Spreads are used to either limit the risk involved with taking a position or to reduce the financial outlay required. Most options trading strategies involve the use of spreads.",
  },
];

export default function OptionTradingPage() {
  return (
    <div className="font-sans bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-72 sm:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/sample-landing/hero-bg.png')",
            backgroundPosition: "right center",
            backgroundSize: "500px",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          }}
        />
        <div className="absolute inset-0" style={{ background: darkGradient }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <FadeUp>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Options Trading</h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              Options give you the right — but not the obligation — to buy or sell a stock at a
              set price before a specified date, offering flexibility alongside managed risk.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Option Trading & Investing ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <FadeLeft className="flex-1 flex flex-col justify-center gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Options Trading</h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                Option Trading &amp; investing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When most people think of investment, they think of buying stocks on the stock market,
                and many are probably completely unaware of terms like options trading. Buying stocks
                and holding on to them with a view to making long-term gains is after all one of the
                more common investment strategies. It&apos;s also a perfectly sensible way to invest,
                providing you have some idea about which stocks you should be buying, or you use a
                broker that can offer advice and guidance on such matters.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This approach is known as a buy-and-hold strategy and can help you increase your
                wealth in the long run, but it doesn&apos;t provide much, if anything, in the way of
                short-term gains. These days, many investors are choosing to use a more active
                investment style in order to try and make more immediate returns on publicly listed
                stocks.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Thanks to the range of online brokers that enable investors to make transactions on
                stock exchanges with just a few clicks, it&apos;s relatively straightforward for
                investors to be more active if they wish to. There are many people that trade online
                on either a part-time or a full-time basis — buying and selling equities regularly to
                try and take advantage of shorter-term price fluctuations, often holding their
                purchases for just a few weeks, days, or even a couple of hours.
              </p>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 min-h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/pexels-tima-miroshnichenko-7567228.jpg"
                alt="Options trading"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Options Spreads ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Options Spreads</h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              What really makes trading options such an interesting way to invest is the ability to
              create options spreads — the seriously powerful tools in equity options trading.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {spreadHighlights.map((item, i) => (
              <ZoomIn key={item.head} delay={0.08 * i}>
                <div className="rounded-2xl bg-white border border-gray-100 p-8 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <item.Icon size={22} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base">{item.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
          <FadeUp>
            <div className="max-w-3xl space-y-5 text-gray-600 leading-relaxed">
              <p>
                There are many different types of spreads that you can create, and they can be used
                for many different reasons. Most commonly, they are used to either limit the risk
                involved with taking a position or reduce the financial outlay required with taking a
                position. Most options trading strategies involve the use of spreads. Some strategies
                can be very complicated, but there are also a number of fairly basic strategies that
                are easy to understand.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Selling & Writing Options ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <FadeLeft className="flex-1 flex flex-col gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Selling &amp; Writing Options
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                Two ways to sell stock options contracts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                There are basically two ways in which you can sell options contracts. First, if you
                have previously bought contracts and wish to realise your profits or cut your losses,
                you would sell them by placing a <strong>sell to close</strong> order. The order is
                named as such because you are closing your position by selling options contracts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You would usually use that order if the options you owned had gone up in value and
                you wanted to take your profits at that point, or if the options you owned had fallen
                in value and you wanted to exit your position before incurring any further losses on
                the underlying stock.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The other way you can sell options is by opening a short position and short-selling
                them. This is also known as <strong>writing options</strong>, because the process
                involves you writing new contracts to be sold in the market. When you do this you are
                taking on the obligation in the contract — if the holder chooses to exercise their
                option then you would have to sell them the underlying equity at the strike price (if
                a call option) or buy the underlying equity from them at the strike price (if a put
                option).
              </p>
              <p className="text-gray-600 leading-relaxed">
                Writing options is done by using the <strong>sell to open</strong> order, and you
                would receive a payment at the time of placing such an order. This is generally
                riskier than trading through buying and then selling, but there are profits to be made
                if you know what you are doing. You would usually place such an order if you believed
                the relevant underlying stock would not move in such a way that the holder would be
                able to exercise their option for a profit.
              </p>
            </FadeLeft>

            <FadeRight delay={0.1} className="flex-1 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-8 flex flex-col gap-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <PenLine size={22} className="text-emerald-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Quick Reference</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Sell to Close", desc: "Exit an existing long options position — realise profits or cut losses on a stock you own options on." },
                    { label: "Sell to Open", desc: "Write a new options contract, taking on an obligation against the underlying equity in exchange for a premium payment." },
                    { label: "Call Option", desc: "Gives the holder the right to buy the underlying stock at the agreed strike price before expiry." },
                    { label: "Put Option", desc: "Gives the holder the right to sell the underlying stock at the agreed strike price before expiry." },
                  ].map((item) => (
                    <li key={item.label} className="flex flex-col gap-1">
                      <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                      <span className="text-gray-600 text-sm leading-relaxed">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
