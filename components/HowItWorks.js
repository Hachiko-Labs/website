"use client";

import { cn } from "@/lib/utils";
import SectionContainer from "./SectionContainer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { icons } from "lucide-react";
import { animate, inView } from "motion";
import { useEffect } from "react";
import { Badge } from "./ui/badge";

const steps = [
  {
    icon: "Lightbulb",
    title: "Planning",
    className:
      "card-item-howitworks -translate-x-8 opacity-0 bg-[#F1F8E9] border-[#DCE7CE]",
    description:
      "We meet with your team to learn more about your project idea and goals. After that, our team will work together to create an action plan and proposal for your project.",
  },
  {
    icon: "PenTool",
    title: "Design",
    className:
      "card-item-howitworks -translate-x-8 opacity-0 bg-[#ECF0F3] border-[#D0DFE6]",
    description:
      "Our team will create a design for your project that meets your goals and requirements. We will work with you to make sure the design is perfect before moving on to the next step.",
  },
  {
    icon: "Code",
    title: "Development",
    className:
      "card-item-howitworks -translate-x-8 opacity-0 bg-[#F3E5F5] border-[#E5D7E7]",
    description:
      "Our team will start developing your project based on the design we created. We will keep you updated on our progress and make sure everything is working as expected.",
  },
  {
    icon: "Rocket",
    title: "Testing",
    className:
      "card-item-howitworks -translate-x-8 opacity-0 bg-[#FEEFDB] border-[#F0DEC6]",
    description:
      "We will test your project to make sure everything is working as expected. We will fix any issues that we find and make sure your project is ready to launch.",
  },
  {
    icon: "Headset",
    title: "Launch",
    className:
      "card-item-howitworks -translate-x-8 opacity-0 bg-foreground/5 border-foreground/10",
    description:
      "We will launch your project and make sure everything is working as expected. We will work with you to make sure you are happy with the final result and provide any support you need.",
  },
];

const Icon = ({ icon, className, ...props }) => {
  const IconComponent = icons[icon];
  return <IconComponent className={cn("", className)} {...props} />;
};
const HowItWorks = () => {
  useEffect(() => {
    inView("#how-it-works", ({ target }) => {
      animate(
        target.querySelector("#badge-howitworks"),
        { opacity: 1, transform: "none" },
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      animate(
        target.querySelector("h2"),
        { opacity: 1, transform: "none" },
        { delay: 0.4, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      steps.forEach((step, index) => {
        animate(
          target.querySelector(`.card-item-howitworks:nth-child(${index + 1})`),
          { opacity: 1, transform: "none" },
          {
            delay: 0.6 + index * 0.2,
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
          }
        );
      });
    });
  }, []);
  return (
    <SectionContainer
      id="how-it-works"
      className="w-full grid grid-cols-12 text-left gap-4"
    >
      <div className="col-span-12 flex justify-center">
        <Badge
          id="badge-howitworks"
          variant="outline"
          className="-translate-y-12 opacity-0 mx-auto uppercase py-3 px-8"
        >
          How it works
        </Badge>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <h2 className="-translate-y-12 opacity-0 font-neco text-3xl md:text-4xl xl:text-5xl text-foreground">
          We lead you through <strong>every step</strong>
        </h2>
      </div>
      <div className="col-span-12 lg:col-span-6 flex flex-col gap-2">
        {steps.map((step) => (
          <Card key={step.title} className={step.className}>
            <CardHeader className="flex-row items-center gap-2">
              <Icon icon={step.icon} size={32} strokeWidth={1} />
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/60">
              {step.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default HowItWorks;
