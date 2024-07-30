import { Check } from "lucide-react";
import SectionContainer from "./SectionContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import config from "@/config";

const plans = [
  {
    title: "Basic Plan",
    description:
      "Ideal for startups or small projects requiring essential design and development services.",
    price: "$2,000",
    frequency: "Bi-Weekly",
    payment_link: "https://buy.stripe.com/00g29Q8v1fNpaZybII",
    features: [
      "One request at a time",
      "Dedicated Full-Stack developer",
      "User friendly UI/UX designs",
      "Async communication",
      "No scopes, no quotes, no billable hours",
      "Pause or cancel anytime",
    ],
  },
  {
    title: "Business Plan",
    description:
      "Suitable for growing businesses needing more comprehensive support and faster turnaround times.",
    popular: true,
    price: "$3,500",
    frequency: "Bi-Weekly",
    payment_link: "https://buy.stripe.com/4gwcOu6mTbx91oYaEF",
    features: [
      "Two request at a time",
      "Dedicated development team",
      "User friendly UI/UX designs",
      "Async communication",
      "No scopes, no quotes, no billable hours",
      "Pause or cancel anytime",
    ],
  },
  {
    title: "Custom Plan",
    description:
      "Best for larger enterprises or complex projects requiring extensive resources and continuous development.",
    price: "Contact",
    frequency: "",
    payment_link: config.scheduleLink,
    features: [
      "Three request at a time",
      "Dedicated development team",
      "User friendly UI/UX designs",
      "Async communication",
      "No scopes, no quotes, no billable hours",
      "Pause or cancel anytime",
    ],
  },
];

const Pricing = () => {
  return (
    <SectionContainer className="w-full text-left gap-9">
      <div className="mx-auto">
        <Badge
          variant="outline"
          className="uppercase py-1 px-4 sm:py-3 sm:px-8"
        >
          Pricing
        </Badge>
      </div>
      <h2 className="max-w-xl font-neco text-3xl md:text-4xl xl:text-5xl text-foreground">
        We&apos;ve got a plan that&apos;s <strong>Perfect for You</strong>
      </h2>
      <div className="grid grid-cols-12 gap-4">
        {plans.map((plan) => (
          <Card key={plan.title} className="col-span-12 md:col-span-6 lg:col-span-4 bg-muted">
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>{plan.title}</span>
                {plan.popular && <Badge variant="third">Popular</Badge>}
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-end gap-2">
                  <span className="text-foreground text-5xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-foreground/60 text-sm md:text-lg xl:text-xl">
                    {plan.frequency}
                  </span>
                </div>
                <div>
                  <Link
                    href={plan.payment_link || "/"}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full rounded-lg",
                    )}
                  >
                    Get Started
                  </Link>
                  <Link
                    href={config.scheduleLink}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "w-full rounded-lg mt-2",
                    )}
                  >
                    Book a call
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-foreground text-xl font-bold">Features</h2>
                <div className="flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="flex w-5 h-5 items-center justify-center bg-primary rounded-full">
                        <Check className="text-background" size={14} />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Pricing;
