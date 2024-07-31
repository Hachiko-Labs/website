"use client"

import Link from "next/link";
import SectionContainer from "./SectionContainer";
import { buttonVariants } from "./ui/button";
import config from "@/config";
import triggerScheduleCall from "@/lib/capi";

const Hero = () => {
  const handleClick = async () => {
    await triggerScheduleCall();
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
        <Link target="_blank" onClick={handleClick} className={buttonVariants({ size: "lg" })} href={config.scheduleLink}>
          Work with us
        </Link>
      </div>
    </SectionContainer>
  );
};

export default Hero;
