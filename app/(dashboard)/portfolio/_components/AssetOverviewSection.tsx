"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";
import { BACKEND_URL } from "@/lib/constants";

type Period = "1d" | "1w" | "1m" | "3m" | "1y" | "all";

interface RawTrade {
  opened_at: string;
  user_profit_loss: string;
}

interface DataPoint {
  date: string;
  cumulative_pnl: number;
}

const PERIODS: { label: string; value: Period }[] = [
  { label: "1D", value: "1d" },
  { label: "1W", value: "1w" },
  { label: "1M", value: "1m" },
  { label: "3M", value: "3m" },
  { label: "1Y", value: "1y" },
  { label: "ALL", value: "all" },
];

const PERIOD_MS: Record<Exclude<Period, "all">, number> = {
  "1d": 1 * 24 * 60 * 60 * 1000,
  "1w": 7 * 24 * 60 * 60 * 1000,
  "1m": 30 * 24 * 60 * 60 * 1000,
  "3m": 90 * 24 * 60 * 60 * 1000,
  "1y": 365 * 24 * 60 * 60 * 1000,
};

function buildChartData(trades: RawTrade[], period: Period): DataPoint[] {
  const now = Date.now();
  const cutoff = period !== "all" ? now - PERIOD_MS[period] : 0;

  const daily: Record<string, number> = {};
  for (const t of trades) {
    const ts = new Date(t.opened_at).getTime();
    if (ts < cutoff) continue;
    const date = t.opened_at.slice(0, 10); // "YYYY-MM-DD"
    daily[date] = (daily[date] ?? 0) + parseFloat(t.user_profit_loss || "0");
  }

  let cumulative = 0;
  return Object.keys(daily)
    .sort()
    .map((date) => {
      cumulative += daily[date];
      return { date, cumulative_pnl: parseFloat(cumulative.toFixed(2)) };
    });
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  const val = payload[0].value;
  const isPos = val >= 0;
  return (
    <div className="bg-slate-900/95 border border-slate-700 rounded-lg px-3 py-2 shadow-xl">
      <p className="text-[10px] text-slate-400 mb-1">{label}</p>
      <p className={`text-sm font-bold font-mono ${isPos ? "text-emerald-400" : "text-red-400"}`}>
        {isPos ? "+" : ""}$
        {val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
    </div>
  );
}

function CustomActiveDot({ cx, cy, payload }: { cx?: number; cy?: number; payload?: DataPoint }) {
  const isPos = (payload?.cumulative_pnl ?? 0) >= 0;
  const color = isPos ? "#4ade80" : "#f87171";
  return (
    <g>
      <circle cx={cx} cy={cy} r={9} fill={color} fillOpacity={0.15} />
      <circle cx={cx} cy={cy} r={4} fill={color} stroke="#fff" strokeWidth={1.5} />
    </g>
  );
}

export default function AssetOverviewSection() {
  const [period, setPeriod] = useState<Period>("all");
  const [allTrades, setAllTrades] = useState<RawTrade[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const fetchTrades = useCallback(async () => {
    setLoading(true);
    setFetchError(false);
    try {
      const token = localStorage.getItem("authToken");
      const res = await fetch(`${BACKEND_URL}/copy-trade-history/?limit=1000`, {
        headers: { Authorization: `Token ${token}` },
      });
      if (!res.ok) { setFetchError(true); return; }
      const json = await res.json();
      if (json.success) {
        setAllTrades(json.history ?? []);
      } else {
        setFetchError(true);
      }
    } catch {
      setFetchError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchTrades(); }, [fetchTrades]);

  const data = useMemo(() => buildChartData(allTrades, period), [allTrades, period]);

  const totalPnl = data.length > 0 ? data[data.length - 1].cumulative_pnl : 0;
  const isPositive = totalPnl >= 0;
  const lineColor = isPositive ? "#4ade80" : "#f87171";
  const gradientId = isPositive ? "assetGrowthGreen" : "assetGrowthRed";

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + "T00:00:00");
    if (period === "1y" || period === "all") {
      return d.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
    }
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <section className="bg-slate-800/60 dark:bg-white border border-slate-700/40 dark:border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-100 dark:text-slate-900">
          Asset Growth
        </h2>
        <div className={`flex items-center gap-1.5 ${isPositive ? "text-emerald-400" : "text-red-400"}`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span className="text-sm font-bold font-mono">
            {isPositive ? "+" : "-"}$
            {Math.abs(totalPnl).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      <div className="h-48 sm:h-56 md:h-64 w-full">
        {loading ? (
          <div className="h-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : fetchError ? (
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <TrendingUp className="w-8 h-8 text-slate-600 dark:text-slate-400" />
            <p className="text-slate-500 dark:text-slate-400 text-sm text-center">Could not load chart data.</p>
            <button onClick={fetchTrades} className="text-xs text-emerald-400 hover:text-emerald-300 underline">
              Retry
            </button>
          </div>
        ) : data.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <TrendingUp className="w-8 h-8 text-slate-600 dark:text-slate-400" />
            <p className="text-slate-500 dark:text-slate-400 text-sm">No trade data for this period</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 4, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={lineColor} stopOpacity={0.25} />
                  <stop offset="95%" stopColor={lineColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.07)" vertical={false} />
              <XAxis
                dataKey="date"
                tickFormatter={formatDate}
                tick={{ fill: "#64748b", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                interval="preserveStartEnd"
              />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="cumulative_pnl"
                stroke={lineColor}
                strokeWidth={2.5}
                fill={`url(#${gradientId})`}
                activeDot={<CustomActiveDot />}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="flex items-center justify-center gap-1 mt-4 sm:mt-5">
        {PERIODS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setPeriod(value)}
            className={`px-2.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all ${
              period === value
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-300 dark:hover:text-slate-600 border border-transparent hover:border-slate-600 dark:hover:border-slate-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
