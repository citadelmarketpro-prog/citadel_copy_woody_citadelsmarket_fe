export const MARKET_LOGOS: Record<string, string> = {
  // Stocks
  AAPL: "https://logo.clearbit.com/apple.com",
  TSLA: "https://logo.clearbit.com/tesla.com",
  NVDA: "https://logo.clearbit.com/nvidia.com",
  AMD: "https://logo.clearbit.com/amd.com",
  MSFT: "https://logo.clearbit.com/microsoft.com",
  GOOGL: "https://logo.clearbit.com/google.com",
  AMZN: "https://logo.clearbit.com/amazon.com",
  META: "https://logo.clearbit.com/meta.com",
  NFLX: "https://logo.clearbit.com/netflix.com",
  INTC: "https://logo.clearbit.com/intel.com",
  PLTR: "https://logo.clearbit.com/palantir.com",
  BA: "https://logo.clearbit.com/boeing.com",
  JPM: "https://logo.clearbit.com/jpmorganchase.com",
  BAC: "https://logo.clearbit.com/bankofamerica.com",
  WMT: "https://logo.clearbit.com/walmart.com",
  DIS: "https://logo.clearbit.com/disney.com",
  NKE: "https://logo.clearbit.com/nike.com",
  V: "https://logo.clearbit.com/visa.com",
  MA: "https://logo.clearbit.com/mastercard.com",
  PYPL: "https://logo.clearbit.com/paypal.com",
};

export const MARKET_NAMES: Record<string, string> = {
  AAPL: "Apple Inc.",
  TSLA: "Tesla Inc.",
  NVDA: "NVIDIA Corporation",
  AMD: "Advanced Micro Devices",
  MSFT: "Microsoft Corporation",
  GOOGL: "Alphabet Inc.",
  AMZN: "Amazon.com Inc.",
  META: "Meta Platforms Inc.",
  NFLX: "Netflix Inc.",
  INTC: "Intel Corporation",
  PLTR: "Palantir Technologies",
  SPY: "SPDR S&P 500 ETF",
  QQQ: "Invesco QQQ Trust",
  SPX: "S&P 500 Index",
  "XAU/USD": "Gold / US Dollar",
  "EUR/USD": "Euro / US Dollar",
  // ... add more as needed
};

export const getMarketLogo = (symbol: string): string | null => {
  return MARKET_LOGOS[symbol] || null;
};

export const getMarketName = (symbol: string): string => {
  return MARKET_NAMES[symbol] || symbol;
};


