"use client";
import React, { useState } from "react";
import { LineChart, Shield, GraduationCap, Copy, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Global Reach & Regulation",
      description:
        "Join a trusted community spanning 150+ countries with millions of accounts and leaders. Regulated globally, offering secure and reliable access to options and stock contracts.",
      icon: Globe,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgLight: "bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50",
      bgDark:
        "dark:bg-gradient-to-br dark:from-blue-950/50 dark:via-cyan-950/50 dark:to-teal-950/50",
      iconBg: "bg-gradient-to-br from-blue-400/20 to-cyan-400/20",
      iconColor: "text-blue-500 dark:text-cyan-400",
      borderColor: "border-blue-300 dark:border-blue-700",
      hoverBorder: "border-blue-400 dark:border-cyan-500",
      badgeBg: "bg-gradient-to-r from-blue-500 to-cyan-500",
      hoverBadge: "bg-gradient-to-r from-blue-400 to-cyan-400",
    },
    {
      number: "02",
      title: "Stock-Focused Copy Trading",
      description:
        "Tailor your strategy: copy entire options chains, specific tickers, or tactical contracts—such as calls, puts, or spreads. Manage risk, leverage, and exposure—automatically.",
      icon: Copy,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgLight: "bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50",
      bgDark:
        "dark:bg-gradient-to-br dark:from-purple-950/50 dark:via-pink-950/50 dark:to-rose-950/50",
      iconBg: "bg-gradient-to-br from-purple-400/20 to-pink-400/20",
      iconColor: "text-purple-500 dark:text-pink-400",
      borderColor: "border-purple-300 dark:border-purple-700",
      hoverBorder: "border-purple-400 dark:border-pink-500",
      badgeBg: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverBadge: "bg-gradient-to-r from-purple-400 to-pink-400",
    },
    {
      number: "03",
      title: "Advanced Tools",
      description:
        "Beyond copying, leverage in-house features like Backtest, Watchlist, Risk-score, and AutoGuard™ tailored for options strategies.",
      icon: LineChart,
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      bgLight: "bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50",
      bgDark:
        "dark:bg-gradient-to-br dark:from-emerald-950/50 dark:via-green-950/50 dark:to-lime-950/50",
      iconBg: "bg-gradient-to-br from-emerald-400/20 to-green-400/20",
      iconColor: "text-emerald-500 dark:text-green-400",
      borderColor: "border-emerald-300 dark:border-emerald-700",
      hoverBorder: "border-emerald-400 dark:border-green-500",
      badgeBg: "bg-gradient-to-r from-emerald-500 to-green-500",
      hoverBadge: "bg-gradient-to-r from-emerald-400 to-green-400",
    },
    {
      number: "04",
      title: "Stay In Control",
      description:
        "Each copy trade adapts to your capital, risk appetite, and contract preferences—even across varying strike prices and expiration dates.",
      icon: Shield,
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgLight: "bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50",
      bgDark:
        "dark:bg-gradient-to-br dark:from-orange-950/50 dark:via-amber-950/50 dark:to-yellow-950/50",
      iconBg: "bg-gradient-to-br from-orange-400/20 to-amber-400/20",
      iconColor: "text-orange-500 dark:text-amber-400",
      borderColor: "border-orange-300 dark:border-orange-700",
      hoverBorder: "border-orange-400 dark:border-amber-500",
      badgeBg: "bg-gradient-to-r from-orange-500 to-amber-500",
      hoverBadge: "bg-gradient-to-r from-orange-400 to-amber-400",
    },
    {
      number: "05",
      title: "Learning through Copying",
      description:
        "Engage directly with leaders—understand their rationale for options trades, ask questions, learn in a social investing environment.",
      icon: GraduationCap,
      gradient: "from-red-500 via-rose-500 to-pink-500",
      bgLight: "bg-gradient-to-br from-red-50 via-rose-50 to-pink-50",
      bgDark:
        "dark:bg-gradient-to-br dark:from-red-950/50 dark:via-rose-950/50 dark:to-pink-950/50",
      iconBg: "bg-gradient-to-br from-red-400/20 to-rose-400/20",
      iconColor: "text-red-500 dark:text-rose-400",
      borderColor: "border-red-300 dark:border-red-700",
      hoverBorder: "border-red-400 dark:border-rose-500",
      badgeBg: "bg-gradient-to-r from-red-500 to-rose-500",
      hoverBadge: "bg-gradient-to-r from-red-400 to-rose-400",
    },
  ];

  return (
    <section className="dark:bg-black py-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Trade Stocks on Citadel?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Learn Steps to Capitalize on Price Differences and Maximize Your
              Returns
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const isHovered = hoveredCard === index;
            const Icon = step.icon;

            return (
              <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                <div
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative z-10"
                >
                  {/* Step Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 text-white shadow-lg ${
                        isHovered
                          ? `${step.hoverBadge} scale-110 shadow-xl`
                          : step.badgeBg
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`relative rounded-2xl p-8 min-h-64 transition-all duration-300 overflow-hidden ${
                      step.bgLight
                    } ${step.bgDark} ${
                      isHovered
                        ? `border-2 ${step.hoverBorder} shadow-2xl scale-105`
                        : `border-2 ${step.borderColor} shadow-lg`
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                        step.iconBg
                      } ${isHovered ? "scale-110 rotate-6" : ""}`}
                    >
                      <Icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Corner Accent */}
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${
                        step.gradient
                      } opacity-10 rounded-bl-full transition-all duration-300 ${
                        isHovered ? "scale-150" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;



