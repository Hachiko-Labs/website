import Link from "next/link";
import SectionContainer from "./SectionContainer";
import { Button, buttonVariants } from "./ui/button";

const WorkWithUs = () => {
  return (
    <SectionContainer className="w-full items-center gap-9">
      <h1 className="text-4xl md:text-6xl xl:text-7xl font-neco text-foreground tracking-wide">
        Let&apos;s work together.
      </h1>
      <div>
        <Link
          className={buttonVariants({ size: "lg" })}
          href="https://meet.risecalendar.com/cnajera/15-min-meeting"
        >
          Book a call
        </Link>
      </div>
    </SectionContainer>
  );
};

export default WorkWithUs;
