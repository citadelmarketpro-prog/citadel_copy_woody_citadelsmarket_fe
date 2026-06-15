"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { X, TrendingUp, AlertCircle, ChevronRight, Shield, CheckCircle, BookOpen } from "lucide-react";
import DashboardNavbar from "@/components/main/DashboardNavbar";

// ─── Live Trading Requirements Modal ──────────────────────────────────────────
function LiveTradingRequirementsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1f2e] dark:bg-white w-full sm:max-w-lg sm:mx-4 max-h-[90vh] overflow-y-auto relative border border-slate-700/40 dark:border-slate-200 rounded-t-2xl sm:rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-slate-600 dark:bg-slate-300" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 rounded-full hover:bg-slate-700/50 dark:hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 dark:text-slate-500" />
        </button>

        {/* Header */}
        <div className="px-4 pt-3 pb-4 sm:px-6 sm:pt-6 sm:pb-5 border-b border-slate-700/40 dark:border-slate-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 grid place-items-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-100 dark:text-slate-900">
                Live Trading Requirements
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500">
                Important information before you begin
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-4 py-4 sm:px-6 sm:py-5 space-y-5">
          {/* Intro */}
          <p className="text-sm text-slate-300 dark:text-slate-600 leading-relaxed">
            Thank you for your interest in our Live Trading feature! To ensure a safe and
            compliant trading environment, we have established minimum account requirements
            that must be met before you can participate in live trading sessions.
          </p>

          {/* Minimum Account Requirements */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 grid place-items-center">
                <span className="text-[10px] font-bold text-emerald-400">★</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-100 dark:text-slate-800 uppercase tracking-wider">
                Minimum Account Requirements
              </h3>
            </div>

            <div className="space-y-3">
              {/* Requirement 1 */}
              <div className="flex gap-3 p-3 sm:p-4 rounded-xl bg-slate-800/60 dark:bg-slate-50 border border-slate-700/40 dark:border-slate-200">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 grid place-items-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-emerald-400">1</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-100 dark:text-slate-800 mb-1">
                    Minimum Threshold
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
                    Your account must maintain the minimum threshold to participate in live
                    trading. This threshold ensures you have sufficient capital to manage risk
                    effectively and participate in meaningful trading opportunities.
                  </p>
                </div>
              </div>

              {/* Requirement 2 */}
              <div className="flex gap-3 p-3 sm:p-4 rounded-xl bg-slate-800/60 dark:bg-slate-50 border border-slate-700/40 dark:border-slate-200">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 grid place-items-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-emerald-400">2</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-100 dark:text-slate-800 mb-1">
                    Verified Account Status
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
                    Complete KYC (Know Your Customer) verification to comply with regulatory
                    requirements. This includes submitting valid identification documents and
                    proof of address.
                  </p>
                </div>
              </div>

              {/* Requirement 3 */}
              <div className="flex gap-3 p-3 sm:p-4 rounded-xl bg-slate-800/60 dark:bg-slate-50 border border-slate-700/40 dark:border-slate-200">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 grid place-items-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-emerald-400">3</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-100 dark:text-slate-800 mb-1">
                    Risk Acknowledgment
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
                    Understand and acknowledge that live trading involves significant risk. You
                    should only trade with funds you can afford to lose. Past performance does
                    not guarantee future results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why These Requirements */}
          <div className="p-3 sm:p-4 rounded-xl bg-emerald-900/20 dark:bg-emerald-50 border border-emerald-500/20 dark:border-emerald-200">
            <h3 className="text-xs sm:text-sm font-semibold text-emerald-400 dark:text-emerald-700 mb-2">
              Why These Requirements?
            </h3>
            <div className="space-y-2 text-xs text-slate-400 dark:text-slate-600">
              <div className="flex gap-2">
                <Shield className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><span className="font-medium text-slate-300 dark:text-slate-700">Risk Management:</span> A minimum balance ensures you have adequate capital to diversify trades and manage potential losses without depleting your entire account.</span>
              </div>
              <div className="flex gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><span className="font-medium text-slate-300 dark:text-slate-700">Regulatory Compliance:</span> Account verification helps us meet legal obligations and protect you from fraud and financial crimes.</span>
              </div>
              <div className="flex gap-2">
                <BookOpen className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><span className="font-medium text-slate-300 dark:text-slate-700">Market Readiness:</span> Experienced, verified traders create a more stable and trustworthy live trading environment for all participants.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
          <button
            onClick={onClose}
            className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20"
          >
            Got it, I understand
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function LiveSessionPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !mounted || !resolvedTheme) return;

    // Clear any existing content
    containerRef.current.innerHTML = "";

    // INVERTED: Your app shows dark UI when theme is "light" and light UI when theme is "dark"
    const tradingViewTheme = resolvedTheme === "light" ? "dark" : "light";
    const backgroundColor = tradingViewTheme === "dark" ? "#0F0F0F" : "#FFFFFF";

    // Create widget container structure
    const widgetContainer = document.createElement("div");
    widgetContainer.className = "tradingview-widget-container__widget";
    containerRef.current.appendChild(widgetContainer);

    // Create script element
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"],
      isTransparent: false,
      colorTheme: tradingViewTheme,
      locale: "en",
      backgroundColor: backgroundColor,
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [mounted, resolvedTheme]);

  if (!mounted || !resolvedTheme) {
    return (
      <div className="min-h-screen bg-[#1a1f2e] dark:bg-gray-50 transition-colors pt-20">
        <DashboardNavbar />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-gray-400 dark:text-gray-600">Loading live session...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1f2e] dark:bg-gray-50 transition-colors pt-20">
      <DashboardNavbar />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-white dark:text-gray-900 mb-2">
            Live Trading Session
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="text-gray-400 dark:text-gray-600">
              Real-time market data and trading opportunities
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Live Market Data</span>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="mb-5 bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/30 dark:border-emerald-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-emerald-400 dark:text-emerald-600 mb-1">
                Live Trading
              </h3>
              <p className="text-sm text-emerald-300/80 dark:text-emerald-700">
                Access real-time trading opportunities. Click the button below to view the
                requirements for starting a live trading session.
              </p>
            </div>
          </div>
        </div>

        {/* Start Live Trading Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.02]"
          >
            <TrendingUp className="w-5 h-5" />
            Start Live Trading
          </button>
        </div>

        {/* Forex Cross Rates Widget */}
        <div className="mb-8">
          <div className="bg-[#151922] dark:bg-white rounded-xl border border-gray-700 dark:border-gray-300 overflow-hidden p-4">
            <div
              ref={containerRef}
              className="tradingview-widget-container w-full h-screen"
              key={`forex-cross-rates-${resolvedTheme}`}
            />
          </div>
        </div>
      </div>

      {/* Live Trading Requirements Modal */}
      <LiveTradingRequirementsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
