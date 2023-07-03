import { useState } from "react";

const FAQData = [
  {
    question: "What is Hachiko Labs?",
    answer:
      "Yes, you can easily upgrade or downgrade your plan at any time. Simply navigate to the account settings in your dashboard and choose the desired plan. The changes will be reflected immediately, and any adjustments in pricing will be applied on your next billing cycle. Our support team is more than happy to provide guidance and recommendations.",
  },
  {
    question: "How is Hachiko Labs different from other remote job marketplaces?",
    answer:
      "To claim your 25% discount, simply sign up for an account and enter the promotional code at checkout. The discount will be applied automatically to your purchase.",
  },
  {
    question: "How can I get paid in USD while working outside of the US?",
    answer:
      "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our product, simply contact our support team within 30 days of purchase for a full refund.",
  },
  {
    question: "What kind of companies does Hachiko Labs partner with?",
    answer:
      "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
      <div className="md:max-w-4xl mx-auto">
        <p className="mb-7 text-xs text-neutral-500  tracking-wider font-bold uppercase text-center">
          Have any questions?
        </p>
        <h2 className="mb-16 text-neutral text-4xl xl:text-5xl font-bold tracking-normal text-center">
          FAQs
        </h2>
        <div className="mb-11 flex flex-wrap -m-1">
          {FAQData.map((item, index) => (
            <div className="w-full p-1" key={`${item.question}-${item.answer}`}>
              <FAQBox
                title={item.question}
                content={item.answer}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8 rounded-xl border border-solid border-neutral-border mb-4 relative cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className="text-neutral font-bold text-lg pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-neutral-500 pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-neutral-200 absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#6E7191"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
