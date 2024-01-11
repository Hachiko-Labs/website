import { useEffect } from "react";
import { PostHogProvider, usePostHog } from 'posthog-js/react'

const POSTHOG_KEY = import.meta.env.PUBLIC_POSTHOG_KEY;

interface Props {
  children: React.ReactNode;
}

export const AnalyticsProvider = ({ children }: Props) => {
  const posthog = usePostHog();

  useEffect(() => {
    if (posthog) {
      posthog.capture("posthog instance: loaded");
    }
  }, [posthog]);

  return (
    <PostHogProvider apiKey={POSTHOG_KEY}>
      {children}
    </PostHogProvider>
  )
};