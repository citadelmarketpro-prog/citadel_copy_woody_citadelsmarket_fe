"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Loader2,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Briefcase,
  History,
  X,
  AlertCircle,
  BarChart3,
} from "lucide-react";
import { toast } from "sonner";
import DashboardNavbar from "@/components/main/DashboardNavbar";
import { BACKEND_URL } from "@/lib/constants";
import { PulseLoader } from "react-spinners";

// ==================== HELPER FUNCTIONS ====================

// Get appropriate icon/emoji for different market types
const getMarketIcon = (market: string) => {
  // Forex pairs
  if (market.includes("/")) {
    if (market.includes("XAU") || market.includes("XAG")) {
      return "🥇"; // Gold/Silver
    }
    return "💱"; // Currency exchange
  }

  // Indices
  const indices = ["SPX", "NDX", "DJI", "RUT"];
  if (indices.includes(market)) {
    return "📊";
  }

  // ETFs
  const etfs = ["SPY", "QQQ", "DIA", "IWM", "VOO"];
  if (etfs.includes(market)) {
    return "📈";
  }

  // Commodities
  const commodities = ["OIL", "BRENT", "NATGAS"];
  if (commodities.includes(market)) {
    return "🛢️";
  }

  // Crypto
  if (
    market.includes("BTC") ||
    market.includes("ETH") ||
    market.includes("BNB")
  ) {
    return "₿";
  }

  // Default to first letter for stocks
  return market.substring(0, 1).toUpperCase();
};

// Get gradient colors based on market type
const getMarketGradient = (market: string) => {
  if (market.includes("/")) {
    if (market.includes("XAU") || market.includes("XAG")) {
      return "from-yellow-500 to-yellow-700"; // Gold/Silver
    }
    return "from-blue-500 to-blue-700"; // Forex
  }

  const indices = ["SPX", "NDX", "DJI", "RUT"];
  if (indices.includes(market)) {
    return "from-purple-500 to-purple-700"; // Indices
  }

  const etfs = ["SPY", "QQQ", "DIA", "IWM", "VOO"];
  if (etfs.includes(market)) {
    return "from-green-500 to-green-700"; // ETFs
  }

  const commodities = ["OIL", "BRENT", "NATGAS"];
  if (commodities.includes(market)) {
    return "from-orange-500 to-orange-700"; // Commodities
  }

  if (market.includes("BTC") || market.includes("ETH")) {
    return "from-amber-500 to-amber-700"; // Crypto
  }

  return "from-emerald-500 to-emerald-700"; // Stocks (default)
};

// ==================== TYPES ====================

// interface CopyTradeHistory {
//   id: number;
//   trader_name: string;
//   trader_username: string;
//   market: string;
//   market_name: string;
//   market_logo_url: string | null;
//   direction: "buy" | "sell";
//   duration: string;
//   amount: string;
//   entry_price: string;
//   exit_price: string | null;
//   profit_loss: string;
//   status: "open" | "closed";
//   opened_at: string;
//   closed_at: string | null;
//   reference: string;
//   time_ago: string;
//   is_profit: boolean;
// }

interface CopyTradeHistory {
  id: number;
  trader_name?: string;
  trader_username?: string;
  market: string;
  market_name: string;
  market_logo_url: string | null;
  direction: "buy" | "sell";
  duration: string;
  amount: string; // Trader's base amount
  user_amount_invested: string; // ✅ NEW: User's investment
  entry_price: string;
  exit_price: string | null;
  profit_loss_percent: string; // ✅ Changed: Now percentage
  user_profit_loss: string; // ✅ NEW: User's actual P/L
  status: "open" | "closed";
  opened_at: string;
  closed_at: string | null;
  reference: string;
  time_ago: string;
  is_profit: boolean;
}

interface CopyTradeSummary {
  open_trades: number;
  closed_trades: number;
  total_profit_loss: string;
}

interface Stock {
  id: number;
  symbol: string;
  name: string;
  price: string;
  logo_url: string;
}

interface Position {
  id: number;
  stock: Stock;
  shares: string;
  average_buy_price: string;
  total_invested: string;
  current_value: string;
  profit_loss: string;
  profit_loss_percent: string;
  opened_at: string;
  is_active: boolean;
  use_admin_profit?: boolean;
  admin_profit_loss?: string;
}

