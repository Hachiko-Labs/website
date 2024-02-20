import { useEffect } from "react";
import { PostHogProvider, usePostHog } from 'posthog-js/react'

const POSTHOG_KEY = import.meta.env.PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.PUBLIC_POSTHOG_HOST;

interface Props {
  children: JSX.Element
}

const options = {
  api_host: POSTHOG_HOST
}

export const AnalyticsProvider = ({ children }: Props) => {
  const posthog = usePostHog();

  useEffect(() => {
    if (posthog) {
      posthog.capture("posthog instance: loaded");
    }
  }, [posthog]);

  return (
    <PostHogProvider apiKey={POSTHOG_KEY} options={options}>
      {children}
    </PostHogProvider>
  )
};