"use client";

import Link from "next/link";
import { useEffect } from "react";
import { inView, animate } from "motion";
import { event } from "@/lib/fbpixel";

import SectionContainer from "./SectionContainer";
import { buttonVariants } from "./ui/button";
import config from "@/config";
import triggerScheduleCall from "@/lib/capi";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

const Hero = () => {
  useEffect(() => {
    inView("#hero-section", ({ target }) => {
      animate(
        target.querySelector("#announcement-promo"),
        { opacity: 1, transform: "none" },
        { delay: 0, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      animate(
        target.querySelector("h1"),
        { opacity: 1, transform: "none" },
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      animate(
        target.querySelector("span"),
        { opacity: 1, transform: "none" },
        { delay: 0.4, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      animate(
        target.getElementsByTagName("a")[0],
        { opacity: 1, transform: "none" },
        { delay: 0.6, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      animate(
        target.getElementsByTagName("a")[1],
        { opacity: 1, transform: "none" },
        { delay: 0.8, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }, []);
  const handleClick = async () => {
    await triggerScheduleCall();
  };
  const track = () => {
    const additionalData = {};
    const eventId = crypto.randomUUID();
    event("Contact", additionalData, { eventID: eventId });
  }
  return (
    <SectionContainer className="gap-4 justify-center h-[calc(100vh-120px)] sm:h-auto py-0">
      <div id="hero-section" className="flex text-left sm:text-center flex-col gap-5">
        <Badge id="announcement-promo" className="w-fit py-2 mx-auto -translate-y-12 opacity-0" variant="secondary">
          Get 30% off your first 2 months
        </Badge>
        <h1 className="-translate-y-12 opacity-0 text-4xl md:text-6xl xl:text-7xl font-neco text-foreground tracking-wide">
          Full-stack development on a flexible subscription - cancel anytime
        </h1>
        <span className="-translate-y-12 opacity-0 text-md md:text-lg xl:text-xl font-neco text-foreground tracking-wide">
          We help tech companies building software applications that users love and reduce time to market at a fixed price per month. Let&apos;s collaborate today!
        </span>
        <div className="flex flex-col items-center gap-2">
          <Link
            id="get-started"
            onClick={track}
            className={cn(
              "w-full sm:w-fit -translate-y-12 opacity-0",
              buttonVariants({ size: "lg" })
            )}
            href="#pricing"
          >
            Get Started
          </Link>
          <Link
            id="schedule-call"
            target="_blank"
            onClick={handleClick}
            className={cn(
              "w-full sm:w-fit underline -translate-y-12 opacity-0",
              buttonVariants({ size: "lg", variant: "link" })
            )}
            href={config.scheduleLink}
          >
            Book a free call
          </Link>
        </div>
      </div>
      {/* <div className="hidden sm:flex flex-col gap-12">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-neco text-foreground tracking-wide">
          your product software partner for startup founders. full-stack
          development on a flexible subscription - cancel anytime
        </h1>
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-neco text-foreground tracking-wide">
          let&apos;s collaborate today!
        </h1>
        <div className="flex items-center gap-5">
          <div className="w-16 h-0 border border-foreground"></div>
          <Link
            target="_blank"
            onClick={handleClick}
            className={cn(buttonVariants({ size: "lg" }))}
            href={config.scheduleLink}
          >
            Work with us
          </Link>
        </div>
      </div> */}
    </SectionContainer>
  );
};

export default Hero;
