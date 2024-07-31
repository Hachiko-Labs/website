"use client"

import Link from "next/link";
import SectionContainer from "./SectionContainer";
import { buttonVariants } from "./ui/button";
import config from "@/config";
import triggerScheduleCall from "@/lib/capi";

const WorkWithUs = () => {
  const handleClick = async () => {
    await triggerScheduleCall();
  }
  return (
    <SectionContainer className="w-full items-center gap-9">
      <h1 className="text-4xl md:text-6xl xl:text-7xl font-neco text-foreground tracking-wide">
        Let&apos;s work together.
      </h1>
      <div>
        <Link
          className={buttonVariants({ size: "lg" })}
          href={config.scheduleLink}
          target="_blank"
          onClick={handleClick}
        >
          Book a call
        </Link>
      </div>
    </SectionContainer>
  );
};

export default WorkWithUs;
