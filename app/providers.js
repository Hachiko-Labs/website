"use client";

import { AnalyticsProvider } from "@/components/contexts/Analytics";
import { ThemeProvider } from "@/components/contexts/Themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </ThemeProvider>
  );
}
