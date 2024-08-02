"use client";

import SectionContainer from "./SectionContainer";
import { Button, buttonVariants } from "./ui/button";
import config from "@/config";
import triggerScheduleCall from "@/lib/capi";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const WorkWithUs = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      setLoading(true);
      await triggerScheduleCall();
    } catch (error) {
      console.error("Error:", error);
      window.open(config.scheduleLink, "_blank");
    } finally {
      setLoading(false);
    }
  };
  return (
    <SectionContainer className="w-full items-center gap-9">
      <h1 className="text-4xl md:text-6xl xl:text-7xl font-neco text-foreground tracking-wide">
        Let&apos;s work together.
      </h1>
      <div>
        <Button
          className={buttonVariants({ size: "lg" })}
          href={config.scheduleLink}
          disabled={loading}
          onClick={handleClick}
        >
          Book a call
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        </Button>
      </div>
    </SectionContainer>
  );
};

export default WorkWithUs;
