"use client";

import { useEffect, useRef } from "react";

export default function StockMarketWidget() {
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
          title: "Crypto",
          symbols: [
            { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
            { s: "BINANCE:ETHUSDT", d: "Ethereum" },
            { s: "BINANCE:SOLUSDT", d: "Solana" },
            { s: "BINANCE:BNBUSDT", d: "BNB" },
            { s: "BINANCE:XRPUSDT", d: "XRP" },
            { s: "BINANCE:ADAUSDT", d: "Cardano" },
          ],
          originalTitle: "Crypto",
        },
        {
          title: "ETF",
          symbols: [
            { s: "AMEX:SPY", d: "S&P 500 ETF" },
            { s: "AMEX:QQQ", d: "Nasdaq 100 ETF" },
            { s: "AMEX:DIA", d: "Dow Jones ETF" },
            { s: "AMEX:IWM", d: "Russell 2000 ETF" },
            { s: "AMEX:GLD", d: "Gold ETF" },
            { s: "AMEX:SLV", d: "Silver ETF" },
          ],
          originalTitle: "ETF",
        },
        {
          title: "Forex",
          symbols: [
            { s: "FX:EURUSD", d: "EUR/USD" },
            { s: "FX:GBPUSD", d: "GBP/USD" },
            { s: "FX:USDJPY", d: "USD/JPY" },
            { s: "FX:AUDUSD", d: "AUD/USD" },
            { s: "FX:USDCAD", d: "USD/CAD" },
            { s: "FX:USDCHF", d: "USD/CHF" },
          ],
          originalTitle: "Forex",
        },
        {
          title: "Indices",
          symbols: [
            { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
            { s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
            { s: "FOREXCOM:DJI",    d: "Dow Jones" },
            { s: "INDEX:NKY",       d: "Nikkei 225" },
            { s: "INDEX:DEU40",     d: "DAX 40" },
            { s: "FOREXCOM:UKXGBP", d: "FTSE 100" },
          ],
          originalTitle: "Indices",
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
