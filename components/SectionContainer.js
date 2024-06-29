import { cn } from "@/lib/utils";

export default function SectionContainer({ children, className, ...props }) {
  return (
    <section
      className={cn(
        "mx-auto flex px-10 w-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex-col gap-2 py-3 md:py-6 md:pb-8 lg:py-12 lg:pb-10",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
