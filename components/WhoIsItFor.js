import { Asterisk } from "lucide-react";
import SectionContainer from "./SectionContainer";
import Solo from "./icons/solo";
import Startup from "./icons/startup";
import Multiple from "./icons/multiple";

const WhoIsItFor = () => {
  return (
    <SectionContainer className="w-full text-left gap-9">
      <h2 className="font-neco text-3xl md:text-4xl xl:text-5xl text-foreground">
        Who is it <strong>for?</strong>
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="flex flex-col col-span-12 md:col-span-4 gap-2">
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
        <div className="flex flex-col col-span-12 md:col-span-4 gap-2">
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
        <div className="flex flex-col col-span-12 md:col-span-4 gap-2">
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
