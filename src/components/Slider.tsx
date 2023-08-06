import { ReactNode } from "react";

interface Props {
  repeat?: number;
  gap?: number;
  children: ReactNode
};

export const Slider = ({ repeat, gap = 4, children }: Props) => {
  return (
    <div className="group flex overflow-hidden">
      {Array.from({ length: repeat ?? 3 }, () => (
        <div key={Math.random()} className={`slider shrink-0 pr-${gap}`} data-slider>
          {children}
        </div>
      ))}
    </div>
  )
}
