import { getSEOTags } from "@/lib/seo";

import Providers from "./providers";
import "./globals.css";
import Navbar from "@/components/NavBar";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className="bg-background text-foreground font-geist-sans antialiased">
          <Navbar />
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
