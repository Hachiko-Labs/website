"use client";

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
import triggerScheduleCall from "@/lib/capi";
import { animate, inView } from "motion";
import { useEffect } from "react";

const plans = [
  {
    title: "Basic Plan",
    description:
      "Ideal for startups or small projects requiring essential design and development services.",
    price: "$1,600",
    discount: "$1,120",
    frequency: "Bi-Weekly",
    payment_link: "https://buy.stripe.com/00g29Q8v1fNpaZybII",
    features: [
      "One revision per month",
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
    price: "$2,800",
    discount: "$1,960",
    frequency: "Bi-Weekly",
    payment_link: "https://buy.stripe.com/4gwcOu6mTbx91oYaEF",
    features: [
      "Two revisions per month",
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
  useEffect(() => {
    inView("#pricing", ({ target }) => {
      animate(
        target.querySelector("#badge-pricing"),
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
    <SectionContainer id="pricing" className="w-full text-left gap-9">
      <div className="mx-auto">
        <Badge
          id="badge-pricing"
          variant="outline"
          className="-translate-y-12 opacity-0 uppercase py-1 px-4 sm:py-3 sm:px-8"
        >
          Pricing
        </Badge>
      </div>
      <h2 className="-translate-y-12 opacity-0 max-w-xl font-neco text-3xl md:text-4xl xl:text-5xl text-foreground">
        We&apos;ve got a plan that&apos;s <strong>Perfect for You</strong>
      </h2>
      <div className="grid grid-cols-12 gap-4">
        {plans.map((plan) => (
          <Card
            key={plan.title}
            className="-translate-x-8 opacity-0 card-item col-span-12 md:col-span-6 lg:col-span-4 bg-muted"
          >
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>{plan.title}</span>
                {plan.popular && <Badge variant="third">Popular</Badge>}
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  {plan.frequency ? (
                    <>
                      <div className="flex flex-col">
                        {/* Original price and discounted price */}
                        <span className="text-foreground text-2xl md:text-3xl xl:text-4xl font-bold">
                          {plan.discount}
                        </span>
                        <span className="text-foreground/60 text-sm md:text-lg xl:text-xl line-through">
                          {plan.price}
                        </span>
                      </div>
                      <span className="text-foreground/60 text-sm md:text-lg xl:text-xl">
                        {plan.frequency}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-foreground text-2xl md:text-3xl xl:text-4xl font-bold">
                        {plan.price}
                      </span>
                    </>
                  )}
                </div>
                <div>
                  <Link
                    href={plan.payment_link || "/"}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full rounded-lg"
                    )}
                  >
                    Get Started
                  </Link>
                  <Link
                    href={config.scheduleLink}
                    onClick={async () => {
                      await triggerScheduleCall();
                    }}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "w-full rounded-lg mt-2"
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
