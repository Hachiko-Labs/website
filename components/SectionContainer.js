import { cn } from "@/lib/utils";

export default function SectionContainer({ children, className, ...props }) {
  return (
    <section
      className={cn(
        "mx-auto flex max-w-screen-xl flex-col gap-2 py-3 md:py-6 md:pb-8 lg:py-12 lg:pb-10",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
