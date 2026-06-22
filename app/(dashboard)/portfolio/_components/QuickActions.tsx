import React from "react";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowLeftRight,
  FileText,
} from "lucide-react";

interface QuickActionsProps {
  onDepositClick?: () => void;
  onWithdrawClick?: () => void;
  onOrdersClick?: () => void;
  onHistoryClick?: () => void;
}

export default function QuickActions({
  onDepositClick,
  onWithdrawClick,
  onHistoryClick,
}: QuickActionsProps) {
  const actions = [
    {
      id: "deposit",
      label: "Deposit",
      icon: ArrowDownToLine,
      bgColor:
        "bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600",
      onClick: onDepositClick,
      href: null,
    },
    {
      id: "withdraw",
      label: "Withdraw",
      icon: ArrowUpFromLine,
      bgColor:
        "bg-slate-700 hover:bg-slate-600 dark:bg-slate-300 dark:hover:bg-slate-400",
      onClick: onWithdrawClick,
      href: null,
    },
    {
      id: "transfer",
      label: "Transfer",
      icon: ArrowLeftRight,
      bgColor:
        "bg-slate-700 hover:bg-slate-600 dark:bg-slate-300 dark:hover:bg-slate-400",
      onClick: null,
      href: "/transfer",
    },
    {
      id: "history",
      label: "History",
      icon: FileText,
      bgColor:
        "bg-slate-700 hover:bg-slate-600 dark:bg-slate-300 dark:hover:bg-slate-400",
      onClick: onHistoryClick,
      href: null,
    },
  ];

  const btnClass = (bgColor: string) =>
    `${bgColor} rounded-lg p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center gap-0.5 sm:gap-1 transition-all transform hover:scale-105 active:scale-95 shadow-lg min-w-0 flex-1 max-w-[90px] sm:max-w-none`;

  return (
    <div className="w-full p-2 sm:p-4 mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            const inner = (
              <>
                <div className="text-white dark:text-slate-900">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white dark:text-slate-900 whitespace-nowrap">
                  {action.label}
                </span>
              </>
            );

            if (action.href) {
              return (
                <Link
                  key={action.id}
                  href={action.href}
                  className={btnClass(action.bgColor)}
                >
                  {inner}
                </Link>
              );
            }

            return (
              <button
                key={action.id}
                onClick={action.onClick ?? undefined}
                className={btnClass(action.bgColor)}
              >
                {inner}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
