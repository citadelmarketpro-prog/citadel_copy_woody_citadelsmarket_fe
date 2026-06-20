import { FadeUp, FadeLeft, FadeRight } from "./motion";

export default function TradingFingertipsSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-bold text-white mb-2">Trading at your fingertips</h2>
          <p className="text-gray-400 mb-8 text-sm">New features, latest webinars and more...</p>
        </FadeUp>
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-6 p-6 sm:p-8">
            <FadeLeft className="flex-1 text-gray-900">
              <h3 className="text-xl font-bold mb-4">
                Powerful Trading Platforms to help you succeed
              </h3>
              <p className="text-sm leading-relaxed mb-3">
                Clients in over 185 countries and territories trade stocks, options, futures, currencies, bonds,
                funds and more on 150 global markets from a single unified platform.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                Spot opportunities and calibrate complete portfolio performance. Keep your performance track record
                with PortfolioAnalyst inception reporting and historical aggregation at no cost.
              </p>
              <p className="text-sm leading-relaxed">
                Our mission is to bring advanced portfolio analytics to everyone who needs them — both professionals
                and individuals. The best way to do that is to offer them at no cost, with no strings.
              </p>
            </FadeLeft>
            <FadeRight delay={0.15} className="flex-1 flex items-center">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-lg"
              >
                <source src="/sample-landing/media/video.mp4" type="video/mp4" />
              </video>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
}
