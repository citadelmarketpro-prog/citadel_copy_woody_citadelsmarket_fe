"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowUpDown, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { BACKEND_URL } from "@/lib/constants";
import DashboardNavbar from "@/components/main/DashboardNavbar";

type Direction = "balance_to_profit" | "profit_to_balance";

interface TransferStatus {
  can_transfer: boolean;
  balance: number;
  profit: number;
}

export default function TransferPage() {
  const router = useRouter();

  const [status, setStatus] = useState<TransferStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState<Direction>("balance_to_profit");
  const [amount, setAmount] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // ── Fetch transfer status ──────────────────────────────────────────────────
  const fetchStatus = useCallback(async () => {
    const token = localStorage.getItem("authToken");
    if (!token) return;
    try {
      const res = await fetch(`${BACKEND_URL}/transfers/status/`, {
        headers: { Authorization: `Token ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setStatus(data);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  // ── Derived values ─────────────────────────────────────────────────────────
  const fromLabel = direction === "balance_to_profit" ? "Balance Account" : "Profit Account";
  const toLabel   = direction === "balance_to_profit" ? "Profit Account"  : "Balance Account";
  const fromBalance = direction === "balance_to_profit"
    ? (status?.balance ?? 0)
    : (status?.profit ?? 0);
  const toBalance = direction === "balance_to_profit"
    ? (status?.profit ?? 0)
    : (status?.balance ?? 0);

  const parsedAmount = parseFloat(amount) || 0;
  const afterTransfer = fromBalance - parsedAmount;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // ── Switch direction ───────────────────────────────────────────────────────
  const handleSwitch = () => {
    setDirection((d) =>
      d === "balance_to_profit" ? "profit_to_balance" : "balance_to_profit"
    );
    setAmount("");
  };

  // ── Max button ────────────────────────────────────────────────────────────
  const handleMax = () => {
    setAmount(fromBalance.toFixed(2));
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleConfirm = async () => {
    if (!status) return;

    if (!status.can_transfer) {
      toast.error(
        "You do not have this option yet. You have not reached the minimum threshold."
      );
      return;
    }

    if (parsedAmount <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }

    if (parsedAmount > fromBalance) {
      toast.error("Amount exceeds available balance.");
      return;
    }

    setSubmitting(true);
    try {
      const token = localStorage.getItem("authToken");
      const res = await fetch(`${BACKEND_URL}/transfers/execute/`, {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ direction, amount: parsedAmount }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(data.message || "Transfer successful!");
        setAmount("");
        // Refresh balances
        setStatus((prev) =>
          prev
            ? { ...prev, balance: data.balance, profit: data.profit }
            : prev
        );
      } else {
        toast.error(data.error || "Transfer failed. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Loading skeleton ───────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1f2e] dark:bg-gray-50 pt-20">
        <DashboardNavbar />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <RefreshCw className="w-6 h-6 text-emerald-400 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1f2e] dark:bg-gray-50 pt-20">
      <DashboardNavbar />

      <div className="max-w-md mx-auto px-4 py-8">
        {/* Back arrow + title */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full hover:bg-slate-700/50 dark:hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-300 dark:text-slate-700" />
          </button>
          <h1 className="text-xl font-bold text-white dark:text-slate-900">Transfer</h1>
        </div>

        {/* Card */}
        <div className="bg-[#141928] dark:bg-white rounded-2xl border border-slate-700/40 dark:border-slate-200 p-5 sm:p-6 space-y-5">
          {/* FROM */}
          <div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">From</p>
            <div className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-slate-800/70 dark:bg-slate-50 border border-slate-700/40 dark:border-slate-200">
              <span className="text-sm font-semibold text-white dark:text-slate-900">{fromLabel}</span>
              <span className="text-sm font-semibold text-slate-300 dark:text-slate-700">
                ${fmt(fromBalance)}
              </span>
            </div>
          </div>

          {/* SWITCH BUTTON */}
          <div className="flex justify-center -my-1">
            <button
              onClick={handleSwitch}
              className="w-10 h-10 rounded-full bg-slate-700 dark:bg-slate-100 border border-slate-600 dark:border-slate-200 hover:bg-emerald-600/20 hover:border-emerald-500 grid place-items-center transition-all duration-200"
            >
              <ArrowUpDown className="w-4 h-4 text-slate-300 dark:text-slate-700" />
            </button>
          </div>

          {/* TO */}
          <div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">To</p>
            <div className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-slate-800/70 dark:bg-slate-50 border border-slate-700/40 dark:border-slate-200">
              <span className="text-sm font-semibold text-white dark:text-slate-900">{toLabel}</span>
              <span className="text-sm font-semibold text-slate-300 dark:text-slate-700">
                ${fmt(toBalance)}
              </span>
            </div>
          </div>

          {/* AMOUNT INPUT */}
          <div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">Amount</p>
            <div className="flex items-center px-4 py-3.5 rounded-xl bg-slate-800/70 dark:bg-slate-50 border border-slate-700/40 dark:border-slate-200 focus-within:border-emerald-500/60 transition-colors">
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 bg-transparent text-sm text-white dark:text-slate-900 placeholder-slate-500 dark:placeholder-slate-400 outline-none"
              />
              <div className="flex items-center gap-3 ml-2">
                <button
                  onClick={handleMax}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Max
                </button>
                <span className="text-xs text-slate-400 dark:text-slate-500">USD</span>
              </div>
            </div>
          </div>

          {/* SUMMARY ROWS */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-400 dark:text-slate-500">Available</span>
              <span className="font-semibold text-white dark:text-slate-900">
                ${fmt(fromBalance)} USD
              </span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-400 dark:text-slate-500">
                Transfer to {direction === "balance_to_profit" ? "Profit" : "Balance"}
              </span>
              <span className="font-semibold text-emerald-400">
                ${parsedAmount > 0 ? fmt(parsedAmount) : "0.00"} USD
              </span>
            </div>
          </div>

          {/* CONFIRM BUTTON */}
          <button
            onClick={handleConfirm}
            disabled={submitting || parsedAmount <= 0 || parsedAmount > fromBalance}
            className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200
              bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400
              shadow-lg shadow-emerald-500/20
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-emerald-600 disabled:hover:to-emerald-500"
          >
            {submitting ? (
              <span className="flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                Processing...
              </span>
            ) : (
              "Confirm"
            )}
          </button>
        </div>

        {/* Info note */}
        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
          Transfers between accounts are instant and irreversible.
        </p>
      </div>
    </div>
  );
}
