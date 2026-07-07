"use client";

import { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { BACKEND_URL } from "@/lib/constants";

type MarketKey = "Forex" | "Crypto" | "Stocks" | "Commodities";

interface AssetRow {
  symbol: string;
  bid: string;
  change: number;
}

type GroupedAssets = Partial<Record<MarketKey, AssetRow[]>>;

function formatChange(change: number): string {
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}%`;
}

export default function Sidebar({
  onSelectSymbol,
}: {
  onSelectSymbol: (symbol: string) => void;
}) {
  const [market, setMarket] = useState<MarketKey>("Forex");
  const [assets, setAssets] = useState<GroupedAssets>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URL}/assets/grouped/`)
      .then((r) => r.json())
      .then((data) => {
        setAssets(data as GroupedAssets);
      })
      .catch(() => {/* silently degrade */})
      .finally(() => setLoading(false));
  }, []);

  const rows: AssetRow[] = assets[market] ?? [];

  function tvSymbol(symbol: string): string {
    switch (market) {
      case "Forex":       return `FX:${symbol}`;
      case "Crypto":      return `CRYPTO:${symbol}`;
      case "Commodities": return `COMEX:${symbol}`;
      default:            return `NASDAQ:${symbol}`;
    }
  }

  return (
    <aside className="w-64 border-r bg-white flex flex-col">
      <div className="p-3">
        <Select
          value={market}
          onValueChange={(val) => setMarket(val as MarketKey)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Market" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Forex">Forex</SelectItem>
            <SelectItem value="Crypto">Crypto</SelectItem>
            <SelectItem value="Stocks">Stocks</SelectItem>
            <SelectItem value="Commodities">Commodities</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 overflow-y-auto">
        {loading && (
          <p className="text-xs text-gray-400 text-center py-4">Loading…</p>
        )}
        {!loading && rows.length === 0 && (
          <p className="text-xs text-gray-400 text-center py-4">No data</p>
        )}
        {rows.map((a) => (
          <div
            key={a.symbol}
            className="flex justify-between items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelectSymbol(tvSymbol(a.symbol))}
          >
            <span className="text-sm font-medium">{a.symbol}</span>
            <div className="flex flex-col items-end text-xs">
              <span>{parseFloat(a.bid).toFixed(5)}</span>
              <span className={a.change >= 0 ? "text-green-500" : "text-red-500"}>
                {formatChange(a.change)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
