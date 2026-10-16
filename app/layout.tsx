import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/mode/theme-provider";
import Script from "next/script";

const poppins = Poppins({
  // pick the weights you need
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c5c45",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://osaicmarkets.com"),
  title: {
    default: "OsaicMarkets - Your Goal to Global Investment",
    template: "%s | OsaicMarkets",
  },
  description:
    "Copy Stocks, Options & Contracts with Precision. The Premier Copy-Trading Hub for Options Traders. Start trading like experts with our advanced copy-trading platform.",
  keywords: [
    "copy trading",
    "options trading",
    "stock trading",
    "contract trading",
    "copy expert traders",
    "trading platform",
    "investment platform",
    "social trading",
    "automated trading",
    "forex trading",
    "cryptocurrency trading",
    "portfolio management",
    "trading signals",
    "financial markets",
    "trading experts",
    "mirror trading",
    "algorithmic trading",
  ],
  authors: [{ name: "OsaicMarkets" }],
  creator: "OsaicMarkets",
  publisher: "OsaicMarkets",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://osaicmarkets.com",
    siteName: "OsaicMarkets",
    title: "OsaicMarkets - Your Goal to Global Investment",
    description:
      "Copy Stocks, Options & Contracts with Precision. The Premier Copy-Trading Hub for Options Traders",
  },
  twitter: {
    card: "summary_large_image",
    title: "OsaicMarkets - Your Goal to Global Investment",
    description:
      "Copy Stocks, Options & Contracts with Precision. The Premier Copy-Trading Hub for Options Traders",
    creator: "@osaicmarkets", // Replace with your actual Twitter handle
    site: "@osaicmarkets", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://osaicmarkets.com",
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
  category: "finance",
  other: {
    "msapplication-TileColor": "#0c5c45",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Additional SEO meta tags */}
        <meta name="application-name" content="OsaicMarkets" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="OsaicMarkets" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased `}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            disableTransitionOnChange
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster
          position="top-right" // positions: top-left, top-center, bottom-right, etc.
          richColors // enables colored toasts
          theme="light" // "light" | "dark" | "system"
          toastOptions={{
            style: {
              background: "#134E4A", // custom background color
              color: "#fff", // text color
              borderRadius: "10px",
              border: "1px solid #134E4A",
              fontSize: "14px",
            },
            className: "shadow-lg", // optional Tailwind class
          }}
        />

        {/* <LiveChat /> */}

        <Script
          src="//code.jivosite.com/widget/uFhMIu8ikV"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
