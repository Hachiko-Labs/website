import { AnalyticsProvider } from "@/components/contexts/Analytics";
import { ThemeProvider } from "@/components/contexts/Themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </ThemeProvider>
  );
}
