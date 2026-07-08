"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DashboardNavbar from "@/components/main/DashboardNavbar";
import { Search, TrendingUp, TrendingDown, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { BACKEND_URL } from "@/lib/constants";

interface Stock {
  symbol: string;
  name: string;
  logo_url: string;
  category: string;
  price: string;
  change: string;
  change_percent: string;
  is_positive_change: boolean;
  is_featured: boolean;
}

type Tab = "all" | "stock" | "crypto" | "etf" | "indices";

const TABS: { key: Tab; label: string }[] = [
  { key: "all",     label: "All" },
  { key: "stock",   label: "Stocks" },
  { key: "crypto",  label: "Crypto" },
  { key: "etf",     label: "ETF" },
  { key: "indices", label: "Indices" },
];

const PAGE_SIZE = 12;

export default function StockListPage() {
  const router = useRouter();
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [page, setPage] = useState(1);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const markImgFailed = (sym: string) =>
    setFailedImages((prev) => new Set(prev).add(sym));

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/stocks/`);
      const data = await response.json();
      if (data.success) setStocks(data.stocks);
    } catch (err) {
      console.error("Error fetching stocks:", err);
    } finally {
      setLoading(false);
    }
  };

  // Reset to page 1 when tab or search changes
  useEffect(() => { setPage(1); }, [activeTab, searchQuery]);

  const filtered = useMemo(() => {
    let list = stocks;
    if (activeTab !== "all") list = list.filter((s) => s.category === activeTab);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (s) => s.symbol.toLowerCase().includes(q) || s.name.toLowerCase().includes(q)
      );
    }
    return list;
  }, [stocks, activeTab, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Tab counts
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: stocks.length };
    TABS.slice(1).forEach(({ key }) => {
      c[key] = stocks.filter((s) => s.category === key).length;
    });
    return c;
  }, [stocks]);

  return (
    <div className="min-h-screen bg-[#1a1f2e] dark:bg-gray-50 transition-colors pt-20">
      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-white dark:text-gray-900 mb-1">
            Markets
          </h1>
          <p className="text-gray-400 dark:text-gray-600">
            Live prices across stocks, crypto, ETFs, indices &amp; forex
          </p>
        </div>

        {/* Search */}
        <div className="mb-4 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by symbol or name…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#151922] dark:bg-white text-white dark:text-gray-900 rounded-lg border-2 border-gray-700 dark:border-gray-300 focus:border-green-500 focus:outline-none"
          />
        </div>

        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === key
                  ? "bg-green-500 text-white"
                  : "bg-[#151922] dark:bg-white text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-900 border border-gray-700 dark:border-gray-200"
              }`}
            >
              {label}
              {counts[key] > 0 && (
                <span
                  className={`text-xs rounded-full px-1.5 py-0.5 ${
                    activeTab === key
                      ? "bg-white/20 text-white"
                      : "bg-gray-700 dark:bg-gray-200 text-gray-300 dark:text-gray-600"
                  }`}
                >
                  {counts[key]}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-green-500 animate-spin" />
          </div>
        )}

        {/* Grid */}
        {!loading && paginated.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginated.map((stock) => (
              <div
                key={stock.symbol}
                onClick={() => router.push(`/stock/${stock.symbol}`)}
                className="bg-[#151922] dark:bg-white p-5 rounded-lg border border-gray-800 dark:border-gray-200 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 relative rounded-full overflow-hidden bg-gray-800 dark:bg-gray-100 flex-shrink-0">
                    {stock.logo_url && !failedImages.has(stock.symbol) ? (
                      <Image
                        src={stock.logo_url}
                        alt={stock.name}
                        fill
                        className="object-contain p-1"
                        unoptimized
                        onError={() => markImgFailed(stock.symbol)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 dark:text-gray-600 font-bold text-xs">
                        {stock.symbol.slice(0, 3)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white dark:text-gray-900 truncate">
                      {stock.symbol}
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
                      {stock.name}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    {stock.is_featured && (
                      <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                        Featured
                      </span>
                    )}
                    <span className="px-1.5 py-0.5 bg-gray-700/60 dark:bg-gray-100 text-gray-400 dark:text-gray-500 text-xs rounded capitalize">
                      {stock.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div className="text-xl font-bold text-white dark:text-gray-900">
                    {parseFloat(stock.price) > 0
                      ? `$${parseFloat(stock.price).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}`
                      : <span className="text-gray-500 text-sm">Price unavailable</span>
                    }
                  </div>
                  <div className="flex items-center gap-1">
                    {stock.is_positive_change ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stock.is_positive_change ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {stock.is_positive_change ? "+" : ""}
                      {parseFloat(stock.change_percent).toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && paginated.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 dark:text-gray-600 text-lg">
              {searchQuery ? "No results for your search" : `No ${activeTab === "all" ? "assets" : activeTab} added yet`}
            </p>
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 rounded-lg bg-[#151922] dark:bg-white border border-gray-700 dark:border-gray-200 text-gray-400 disabled:opacity-40 hover:border-green-500 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
              .reduce<(number | "…")[]>((acc, p, idx, arr) => {
                if (idx > 0 && (p as number) - (arr[idx - 1] as number) > 1) acc.push("…");
                acc.push(p);
                return acc;
              }, [])
              .map((p, i) =>
                p === "…" ? (
                  <span key={`ellipsis-${i}`} className="text-gray-500 px-1">…</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p as number)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                      page === p
                        ? "bg-green-500 text-white"
                        : "bg-[#151922] dark:bg-white border border-gray-700 dark:border-gray-200 text-gray-400 hover:border-green-500"
                    }`}
                  >
                    {p}
                  </button>
                )
              )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-2 rounded-lg bg-[#151922] dark:bg-white border border-gray-700 dark:border-gray-200 text-gray-400 disabled:opacity-40 hover:border-green-500 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <span className="text-gray-500 text-sm ml-2">
              {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
