import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { getSEOTags } from "@/lib/seo";

import Providers from "./providers";
import "./globals.css";

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
    >
      <body className="bg-background text-foreground font-geist-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
