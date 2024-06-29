import { cn } from "@/lib/utils";
import SectionContainer from "./SectionContainer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { icons } from "lucide-react";

const steps = [
  {
    icon: "Lightbulb",
    title: "Planning",
    className: "bg-[#F1F8E9] border-[#DCE7CE]",
    description:
      "We meet with your team to learn more about your project idea and goals. After that, our team will work together to create an action plan and proposal for your project.",
  },
  {
    icon: "PenTool",
    title: "Design",
    className: "bg-[#ECF0F3] border-[#D0DFE6]",
    description:
      "Our team will create a design for your project that meets your goals and requirements. We will work with you to make sure the design is perfect before moving on to the next step.",
  },
  {
    icon: "Code",
    title: "Development",
    className: "bg-[#F3E5F5] border-[#E5D7E7]",
    description:
      "Our team will start developing your project based on the design we created. We will keep you updated on our progress and make sure everything is working as expected.",
  },
  {
    icon: "Rocket",
    title: "Testing",
    className: "bg-[#FEEFDB] border-[#F0DEC6]",
    description:
      "We will test your project to make sure everything is working as expected. We will fix any issues that we find and make sure your project is ready to launch.",
  },
  {
    icon: "Headset",
    title: "Launch",
    className: "bg-foreground/5 border-foreground/10",
    description:
      "We will launch your project and make sure everything is working as expected. We will work with you to make sure you are happy with the final result and provide any support you need.",
  },
];

const Icon = ({ icon, className, ...props }) => {
  const IconComponent = icons[icon];
  return <IconComponent className={cn("", className)} {...props} />;
};
const HowItWorks = () => {
  return (
    <SectionContainer className="w-full grid grid-cols-12 text-left gap-4">
      <h2 className="font-neco text-3xl md:text-4xl xl:text-5xl text-foreground col-span-12 lg:col-span-6">
        We lead you through <strong>every step</strong>
      </h2>
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
