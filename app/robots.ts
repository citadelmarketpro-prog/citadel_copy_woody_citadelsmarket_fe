import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/",
          "/connect-wallet",
          "/copy-experts",
          "/copy-trade-history",
          "/deposit",
          "/history",
          "/kyc",
          "/live-trading",
          "/news",
          "/notifications",
          "/onboarding",
          "/orders",
          "/portfolio",
          "/referral",
          "/settings",
          "/signals",
          "/stock",
          "/trade-history",
          "/transfer",
          "/withdraw",
          "/login",
          "/register",
          "/forgot-password",
          "/reset-password",
          "/verify-email",
          "/verify-2fa",
        ],
      },
    ],
    sitemap: "https://citadelsecmarket.com/sitemap.xml",
  };
}
