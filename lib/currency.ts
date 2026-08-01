// lib/currency.ts
// Shared display-currency preference — persisted in localStorage so it applies
// globally, but only ever consumed by the Portfolio balance card.

export const CURRENCIES = ["USD", "EUR", "GBP", "JPY", "CHF", "CAD", "AUD"];

export const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: "$", EUR: "€", GBP: "£", JPY: "¥", CHF: "Fr", CAD: "CA$", AUD: "A$",
};

export const CURRENCY_NAMES: Record<string, string> = {
  USD: "US Dollar",
  EUR: "Euro",
  GBP: "British Pound",
  JPY: "Japanese Yen",
  CHF: "Swiss Franc",
  CAD: "Canadian Dollar",
  AUD: "Australian Dollar",
};

// Approximate fallback rates so conversion works instantly before the live API responds
export const FALLBACK_RATES: Record<string, number> = {
  EUR: 0.92, GBP: 0.79, JPY: 149.5, CHF: 0.90, CAD: 1.36, AUD: 1.54,
};

const STORAGE_KEY = "preferredCurrency";
export const CURRENCY_CHANGE_EVENT = "preferred-currency-change";

export function getStoredCurrency(): string {
  if (typeof window === "undefined") return "USD";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored && CURRENCIES.includes(stored) ? stored : "USD";
}

export function setStoredCurrency(currency: string): void {
  localStorage.setItem(STORAGE_KEY, currency);
  window.dispatchEvent(
    new CustomEvent(CURRENCY_CHANGE_EVENT, { detail: currency })
  );
}
