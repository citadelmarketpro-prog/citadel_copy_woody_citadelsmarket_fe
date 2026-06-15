"use client";

import { useEffect, useState } from "react";
import { X, Crown, ChevronRight, Shield, Star, Gem, Award, Zap, Trophy } from "lucide-react";
import { BACKEND_URL } from "@/lib/constants";
import Link from "next/link";

interface TierData {
  key: string;
  name: string;
  min_deposit: number;
  referral_bonus: number;
  rank_bonus: number;
}

interface LoyaltyTiersResponse {
  success: boolean;
  tiers: TierData[];
  current_tier: string;
  next_tier: string;
  total_deposits: number;
  next_amount_to_upgrade: number;
}

const TIER_STYLES: Record<string, { gradient: string; border: string; icon: React.ReactNode; glow: string; text: string; bg: string }> = {
  iron: {
    gradient: "from-slate-500 to-slate-600",
    border: "border-slate-400/50",
    icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
    glow: "shadow-slate-500/20",
    text: "text-slate-300",
    bg: "bg-slate-500/10",
  },
  bronze: {
    gradient: "from-amber-700 to-amber-800",
    border: "border-amber-600/50",
    icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
    glow: "shadow-amber-700/20",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  silver: {
    gradient: "from-gray-300 to-gray-400",
    border: "border-gray-300/50",
    icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
    glow: "shadow-gray-300/20",
    text: "text-gray-300",
    bg: "bg-gray-300/10",
  },
  gold: {
    gradient: "from-yellow-400 to-yellow-500",
    border: "border-yellow-400/50",
    icon: <Crown className="w-4 h-4 sm:w-5 sm:h-5" />,
    glow: "shadow-yellow-400/30",
    text: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  platinum: {
    gradient: "from-cyan-300 to-cyan-400",
    border: "border-cyan-300/50",
    icon: <Gem className="w-4 h-4 sm:w-5 sm:h-5" />,
    glow: "shadow-cyan-300/30",
    text: "text-cyan-300",
    bg: "bg-cyan-300/10",
  },
  diamond: {
    gradient: "from-blue-400 to-indigo-400",
    border: "border-blue-400/50",
    icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
    glow: "shadow-blue-400/30",
    text: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  elite: {
    gradient: "from-purple-400 to-pink-400",
    border: "border-purple-400/50",
    icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />,
    glow: "shadow-purple-400/30",
    text: "text-purple-400",
    bg: "bg-purple-400/10",
  },
};

const TIER_ORDER = ["iron", "bronze", "silver", "gold", "platinum", "diamond", "elite"];

interface LoyaltyProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTier?: string;
}

export default function LoyaltyProgramModal({ isOpen, onClose, currentTier }: LoyaltyProgramModalProps) {
  const [data, setData] = useState<LoyaltyTiersResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const fetchTiers = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("authToken");
        const response = await fetch(`${BACKEND_URL}/loyalty/tiers/`, {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (err) {
        console.error("Failed to fetch loyalty tiers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTiers();
  }, [isOpen]);

  if (!isOpen) return null;

  const activeTier = data?.current_tier || currentTier || "iron";
  const activeTierIndex = TIER_ORDER.indexOf(activeTier);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 dark:bg-white w-full sm:max-w-lg sm:mx-4 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto relative border border-slate-700/40 dark:border-slate-200 rounded-t-2xl sm:rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle — mobile only */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-slate-600 dark:bg-slate-300" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full hover:bg-slate-700/50 dark:hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 dark:text-slate-500" />
        </button>

        {/* Header */}
        <div className="px-4 pt-3 pb-3 sm:px-6 sm:pt-6 sm:pb-4 bg-gradient-to-br from-slate-800/80 to-slate-900 dark:from-slate-50 dark:to-white border-b border-slate-700/40 dark:border-slate-200">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 grid place-items-center flex-shrink-0">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-slate-100 dark:text-slate-900">
              Loyalty Rank Status
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-600 leading-relaxed">
            Join the loyalty table, showcase your copytrading skills, copy a Pro Trader, and keep trading for greater opportunities!
          </p>
        </div>

        {/* Current Progress Banner */}
        {data && (
          <div className="mx-3 sm:mx-6 mt-3 sm:mt-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 dark:from-emerald-50 dark:to-emerald-100 border border-emerald-500/30 dark:border-emerald-200">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="text-[10px] sm:text-xs font-medium text-emerald-400 dark:text-emerald-700 uppercase tracking-wider">
                Your Progress
              </span>
              <span className={`text-xs sm:text-sm font-bold capitalize ${TIER_STYLES[activeTier]?.text || "text-slate-300"}`}>
                {activeTier} Tier
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-400 dark:text-slate-600">
              <span>Total Deposits: ${data.total_deposits.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              {activeTier !== "elite" && (
                <span>Next: ${data.next_amount_to_upgrade.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              )}
            </div>
            {/* Progress bar */}
            {activeTier !== "elite" && data.next_amount_to_upgrade > 0 && (
              <div className="mt-2 sm:mt-3 h-1.5 sm:h-2 bg-slate-700/50 dark:bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(100, (data.total_deposits / data.next_amount_to_upgrade) * 100)}%`,
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* Tier List */}
        <div className="p-3 sm:p-6 space-y-2 sm:space-y-3">
          {loading ? (
            <div className="flex items-center justify-center py-10 sm:py-12">
              <div className="w-7 h-7 sm:w-8 sm:h-8 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
            </div>
          ) : (
            (data?.tiers || []).map((tier, index) => {
              const style = TIER_STYLES[tier.key] || TIER_STYLES.iron;
              const isCurrent = tier.key === activeTier;
              const isUnlocked = index <= activeTierIndex;

              return (
                <div
                  key={tier.key}
                  className={`
                    relative p-3 sm:p-4 rounded-xl border transition-all duration-300
                    ${isCurrent
                      ? `${style.border} ${style.bg} ring-1 ring-offset-0 ${style.border} shadow-lg ${style.glow}`
                      : isUnlocked
                        ? `border-slate-700/30 dark:border-slate-200 ${style.bg}`
                        : "border-slate-700/20 dark:border-slate-200/60 opacity-60"
                    }
                  `}
                >
                  {/* Current tier badge */}
                  {isCurrent && (
                    <div className="absolute -top-2 right-3 px-1.5 sm:px-2 py-0.5 bg-emerald-500 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full">
                      Current
                    </div>
                  )}

                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    {/* Tier Icon */}
                    <div
                      className={`
                        w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${style.gradient}
                        flex items-center justify-center flex-shrink-0
                        ${isCurrent ? "ring-2 ring-offset-2 ring-offset-slate-900 dark:ring-offset-white " + style.border : ""}
                      `}
                    >
                      <span className="text-white">{style.icon}</span>
                    </div>

                    {/* Tier Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                        <h3 className={`text-xs sm:text-sm font-bold ${isCurrent || isUnlocked ? style.text : "text-slate-500 dark:text-slate-400"}`}>
                          {tier.name}
                        </h3>
                        {isUnlocked && !isCurrent && (
                          <span className="text-[8px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-medium">
                            Unlocked
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-3 gap-1 sm:gap-2 text-[10px] sm:text-xs">
                        <div>
                          <span className="text-slate-500 dark:text-slate-400 block leading-tight">Min. Deposit</span>
                          <span className="text-slate-200 dark:text-slate-800 font-semibold">
                            ${tier.min_deposit.toLocaleString()}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 dark:text-slate-400 block leading-tight">Referral</span>
                          <span className="text-slate-200 dark:text-slate-800 font-semibold">
                            {tier.referral_bonus}%
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 dark:text-slate-400 block leading-tight">Rank Bonus</span>
                          <span className="text-slate-200 dark:text-slate-800 font-semibold">
                            ${tier.rank_bonus.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Chevron for locked tiers */}
                    {!isUnlocked && (
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-1 sm:mt-0" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* CTA */}
        <div className="px-3 pb-4 sm:px-6 sm:pb-6">
          <Link
            href="/deposit"
            onClick={onClose}
            className="block w-full py-2.5 sm:py-3 px-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-sm sm:text-base font-semibold text-center rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20"
          >
            Make a Deposit
          </Link>
          <p className="text-center text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-3">
            Deposit more to increase your Loyalty Rank
          </p>
        </div>
      </div>
    </div>
  );
}