interface PositionSummary {
  total_invested: string;
  total_current_value: string;
  total_profit_loss: string;
  total_profit_loss_percent: string;
}

type TabType = "history" | "live-trading";

// ==================== SELL MODAL ====================

interface SellModalProps {
  position: Position;
  onClose: () => void;
  onSuccess: () => void;
}

function SellModal({ position, onClose, onSuccess }: SellModalProps) {
  const [shares, setShares] = useState("");
  const [processing, setProcessing] = useState(false);

  const availableShares = parseFloat(position.shares);
  const currentPrice = parseFloat(position.stock.price);
  const sharesToSell = parseFloat(shares) || 0;
  const totalInvested = parseFloat(position.total_invested);
  const averageBuyPrice = parseFloat(position.average_buy_price);

  let estimatedValue = 0;
  let costBasis = 0;
  let estimatedPL = 0;
  let plPercent = 0;

  if (position.use_admin_profit && position.admin_profit_loss) {
    const totalAdminPL = parseFloat(position.admin_profit_loss);
    const proportion = sharesToSell / availableShares;
    if (sharesToSell === availableShares) {
      estimatedValue = totalInvested + totalAdminPL;
      costBasis = totalInvested;
      estimatedPL = totalAdminPL;
    } else {
      costBasis = totalInvested * proportion;
      estimatedPL = totalAdminPL * proportion;
      estimatedValue = costBasis + estimatedPL;
    }
    plPercent = costBasis > 0 ? (estimatedPL / costBasis) * 100 : 0;
  } else {
    estimatedValue = sharesToSell * currentPrice;
    costBasis = sharesToSell * averageBuyPrice;
    estimatedPL = estimatedValue - costBasis;
    plPercent = costBasis > 0 ? (estimatedPL / costBasis) * 100 : 0;
  }

  const isProfitable = estimatedPL >= 0;

  const handleSell = async () => {
    if (!shares || parseFloat(shares) <= 0) {
      toast.error("Please enter a valid number of shares");
      return;
    }
    if (parseFloat(shares) > availableShares) {
      toast.error("You don't have enough shares");
      return;
    }
    setProcessing(true);
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`${BACKEND_URL}/stocks/sell/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ symbol: position.stock.symbol, shares }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        onSuccess();
      } else {
        toast.error(data.error || "Failed to sell stock");
      }
    } catch (error) {
      toast.error("An error occurred while selling stock");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="bg-[#151922] dark:bg-white rounded-xl w-full max-w-md p-4 sm:p-6 border border-slate-700/50 dark:border-slate-200 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white dark:text-gray-900">
            Sell {position.stock.symbol}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-700/50"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          </button>
        </div>

        {/* Warning */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex items-start gap-2 sm:gap-3">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-red-400">
              This action will sell your shares at the current market price.
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 space-y-2 sm:space-y-3">
          <div className="flex justify-between text-sm sm:text-base">
            <span className="text-gray-400">Current Price</span>
            <span className="font-semibold text-white">
              ${currentPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <span className="text-gray-400">Available</span>
            <span className="font-semibold text-white">
              {availableShares.toFixed(4)}
            </span>
          </div>
        </div>

        {/* Input */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-gray-400 text-xs sm:text-sm mb-2">
            Shares to Sell
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={shares}
              onChange={(e) => setShares(e.target.value)}
              placeholder="0.0000"
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-slate-800/50 text-white rounded-lg border border-slate-700/50 focus:border-emerald-500 focus:outline-none"
            />
            <button
              onClick={() => setShares(position.shares)}
              className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-slate-700 text-white rounded-lg font-medium"
            >
              Max
            </button>
          </div>
        </div>

        {/* Summary */}
        {sharesToSell > 0 && (
          <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex justify-between mb-2 text-sm sm:text-base">
              <span className="text-gray-400">You Receive</span>
              <span className="font-bold text-white text-base sm:text-lg">
                ${estimatedValue.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-gray-400">P/L</span>
              <span
                className={`font-semibold ${
                  isProfitable ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {isProfitable ? "+" : ""}${estimatedPL.toFixed(2)} (
                {plPercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 sm:py-3 text-sm sm:text-base bg-slate-700 text-white rounded-lg font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSell}
            disabled={processing || !shares || parseFloat(shares) <= 0}
            className="flex-1 py-2.5 sm:py-3 text-sm sm:text-base bg-red-500 hover:bg-red-600 disabled:bg-gray-600 text-white rounded-lg font-medium flex items-center justify-center gap-2"
          >
            {processing ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {processing ? "Selling..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== MAIN COMPONENT ====================

export default function TradingDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("history");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // History (formerly Copy Trading)
  const [copyTradeStatus, setCopyTradeStatus] = useState<"open" | "closed">(
    "closed",
  );
  const [copyTrades, setCopyTrades] = useState<CopyTradeHistory[]>([]);
  const [copyTradeSummary, setCopyTradeSummary] =
    useState<CopyTradeSummary | null>(null);
  const [expandedCopyTrade, setExpandedCopyTrade] = useState<number | null>(
    null,
  );

  // Live Trading (formerly Positions)
  const [positions, setPositions] = useState<Position[]>([]);
  const [positionSummary, setPositionSummary] =
    useState<PositionSummary | null>(null);
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);
  const [sellModalPosition, setSellModalPosition] = useState<Position | null>(
    null,
  );

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    if (activeTab === "history") fetchCopyTrades();
  }, [copyTradeStatus, activeTab]);

  const fetchAllData = async () => {
    setLoading(true);
    await Promise.all([fetchPositions(), fetchCopyTrades()]);
    setLoading(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchAllData();
    setRefreshing(false);
    toast.success("Data refreshed successfully");
  };

  const fetchPositions = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) return;
      const res = await fetch(
        `${BACKEND_URL}/stocks/positions/list/?active_only=true`,
        {
          headers: { Authorization: `Token ${token}` },
        },
      );
      const data = await res.json();
      if (data.success) {
        setPositions(data.positions);
        setPositionSummary(data.summary);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchCopyTrades = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) return;
      const res = await fetch(`${BACKEND_URL}/copy-trade-history/`, {
        headers: { Authorization: `Token ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setCopyTrades(data.history);
        setCopyTradeSummary(data.summary);
      }
    } catch (e) {
      console.error(e);
    }
  };


  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const stats = {
    totalPositions: positions.length,
    closedTrades: copyTradeSummary?.closed_trades || 0,
    openTrades: copyTradeSummary?.open_trades || 0,
    overallPL:
      (positionSummary ? parseFloat(positionSummary.total_profit_loss) : 0) +
      (copyTradeSummary ? parseFloat(copyTradeSummary.total_profit_loss) : 0),
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0e17] dark:bg-slate-50">
        <DashboardNavbar />
        <div className="flex justify-center items-center h-[calc(100vh-80px)]">
          <PulseLoader color="#10b981" size={12} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] dark:bg-slate-50 text-slate-100 dark:text-slate-900">
      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 pt-16 sm:pt-20 lg:pt-24">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Trading Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              View your trade history and active positions
            </p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs sm:text-sm font-medium transition-all disabled:opacity-50"
          >
            <RefreshCw
              className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
            />
            <span>{refreshing ? "Refreshing..." : "Refresh"}</span>
          </button>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
          {/* Live Positions */}
          <div className="bg-slate-800/60 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-3 sm:p-4 lg:p-5">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/10">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Live Positions
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-bold">
              {stats.totalPositions}
            </div>
          </div>

          {/* Closed Trades */}
          <div className="bg-slate-800/60 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-3 sm:p-4 lg:p-5">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10">
                <History className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Closed Trades
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-bold">
              {stats.closedTrades}
            </div>
          </div>

          {/* Open Trades */}
          <div className="bg-slate-800/60 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-3 sm:p-4 lg:p-5">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/10">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Open Trades
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-bold">
              {stats.openTrades}
            </div>
          </div>

          {/* P/L */}
          <div className="bg-slate-800/60 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-3 sm:p-4 lg:p-5">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div
                className={`p-1.5 sm:p-2 rounded-lg ${
                  stats.overallPL >= 0 ? "bg-emerald-500/10" : "bg-red-500/10"
                }`}
              >
                {stats.overallPL >= 0 ? (
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                )}
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Total P/L
              </span>
            </div>
            <div
              className={`text-xl sm:text-2xl font-bold ${
                stats.overallPL >= 0 ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {stats.overallPL >= 0 ? "+" : ""}$
              {Math.abs(stats.overallPL).toFixed(2)}
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="bg-slate-800/50 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-1 sm:p-1.5 mb-4 sm:mb-6">
          <div className="flex gap-1">
            {[
              { id: "history" as TabType, label: "History", icon: History },
              {
                id: "live-trading" as TabType,
                label: "Live Trading",
                icon: Briefcase,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50 dark:hover:bg-slate-100"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ========== HISTORY TAB ========== */}
        {activeTab === "history" && (
          <div className="space-y-3 sm:space-y-4">
            {/* Summary */}
            {copyTradeSummary && (
              <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                <div className="bg-slate-800/50 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-3 sm:p-4">
                  <div className="text-[10px] sm:text-xs text-slate-400 mb-1">
                    Open Trades
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-400">
                    {copyTradeSummary.open_trades}
                  </div>
                </div>
                <div className="bg-slate-800/50 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-3 sm:p-4">
                  <div className="text-[10px] sm:text-xs text-slate-400 mb-1">
                    Closed Trades
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {copyTradeSummary.closed_trades}
                  </div>
                </div>
                <div className="bg-slate-800/50 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-3 sm:p-4">
                  <div className="text-[10px] sm:text-xs text-slate-400 mb-1">
                    Total P/L
                  </div>
                  <div
                    className={`text-lg sm:text-xl font-bold ${
                      parseFloat(copyTradeSummary.total_profit_loss) >= 0
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {parseFloat(copyTradeSummary.total_profit_loss) >= 0
                      ? "+"
                      : ""}
                    ${parseFloat(copyTradeSummary.total_profit_loss).toFixed(2)}
                  </div>
                </div>
              </div>
            )}

            {/* Empty */}
            {copyTrades.length === 0 ? (
              <div className="bg-slate-800/50 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-8 sm:p-12 text-center">
                <History className="w-12 h-12 sm:w-16 sm:h-16 text-slate-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-xl font-semibold mb-2">
                  No {copyTradeStatus} trades
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Your {copyTradeStatus} trades will appear here
                </p>
              </div>
            ) : (
              /* Trade Cards */
              <div className="space-y-2 sm:space-y-3">
                {copyTrades.map((trade) => {
                  // ✅ Use user-specific profit/loss values
                  const userPL = parseFloat(trade.user_profit_loss);
                  const plPercent = parseFloat(trade.profit_loss_percent);
                  const isProfitable = userPL >= 0;
                  const userInvestment = parseFloat(trade.user_amount_invested);

                  return (
                    <div
                      key={trade.id}
                      className="bg-slate-800/50 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl overflow-hidden"
                    >
                      {/* Main Card */}
                      <div
                        onClick={() =>
                          setExpandedCopyTrade(
                            expandedCopyTrade === trade.id ? null : trade.id,
                          )
                        }
                        className="p-4 sm:p-5 cursor-pointer hover:bg-slate-700/30 dark:hover:bg-slate-50 transition-colors"
                      >
                        {/* Top Row: Logo, Symbol/Name, Status */}
                        <div className="flex items-center justify-between mb-4 gap-3">
                          {/* Logo & Info */}
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            {/* Company Logo with Fallback */}
                            <div
                              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 flex items-center justify-center relative bg-gradient-to-br ${getMarketGradient(
                                trade.market,
                              )}`}
                            >
                              {trade.market_logo_url ? (
                                <img
                                  src={trade.market_logo_url}
                                  alt={trade.market}
                                  className="w-full h-full object-contain p-2 bg-white rounded-xl absolute inset-0"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                  }}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                                  {getMarketIcon(trade.market)}
                                </div>
                              )}
                            </div>

                            {/* Symbol & Name */}
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-base sm:text-lg mb-0.5">
                                {trade.market}
                              </div>
                              <div className="text-xs sm:text-sm text-slate-400 truncate">
                                {trade.market_name}
                              </div>
                            </div>
                          </div>

                          {/* Status Badge */}
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                              trade.status === "open"
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-slate-600/50 text-slate-300"
                            }`}
                          >
                            {trade.status === "open" ? "Live" : "Closed"}
                          </span>
                        </div>

                        {/* Trade Details Grid */}
                        <div className="space-y-3">
                          {/* Date */}
                          <div className="flex justify-between items-center">
                            <span className="text-xs sm:text-sm text-slate-400">
                              Date:
                            </span>
                            <span className="text-sm sm:text-base font-medium">
                              {formatDate(trade.opened_at)}
                            </span>
                          </div>

                          {/* ✅ NEW: Your Investment */}
                          <div className="flex justify-between items-center">
                            <span className="text-xs sm:text-sm text-slate-400">
                              Your Investment:
                            </span>
                            <span className="text-sm sm:text-base font-semibold">
                              $
                              {userInvestment.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </div>

                          {/* Entry Price */}
                          <div className="flex justify-between items-center">
                            <span className="text-xs sm:text-sm text-slate-400">
                              Entry Price:
                            </span>
                            <span className="text-sm sm:text-base font-semibold">
                              $
                              {parseFloat(trade.entry_price).toLocaleString(
                                undefined,
                                {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                },
                              )}
                            </span>
                          </div>

                          {/* ✅ UPDATED: Your P/L (Dollar Amount) */}
                          <div className="flex justify-between items-center">
                            <span className="text-xs sm:text-sm text-slate-400">
                              Your P/L:
                            </span>
                            <span
                              className={`text-lg sm:text-xl font-bold ${
                                isProfitable
                                  ? "text-emerald-400"
                                  : "text-red-400"
                              }`}
                            >
                              {isProfitable ? "+" : ""}$
                              {Math.abs(userPL).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </div>

                          {/* P/L Percentage */}
                          <div className="flex justify-between items-center">
                            <span className="text-xs sm:text-sm text-slate-400">
                              P/L %:
                            </span>
                            <span
                              className={`inline-block px-4 py-1.5 rounded-lg text-base sm:text-lg font-bold ${
                                isProfitable
                                  ? "bg-emerald-500/20 text-emerald-400"
                                  : "bg-red-500/20 text-red-400"
                              }`}
                            >
                              {isProfitable ? "+" : ""}
                              {plPercent.toFixed(2)}%
                            </span>
                          </div>

                          {/* Status */}
                          <div className="flex justify-between items-center pt-2 border-t border-slate-700/50 dark:border-slate-200">
                            <span className="text-xs sm:text-sm text-slate-400">
                              Status:
                            </span>
                            <span className="text-sm sm:text-base font-medium">
                              {trade.status === "open"
                                ? "Live Trade"
                                : "Closed Trade"}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-4 flex items-center justify-between">
                          <button
                            className="text-xs sm:text-sm text-slate-400 hover:text-white dark:hover:text-slate-900 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {expandedCopyTrade === trade.id ? (
                              <div className="flex items-center gap-1">
                                <span>Less details</span>
                                <ChevronUp className="w-4 h-4" />
                              </div>
                            ) : (
                              <div className="flex items-center gap-1">
                                <span>More details</span>
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            )}
                          </button>

                        </div>
                      </div>

                      {/* Expanded Details */}
                      {expandedCopyTrade === trade.id && (
                        <div className="border-t border-slate-700/50 dark:border-slate-200 p-4 sm:p-5 bg-slate-900/50 dark:bg-slate-50">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-xs text-slate-400 mb-1">
                                Direction
                              </div>
                              <div
                                className={`text-sm font-semibold ${
                                  trade.direction === "buy"
                                    ? "text-emerald-400"
                                    : "text-red-400"
                                }`}
                              >
                                {trade.direction.toUpperCase()}
                              </div>
                            </div>

                            <div>
                              <div className="text-xs text-slate-400 mb-1">
                                Trader&apos;s Amount
                              </div>
                              <div className="text-sm font-semibold">
                                $
                                {parseFloat(trade.amount).toLocaleString(
                                  undefined,
                                  {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 6,
                                  },
                                )}
                              </div>
                            </div>

                            <div>
                              <div className="text-xs text-slate-400 mb-1">
                                Duration
                              </div>
                              <div className="text-sm font-semibold">
                                {trade.duration}
                              </div>
                            </div>

                            {trade.exit_price && (
                              <div>
                                <div className="text-xs text-slate-400 mb-1">
                                  Exit Price
                                </div>
                                <div className="text-sm font-semibold">
                                  $
                                  {parseFloat(trade.exit_price).toLocaleString(
                                    undefined,
                                    {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    },
                                  )}
                                </div>
                              </div>
                            )}

                            <div>
                              <div className="text-xs text-slate-400 mb-1">
                                Reference
                              </div>
                              <div className="text-xs font-mono bg-slate-800 dark:bg-white px-2 py-1 rounded break-all">
                                {trade.reference}
                              </div>
                            </div>
                          </div>

                          {/* ✅ NEW: Investment Breakdown */}
                          <div className="mt-4 pt-4 border-t border-slate-700/50 dark:border-slate-200">
                            <div className="text-xs text-slate-400 mb-2">
                              Your Investment Breakdown
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-slate-800/50 dark:bg-slate-100 p-3 rounded-lg">
                                <div className="text-xs text-slate-400 mb-1">
                                  Investment
                                </div>
                                <div className="text-base font-bold">
                                  ${userInvestment.toFixed(2)}
                                </div>
                              </div>
                              <div
                                className={`p-3 rounded-lg ${
                                  isProfitable
                                    ? "bg-emerald-500/10"
                                    : "bg-red-500/10"
                                }`}
                              >
                                <div className="text-xs text-slate-400 mb-1">
                                  Current Value
                                </div>
                                <div
                                  className={`text-base font-bold ${
                                    isProfitable
                                      ? "text-emerald-400"
                                      : "text-red-400"
                                  }`}
                                >
                                  ${(userInvestment + userPL).toFixed(2)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========== LIVE TRADING TAB ========== */}
        {activeTab === "live-trading" && (
          <div className="space-y-3 sm:space-y-4">
            {/* Summary */}
            {positionSummary && positions.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                <div className="bg-slate-800/50 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-3 sm:p-4">
                  <div className="text-[10px] sm:text-xs text-slate-400 mb-1">
                    Total Invested
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    ${parseFloat(positionSummary.total_invested).toFixed(2)}
                  </div>
                </div>
                <div className="bg-slate-800/50 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-3 sm:p-4">
                  <div className="text-[10px] sm:text-xs text-slate-400 mb-1">
                    Current Value
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    $
                    {parseFloat(positionSummary.total_current_value).toFixed(2)}
                  </div>
                </div>
                <div className="bg-slate-800/50 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-3 sm:p-4">
                  <div className="text-[10px] sm:text-xs text-slate-400 mb-1">
                    Unrealized P/L
                  </div>
                  <div
                    className={`text-lg sm:text-xl font-bold ${
                      parseFloat(positionSummary.total_profit_loss) >= 0
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {parseFloat(positionSummary.total_profit_loss) >= 0
                      ? "+"
                      : ""}
                    $
                    {Math.abs(
                      parseFloat(positionSummary.total_profit_loss),
                    ).toFixed(2)}
                    <span className="text-xs sm:text-sm ml-1">
                      (
                      {parseFloat(
                        positionSummary.total_profit_loss_percent,
                      ).toFixed(2)}
                      %)
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Empty State */}
            {positions.length === 0 ? (
              <div className="bg-slate-800/50 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl p-8 sm:p-12 text-center">
                <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 text-slate-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-xl font-semibold mb-2">
                  No Active Positions
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-4 sm:mb-6">
                  Start trading to see your positions here
                </p>
                <button
                  onClick={() => router.push("/stock")}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-emerald-500 text-white rounded-xl text-sm font-medium hover:bg-emerald-600 transition-colors"
                >
                  Browse Stocks
                </button>
              </div>
            ) : (
              /* Positions List */
              <div className="space-y-2 sm:space-y-3">
                {positions
                  .filter((p) => p.stock?.symbol)
                  .map((pos) => {
                    const pl = parseFloat(pos.profit_loss || "0");
                    const plPct = parseFloat(pos.profit_loss_percent || "0");
                    const isPos = pl >= 0;

                    return (
                      <div
                        key={pos.id}
                        className="bg-slate-800/50 dark:bg-white border border-slate-700/50 dark:border-slate-200 rounded-xl overflow-hidden"
                      >
                        {/* Main Row */}
                        <div
                          onClick={() =>
                            setExpandedPosition(
                              expandedPosition === pos.id ? null : pos.id,
                            )
                          }
                          className="p-3 sm:p-4 cursor-pointer hover:bg-slate-700/30 dark:hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-center gap-3 sm:gap-4">
                            {/* Logo */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-white flex-shrink-0">
                              {pos.stock.logo_url ? (
                                <Image
                                  src={pos.stock.logo_url}
                                  alt=""
                                  width={48}
                                  height={48}
                                  className="object-contain p-1.5 sm:p-2"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-600 text-sm sm:text-lg font-bold">
                                  {pos.stock.symbol?.charAt(0)}
                                </div>
                              )}
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="font-bold text-sm sm:text-base lg:text-lg">
                                  {pos.stock.symbol}
                                </span>
                                <span className="text-[10px] sm:text-xs text-slate-400">
                                  {parseFloat(pos.shares).toFixed(2)} shares
                                </span>
                              </div>
                              <div className="text-xs sm:text-sm text-slate-400 truncate">
                                {pos.stock.name}
                              </div>
                            </div>

                            {/* P/L */}
                            <div className="text-right flex-shrink-0">
                              <div
                                className={`text-sm sm:text-base lg:text-lg font-bold ${
                                  isPos ? "text-emerald-400" : "text-red-400"
                                }`}
                              >
                                {isPos ? "+" : ""}${Math.abs(pl).toFixed(2)}
                              </div>
                              <div
                                className={`text-[10px] sm:text-xs ${
                                  isPos
                                    ? "text-emerald-400/70"
                                    : "text-red-400/70"
                                }`}
                              >
                                {isPos ? "+" : ""}
                                {plPct.toFixed(2)}%
                              </div>
                            </div>

                            {/* Sell (desktop) */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSellModalPosition(pos);
                              }}
                              className="hidden sm:block px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-xs sm:text-sm font-medium hover:bg-red-500/20 transition-colors"
                            >
                              Sell
                            </button>

                            {/* Chevron */}
                            {expandedPosition === pos.id ? (
                              <ChevronUp className="w-5 h-5 text-slate-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-slate-400" />
                            )}
                          </div>

                          {/* Sell (mobile) */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSellModalPosition(pos);
                            }}
                            className="sm:hidden w-full mt-3 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-xs font-medium hover:bg-red-500/20 transition-colors"
                          >
                            Sell Order
                          </button>
                        </div>

                        {/* Expanded */}
                        {expandedPosition === pos.id && (
                          <div className="border-t border-slate-700/50 dark:border-slate-200 p-3 sm:p-4 bg-slate-900/50 dark:bg-slate-50">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                              <div>
                                <div className="text-[10px] sm:text-xs text-slate-400 mb-1">
                                  Avg Buy Price
                                </div>
                                <div className="text-sm sm:text-base font-semibold">
                                  $
                                  {parseFloat(pos.average_buy_price).toFixed(2)}
                                </div>
                              </div>
                              <div>
                                <div className="text-[10px] sm:text-xs text-slate-400 mb-1">
                                  Current Price
                                </div>
                                <div className="text-sm sm:text-base font-semibold">
                                  ${parseFloat(pos.stock.price).toFixed(2)}
                                </div>
                              </div>
                              <div>
                                <div className="text-[10px] sm:text-xs text-slate-400 mb-1">
                                  Total Invested
                                </div>
                                <div className="text-sm sm:text-base font-semibold">
                                  ${parseFloat(pos.total_invested).toFixed(2)}
                                </div>
                              </div>
                              <div>
                                <div className="text-[10px] sm:text-xs text-slate-400 mb-1">
                                  Current Value
                                </div>
                                <div className="text-sm sm:text-base font-semibold">
                                  ${parseFloat(pos.current_value).toFixed(2)}
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-700/50 dark:border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                              <span className="text-xs sm:text-sm text-slate-400">
                                Opened: {formatDate(pos.opened_at)}
                              </span>
                              <button
                                onClick={() =>
                                  router.push(`/stock/${pos.stock.symbol}`)
                                }
                                className="text-xs sm:text-sm text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
                              >
                                View Stock →
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sell Modal */}
      {sellModalPosition && (
        <SellModal
          position={sellModalPosition}
          onClose={() => setSellModalPosition(null)}
          onSuccess={() => {
            setSellModalPosition(null);
            fetchPositions();
          }}
        />
      )}
    </div>
  );
}
