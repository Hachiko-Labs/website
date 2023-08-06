import { useStore } from "@nanostores/react";
import { Check } from 'lucide-react';

import { isChecked } from "../store/isChecked";
import { Fragment } from "react";

interface Props {
  plan: string;
  price: number;
  items: string[];
  highlight?: boolean;
}

export const PricingCard = ({ plan, description, price, items, highlight }: Props) => {
  const isYearly = useStore(isChecked);

  return (
    <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
      <div className="p-8 bg-slate-50 border-2 border-neutral-300 rounded-3xl">
        <h4 className="mb-2 text-xl font-bold font-heading text-neutral text-left">
          {plan}
        </h4>
        <div className="flex justify-start items-end">
          {price >= 0 ? (
            <Fragment>
              <div className="text-4xl sm:text-5xl font-bold text-neutral text-left mt-4 mr-2">
                ${!isYearly ? price : Number(price / 1.12).toFixed(0)}
              </div>
              <div className="text-neutral-600">/ month</div>
            </Fragment>
          ) : (
            <div className="text-3xl sm:text-4xl font-bold text-neutral text-left mr-2">
              Custom
            </div>
          )}
        </div>

        <p className={`${highlight ? "mt-8 mb-8 2xl:mb-12" : "mt-4 mb-6 2xl:mb-10"} text-neutral-500 leading-loose text-left`}>
          {description}
        </p>
        <ul className={`${highlight ? "mb-14" : "mb-2 2xl:mb-6"} text-neutral`}>
          {items.map((text, index) => (
            <li className="mb-4 flex items-center gap-2" key={`${text}-${index}`}>
              <Check className="text-primary" size={18} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <div
          className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl bg-primary text-white cursor-pointer font-bold leading-loose mt-16"
        >
          Get Started
        </div>
      </div>
    </div>
  );
};
