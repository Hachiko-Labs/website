import SectionContainer from "./SectionContainer";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <SectionContainer className="gap-4">
      <div className="flex flex-col gap-12">
        <h1 className="text-7xl font-neco text-foreground tracking-wide">
          your product software partner for startup founders. full-stack
          development on a flexible subscription - cancel anytime
        </h1>
        <h1 className="text-7xl font-neco text-foreground tracking-wide">
          let’s collaborate today!
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-16 h-0 border border-foreground"></div>
        <Button size="lg">Work with us</Button>
      </div>
    </SectionContainer>
  );
};

export default Hero;
