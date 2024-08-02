"use client"

import config from "@/config";
import SectionContainer from "./SectionContainer";
import { Button } from "./ui/button";
import triggerScheduleCall from "@/lib/capi";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const Hero = () => {
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
  }
  return (
    <SectionContainer className="gap-4">
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-neco text-foreground tracking-wide">
          your product software partner for startup founders. full-stack
          development on a flexible subscription - cancel anytime
        </h1>
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-neco text-foreground tracking-wide">
          let&apos;s collaborate today!
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-16 h-0 border border-foreground"></div>
        <Button className="gap-2" onClick={handleClick} disabled={loading}>
          Work with us
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        </Button>
      </div>
    </SectionContainer>
  );
};

export default Hero;
