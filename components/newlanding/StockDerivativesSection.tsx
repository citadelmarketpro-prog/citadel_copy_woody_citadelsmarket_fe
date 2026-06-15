import { FadeUp } from "./motion";

export default function StockDerivativesSection() {
  return (
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeUp>
        <div
          className="relative rounded-2xl overflow-hidden flex flex-col lg:flex-row justify-between gap-10"
          style={{
            background: "url('/sample-landing/stock-cfds.jpeg') center/cover no-repeat",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 p-10 sm:p-16 max-w-xl">
            <div className="text-2xl font-bold text-white mb-8 leading-tight">
              Trade Stock derivatives:
            </div>
            <div className="space-y-4 text-white text-sm leading-relaxed">
              <div>
                <strong>Access a Wide Range of Instruments –</strong> Trade options, futures, and other stock
                derivatives across major global markets.
              </div>
              <div>
                <strong>Leverage Market Opportunities –</strong> Use derivatives to hedge, speculate, or enhance
                portfolio performance with strategic exposure.
              </div>
              <div>
                <strong>Advanced Tools &amp; Real-Time Data –</strong> Make informed decisions with powerful trading
                tools, analytics, and up-to-the-second market data.
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
