"use client"

import { useEffect } from "react";
import { PostHogProvider, usePostHog } from 'posthog-js/react'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

const options = {
  api_host: POSTHOG_HOST
}

export const AnalyticsProvider = ({ children }) => {
  return (
    <PostHogProvider apiKey={POSTHOG_KEY} options={options}>
      {children}
    </PostHogProvider>
  )
};