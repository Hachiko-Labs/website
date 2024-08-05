"use client";

import { Asterisk } from "lucide-react";
import SectionContainer from "./SectionContainer";
import { Badge } from "./ui/badge";
import { animate, inView } from "motion";
import { useEffect } from "react";

const WhyUs = () => {
  useEffect(() => {
    inView("#whyus-section", ({ target }) => {
      animate(
        target.querySelector("#badge-whyus"),
        { opacity: 1, transform: "none" },
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      animate(
        target.querySelector("h2"),
        { opacity: 1, transform: "none" },
        { delay: 0.4, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      animate(
        target.querySelector(".card-item:nth-child(1)"),
        { opacity: 1, transform: "none" },
        { delay: 0.6, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      animate(
        target.querySelector(".card-item:nth-child(2)"),
        { opacity: 1, transform: "none" },
        { delay: 0.8, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      animate(
        target.querySelector(".card-item:nth-child(3)"),
        { opacity: 1, transform: "none" },
        { delay: 1, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }, []);
  return (
    <SectionContainer id="whyus-section" className="w-full text-left gap-9">
      <Badge id="badge-whyus" variant="outline" className="-translate-y-12 opacity-0 mx-auto uppercase py-3 px-8">
        Why Us
      </Badge>
      <h2 className="-translate-y-12 opacity-0 font-neco text-3xl md:text-4xl xl:text-5xl text-foreground">
        Your growth is <strong>our focus</strong>
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="-translate-x-8 opacity-0 card-item flex flex-col col-span-12 md:col-span-4 gap-2">
          <div className="flex gap-2">
            <Asterisk size={35} />
            <h3 className="font-neco text-xl md:text-2xl xl:text-3xl font-bold text-foreground">
              Affordable
            </h3>
          </div>
          <p className="text-foreground/60 text-sm md:text-lg xl:text-xl">
            access a dedicated product team for just 25% of the cost of an
            in-house team.
          </p>
        </div>
        <div className="-translate-x-8 opacity-0 card-item flex flex-col col-span-12 md:col-span-4 gap-2">
          <div className="flex gap-2">
            <Asterisk size={35} />
            <h3 className="font-neco text-xl md:text-2xl xl:text-3xl font-bold text-foreground">
              Experience
            </h3>
          </div>
          <p className="text-foreground/60 text-sm md:text-lg xl:text-xl">
            with 9+ years of experience we specialize in turning ideas into
            high-quality web apps.
          </p>
        </div>
        <div className="-translate-x-8 opacity-0 card-item flex flex-col col-span-12 md:col-span-4 gap-2">
          <div className="flex gap-2">
            <Asterisk size={35} />
            <h3 className="font-neco text-xl md:text-2xl xl:text-3xl font-bold text-foreground">
              Flexible
            </h3>
          </div>
          <p className="text-foreground/60 text-sm md:text-lg xl:text-xl">
            bi-weekly subscription with the freedom to cancel anytime.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyUs;
