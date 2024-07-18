"use client";

import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";

export default function PosthogAnalytics({ children }) {
    const posthog = usePostHog();

    useEffect(() => {
        if (posthog) {
        posthog.capture("posthog instance: loaded");
        }
    }, [posthog]);
    
    return children;
}