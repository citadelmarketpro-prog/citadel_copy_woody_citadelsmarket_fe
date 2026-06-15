"use client";
import React, { useState } from "react";
import { Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const GlobalStatsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    {
      value: "150+",
      label: "Countries",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgLight: "bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50",
      bgDark: "dark:bg-gradient-to-br dark:from-blue-950/50 dark:via-cyan-950/50 dark:to-teal-950/50",
      textColor: "text-blue-600 dark:text-cyan-400",
      borderColor: "border-blue-300 dark:border-blue-700",
      hoverBorder: "border-blue-400 dark:border-cyan-500",
      shadowColor: "shadow-blue-400/20 dark:shadow-cyan-400/20",
    },
    {
      value: "2M+",
      label: "Accounts",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgLight: "bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50",
      bgDark: "dark:bg-gradient-to-br dark:from-purple-950/50 dark:via-pink-950/50 dark:to-rose-950/50",
      textColor: "text-purple-600 dark:text-pink-400",
      borderColor: "border-purple-300 dark:border-purple-700",
      hoverBorder: "border-purple-400 dark:border-pink-500",
      shadowColor: "shadow-purple-400/20 dark:shadow-pink-400/20",
    },
    {
      value: "800K+",
      label: "Leaders",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgLight: "bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50",
      bgDark: "dark:bg-gradient-to-br dark:from-orange-950/50 dark:via-amber-950/50 dark:to-yellow-950/50",
      textColor: "text-orange-600 dark:text-amber-400",
      borderColor: "border-orange-300 dark:border-orange-700",
      hoverBorder: "border-orange-400 dark:border-amber-500",
      shadowColor: "shadow-orange-400/20 dark:shadow-amber-400/20",
    },
  ];

  return (
    <section className="py-16 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const isHovered = hoveredCard === index;

            return (
              <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                <div
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative rounded-2xl p-8 text-center transition-all duration-300 overflow-hidden ${
                    stat.bgLight
                  } ${stat.bgDark} ${
                    isHovered
                      ? `border-2 ${stat.hoverBorder} shadow-2xl ${stat.shadowColor} scale-105`
                      : `border-2 ${stat.borderColor} shadow-lg`
                  }`}
                >
                  {/* Stat Value */}
                  <h3
                    className={`text-4xl lg:text-5xl font-bold mb-2 transition-all duration-300 ${
                      stat.textColor
                    } ${isHovered ? "scale-110" : ""}`}
                  >
                    {stat.value}
                  </h3>

                  {/* Stat Label */}
                  <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
                    {stat.label}
                  </p>

                  {/* Corner Accent */}
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-bl-full transition-all duration-300 ${
                      isHovered ? "scale-150" : ""
                    }`}
                  ></div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${stat.gradient} opacity-10 rounded-tr-full transition-all duration-300 ${
                      isHovered ? "scale-150" : ""
                    }`}
                  ></div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Regulated Badge */}
          <div className="flex items-center justify-center gap-3">
            <Globe className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Regulated Globally
            </span>
          </div>
      </div>
    </section>
  );
};

export default GlobalStatsSection;