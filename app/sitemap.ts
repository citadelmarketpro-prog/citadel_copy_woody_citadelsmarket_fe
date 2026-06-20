import { MetadataRoute } from "next";

const BASE_URL = "https://citadelsmarket.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "",                    priority: 1.0, changeFrequency: "weekly" },
    { path: "/about",              priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact",            priority: 0.8, changeFrequency: "monthly" },
    { path: "/lead-traders",       priority: 0.8, changeFrequency: "weekly" },
    { path: "/copy-trading",       priority: 0.8, changeFrequency: "monthly" },
    { path: "/option-copy-trading",priority: 0.8, changeFrequency: "monthly" },
    { path: "/advance-trading",    priority: 0.7, changeFrequency: "monthly" },
    { path: "/trading-live",       priority: 0.7, changeFrequency: "monthly" },
    { path: "/swing-trading",      priority: 0.7, changeFrequency: "monthly" },
    { path: "/futures",            priority: 0.7, changeFrequency: "monthly" },
    { path: "/option-trading",     priority: 0.7, changeFrequency: "monthly" },
    { path: "/oil-and-gas",        priority: 0.7, changeFrequency: "monthly" },
    { path: "/software",           priority: 0.7, changeFrequency: "monthly" },
    { path: "/insight",            priority: 0.7, changeFrequency: "weekly" },
    { path: "/trade-news",         priority: 0.7, changeFrequency: "weekly" },
    { path: "/insurance",          priority: 0.6, changeFrequency: "monthly" },
    { path: "/regulations",        priority: 0.6, changeFrequency: "monthly" },
    { path: "/security",           priority: 0.6, changeFrequency: "monthly" },
    { path: "/affiliates",         priority: 0.6, changeFrequency: "monthly" },
    { path: "/refer-a-friend",     priority: 0.6, changeFrequency: "monthly" },
    { path: "/portfolio-analytics",priority: 0.6, changeFrequency: "monthly" },
    { path: "/support",            priority: 0.6, changeFrequency: "monthly" },
    { path: "/email-us",           priority: 0.5, changeFrequency: "yearly" },
    { path: "/system-status",      priority: 0.5, changeFrequency: "weekly" },
    { path: "/privacy-policy",     priority: 0.4, changeFrequency: "yearly" },
    { path: "/terms-and-condition",priority: 0.4, changeFrequency: "yearly" },
    { path: "/aml-policy",         priority: 0.4, changeFrequency: "yearly" },
    { path: "/cookies",            priority: 0.4, changeFrequency: "yearly" },
    { path: "/disclaimer",         priority: 0.4, changeFrequency: "yearly" },
    { path: "/user-agreement",     priority: 0.4, changeFrequency: "yearly" },
    { path: "/conflict-interest",  priority: 0.4, changeFrequency: "yearly" },
    { path: "/declaration-consent",priority: 0.4, changeFrequency: "yearly" },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
