import SectionContainer from "./SectionContainer";
import { Button } from "./ui/button";

const WorkWithUs = () => {
  return (
    <SectionContainer className="w-full items-center gap-9">
      <h1 className="text-4xl md:text-6xl xl:text-7xl font-neco text-foreground tracking-wide">
        Let&apos;s work together.
      </h1>
      <div>
        <Button size="lg">Book a call</Button>
      </div>
    </SectionContainer>
  );
};

export default WorkWithUs;
