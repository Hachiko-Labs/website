import localFont from "next/font/local";
import { getSEOTags } from "@/lib/seo";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Providers from "./providers";
import "./globals.css";
import { cn } from "@/lib/utils";
import PosthogAnalytics from "./client";
import FacebookPixel from "@/components/FacebookPixel";

const neco = localFont({
  variable: "--font-family-neco",
  src: [
    {
      family: "Neco",
      weight: "700",
      path: "fonts/Neco-Bold.woff2",
      style: "normal",
    },
    {
      family: "Neco",
      weight: "300",
      path: "fonts/Neco-Medium.woff2",
      style: "normal",
    },
    {
      family: "Neco",
      weight: "400",
      path: "fonts/Neco-Regular.woff2",
      style: "normal",
    },
  ],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.className, GeistMono.variable, neco.variable)}
      suppressHydrationWarning
    >
      <head>
        <FacebookPixel />
      </head>
      <body className="bg-background text-foreground font-geist-sans antialiased">
        <Providers>
          <PosthogAnalytics>{children}</PosthogAnalytics>
        </Providers>
      </body>
    </html>
  );
}
