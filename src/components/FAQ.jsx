import { useState } from "react";

const FAQData = [
  {
    question: "What is Hachiko Labs?",
    answer:
      "Hachiko Labs is a cutting-edge staffing solutions provider that bridges the gap between top talent and companies. Our mission is to make it effortless for individuals to find their dream jobs and for companies to discover their dream teams through innovative technology. We are committed to simplicity, innovation, fairness, quality, speed, transparency, and caring, and our vision is to be the leading provider of staffing solutions worldwide.",
  },
  {
    question:
      "How is Hachiko Labs different from other remote job marketplaces?",
    answer:
      "Hachiko Labs stands out from other remote job marketplaces with its cutting-edge technology, which simplifies the process of connecting top talent with great companies. Our focus on innovation, fairness, quality, and speed sets us apart, ensuring a transparent and caring platform that bridges the gap between top talent and companies seeking their dream teams.",
  },
  {
    question: "How can I get paid in USD while working outside of the US?",
    answer:
      "To get paid in USD while working outside of the US, you can negotiate your salary with our partners, and we'll pay 100% of it. We use platforms like Wise or Deel to facilitate payments according to your needs. Please note that you'll be responsible for handling local taxes, and we recommend consulting a tax professional in your country for guidance.",
  },
  {
    question: "What kind of companies does Hachiko Labs partner with?",
    answer:
      "Hachiko Labs primarily partners with startups located in the United States and the Americas. We aim to connect top talent with forward-thinking companies, fostering innovation and growth in the region's business landscape. Our focus on working with startups ensures exciting opportunities for both talent and companies looking to take their teams to the next level.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 overflow-hidden" id="FAQ-Box">
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
              <FAQBox title={item.question} content={item.answer} />
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
