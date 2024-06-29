"use client";

import {
  motion,
  useAnimationControls,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

const DEFAULT_DURATION = 40;

export const Slideshow = ({
  images,
  direction = "left",
  autoScroll = true,
}) => {
  let [ref, { width }] = useMeasure();
  const controls = useAnimationControls();

  useEffect(() => {
    if (!width) return;

    const totalWidth = images.length * (200 + 16); // 200px for image width, 16px for gap
    const startPosition = direction === "left" ? 0 : -totalWidth;
    const endPosition = direction === "left" ? -totalWidth : 0;

    const animate = async () => {
      if (autoScroll) {
        await controls.start({
          x: endPosition,
          transition: {
            duration: DEFAULT_DURATION,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      } else {
        controls.stop();
      }
    };

    controls.set({ x: startPosition });
    animate();
  }, [controls, width, direction, images.length, autoScroll]);

  return (
    <motion.div className="flex gap-4" animate={controls} ref={ref}>
      {[...images, ...images].map((item, idx) => (
        <div
          key={`${item}-${idx}`}
          className="relative overflow-hidden h-[390px] min-w-[520px] bg-slate-400 rounded-xl flex justify-center items-center"
        >
          <Image src={item} alt={item} fill style={{ objectFit: "cover" }} />
        </div>
      ))}
    </motion.div>
  );
};

export const ParallaxElement = ({ children, baseVelocity = 100 }) => {
  const { scrollY, scrollYProgress } = useScroll();
  const baseX = useMotionValue(0);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${-baseVelocity}%`]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      baseX.set(latest * (baseVelocity / 1000));
    });
  }, [scrollY, baseVelocity, baseX]);

  return (
    <motion.div className="scroller" style={{ x }}>
      {children}
    </motion.div>
  );
};

export const ParallaxSlideshow = ({
  images,
  direction = "left",
  baseVelocity = 100,
  autoScroll = true,
}) => {
  return (
    <ParallaxElement baseVelocity={baseVelocity}>
      <Slideshow
        images={images}
        direction={direction}
        autoScroll={autoScroll}
      />
    </ParallaxElement>
  );
};

export default ParallaxSlideshow;
