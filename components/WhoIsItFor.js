"use client";

import SectionContainer from "./SectionContainer";
import Solo from "./icons/solo";
import Startup from "./icons/startup";
import Multiple from "./icons/multiple";
import { Badge } from "./ui/badge";
import { animate, inView } from "motion";
import { useEffect } from "react";

const WhoIsItFor = () => {
  useEffect(() => {
    inView("#who-is-it-for", ({ target }) => {
      animate(
        target.querySelector("#badge-whoisitfor"),
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
    <SectionContainer id="who-is-it-for" className="w-full text-left gap-9">
      <Badge id="badge-whoisitfor" variant="outline" className="-translate-y-12 opacity-0 mx-auto uppercase py-3 px-8">
        Who is it for
      </Badge>
      <h2 className="-translate-y-12 opacity-0 font-neco text-3xl md:text-4xl xl:text-5xl text-foreground">
        Who is it <strong>for?</strong>
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="-translate-x-8 opacity-0 card-item flex flex-col col-span-12 md:col-span-4 gap-2">
          <div className="flex flex-col gap-4">
            <Solo />
            <h3 className="font-neco text-xl md:text-2xl xl:text-3xl font-bold text-foreground">
              Solo-founders
            </h3>
          </div>
          <p className="text-foreground/60 text-sm md:text-lg xl:text-xl">
            Go from scratch in 14 days, full branding, design & development
          </p>
        </div>
        <div className="-translate-x-8 opacity-0 card-item flex flex-col col-span-12 md:col-span-4 gap-2">
          <div className="flex flex-col gap-4">
            <Startup />
            <h3 className="font-neco text-xl md:text-2xl xl:text-3xl font-bold text-foreground">
              Startups
            </h3>
          </div>
          <p className="text-foreground/60 text-sm md:text-lg xl:text-xl">
            Clear your roadmap, ship new features, optimize flows
          </p>
        </div>
        <div className="-translate-x-8 opacity-0 card-item flex flex-col col-span-12 md:col-span-4 gap-2">
          <div className="flex flex-col gap-4">
            <Multiple />
            <h3 className="font-neco text-xl md:text-2xl xl:text-3xl font-bold text-foreground">
              Agencies
            </h3>
          </div>
          <p className="text-foreground/60 text-sm md:text-lg xl:text-xl">
            Overflowing? outsource it, never loose a lead again
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhoIsItFor;
