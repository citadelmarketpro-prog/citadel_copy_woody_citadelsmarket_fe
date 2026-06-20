import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/",
          "/portfolio/",
          "/onboarding/",
          "/settings/",
          "/trade-history/",
          "/copy-traders/",
          "/wallets/",
          "/profile/",
          "/login",
          "/register",
          "/forgot-password",
          "/reset-password",
          "/verify-email",
          "/verify-2fa",
          "/sample-landing",
        ],
      },
    ],
    sitemap: "https://citadelsmarket.com/sitemap.xml",
  };
}
