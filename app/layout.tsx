import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://citadelsmarket.com"), // Replace with your actual domain
  title: {
    default: "Citadels Market - Your Goal to Global Investment",
    template: "%s | Citadels Market",
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
  authors: [{ name: "Citadels Market" }],
  creator: "Citadels Market",
  publisher: "Citadels Market",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://citadelsmarket.com",
    siteName: "Citadels Market",
    title: "Citadels Market - Your Goal to Global Investment",
    description:
      "Copy Stocks, Options & Contracts with Precision. The Premier Copy-Trading Hub for Options Traders",
    images: [
      {
        url: "https://www.citadelsmarket.com/og-image.png", // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Citadels Market - Copy Trading Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Citadels Market - Your Goal to Global Investment",
    description:
      "Copy Stocks, Options & Contracts with Precision. The Premier Copy-Trading Hub for Options Traders",
    images: ["https://www.citadelsmarket.com/twitter-image.jpg"], // Create this image (1200x600px recommended)
    creator: "@citadelmarketspro", // Replace with your actual Twitter handle
    site: "@citadelmarketspro", // Replace with your actual Twitter handle
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://citadelsmarket.com",
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
  category: "finance",
  other: {
    "msapplication-TileColor": "#134E4A",
    "theme-color": "#134E4A",
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
        <meta name="application-name" content="Citadels Market" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Citadels Market" />
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
        <Analytics />

        {/* <LiveChat /> */}

        <Script
          src="//code.jivosite.com/widget/nvVuiYFcsp"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
