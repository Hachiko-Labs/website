import { Asterisk } from "lucide-react";
import SectionContainer from "./SectionContainer";

const WhyUs = () => {
  return (
    <SectionContainer className="w-full text-left gap-9">
      <h2 className="font-neco text-5xl text-foreground">
        Your growth is <strong>our focus</strong>
      </h2>
      <div className="grid grid-cols-12">
        <div className="flex flex-col col-span-3 max-w-[290px] gap-2">
          <div className="flex gap-2">
            <Asterisk size={35} />
            <h3 className="font-neco text-3xl font-bold text-foreground">
              Affordable
            </h3>
          </div>
          <p className="text-foreground/60 text-lg">
            access a dedicated product team for just 25% of the cost of an
            in-house team.
          </p>
        </div>
        <div className="flex flex-col col-span-3 max-w-[290px] gap-2">
          <div className="flex gap-2">
            <Asterisk size={35} />
            <h3 className="font-neco text-3xl font-bold text-foreground">
              Experience
            </h3>
          </div>
          <p className="text-foreground/60 text-lg">
            with 9+ years of experience we specialize in turning ideas into
            high-quality web apps.
          </p>
        </div>
        <div className="flex flex-col col-span-3 max-w-[290px] gap-2">
          <div className="flex gap-2">
            <Asterisk size={35} />
            <h3 className="font-neco text-3xl font-bold text-foreground">
              Flexible
            </h3>
          </div>
          <p className="text-foreground/60 text-lg">
            bi-weekly subscription with the freedom to cancel anytime.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyUs;
