"use client";

import { useEffect, useRef } from "react";
import { FadeUp } from "./motion";

function MarketOverviewWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || containerRef.current.querySelector("script")) return;
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: "660",
      tabs: [
        {
          title: "Stocks",
          symbols: [
            { s: "NASDAQ:AAPL",  d: "Apple" },
            { s: "NASDAQ:GOOGL", d: "Alphabet" },
            { s: "NASDAQ:MSFT",  d: "Microsoft" },
            { s: "NASDAQ:AMZN",  d: "Amazon" },
            { s: "NASDAQ:NVDA",  d: "NVIDIA" },
            { s: "NYSE:TSLA",    d: "Tesla" },
            { s: "NYSE:META",    d: "Meta" },
            { s: "NYSE:JPM",     d: "JPMorgan" },
          ],
          originalTitle: "Stocks",
        },
        {
          title: "Forex",
          symbols: [
            { s: "FX:EURUSD", d: "EUR/USD" },
            { s: "FX:GBPUSD", d: "GBP/USD" },
            { s: "FX:USDJPY", d: "USD/JPY" },
            { s: "FX:AUDUSD", d: "AUD/USD" },
            { s: "FX:USDCAD", d: "USD/CAD" },
          ],
          originalTitle: "Forex",
        },
        {
          title: "Crypto",
          symbols: [
            { s: "BINANCE:BTCUSDT",  d: "Bitcoin" },
            { s: "BINANCE:ETHUSDT",  d: "Ethereum" },
            { s: "BINANCE:SOLUSDT",  d: "Solana" },
            { s: "BINANCE:BNBUSDT",  d: "BNB" },
          ],
          originalTitle: "Crypto",
        },
      ],
    });
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} className="tradingview-widget-container w-full">
      <div className="tradingview-widget-container__widget" />
    </div>
  );
}

export default function StocksWidgetSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Live Market Overview</h2>
          <p className="text-gray-600 text-sm mb-8">
            Track real-time prices across stocks, forex, and crypto — all in one place.
          </p>
        </FadeUp>
        <div className="rounded-2xl overflow-hidden">
          <MarketOverviewWidget />
        </div>
      </div>
    </section>
  );
}
