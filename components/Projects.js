"use client";

import SectionContainer from "./SectionContainer";
import { Badge } from "./ui/badge";
import { ParallaxSlideshow } from "./Slideshow";
import { useEffect } from "react";
import { animate, inView } from "motion";

const images = [
  "/slideshow/image-4.png",
  "/slideshow/image-2.png",
  "/slideshow/image-5.png",
  "/slideshow/image-7.png",
  "/slideshow/image-1.png",
  "/slideshow/image-3.png",
  "/slideshow/image-6.png",
];

const Projects = () => {
  useEffect(() => {
    inView("#projects", ({ target }) => {
      animate(
        target.querySelector("#badge-projects"),
        { opacity: 1, transform: "none" },
        { delay: 0.9, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      animate(
        target.querySelector("#items-projects"),
        { opacity: 1, transform: "none" },
        { delay: 1, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }, []);
  return (
    <section id="projects" className="flex flex-col relative py-16 gap-10">
      <Badge id="badge-projects" variant="outline" className="-translate-x-12 opacity-0 mx-auto uppercase py-3 px-8">
        projects
      </Badge>
      {/* <div className=""> */}
        <div id="items-projects" style={{ scrollbarWidth: 'none' }} className="opacity-0 flex gap-2 overflow-x-auto">
          <img height="500" width="1400" className="max-w-full md:h-[500px] object-contain" src="/slideshow/image-1.png" alt="project" />
          <img height="500" width="1400" className="max-w-full md:h-[500px] object-contain" src="/slideshow/image-2.png" alt="project" />
          <img height="500" width="1400" className="max-w-full md:h-[500px] object-contain" src="/slideshow/image-3.png" alt="project" />
          <img height="500" width="1400" className="max-w-full md:h-[500px] object-contain" src="/slideshow/image-4.png" alt="project" />
          <img height="500" width="1400" className="max-w-full md:h-[500px] object-contain" src="/slideshow/image-5.png" alt="project" />
          <img height="500" width="1400" className="max-w-full md:h-[500px] object-contain" src="/slideshow/image-6.png" alt="project" />
          {/* <img height="500" width="1400" className="max-w-full md:h-[500px] object-contain" src="/slideshow/image-7.png" alt="project" /> */}
          {/* <li>
          </li> */}
          {/* <li className="flex flex-col grow-0 shrink-0 basis-auto items-center justify-center">
            <img className="w-[550px] h-[450px] bg-cover" src="/slideshow/image-2.png" alt="project" />
          </li>
          <li className="flex flex-col grow-0 shrink-0 basis-auto items-center justify-center">
            <img className="w-[550px] h-[450px] bg-cover" src="/slideshow/image-3.png" alt="project" />
          </li>
          <li className="flex flex-col grow-0 shrink-0 basis-auto items-center justify-center">
            <img className="w-[550px] h-[450px] bg-cover" src="/slideshow/image-4.png" alt="project" />
          </li>
          <li className="flex flex-col grow-0 shrink-0 basis-auto items-center justify-center">
            <img className="w-[550px] h-[450px] bg-cover" src="/slideshow/image-5.png" alt="project" />
          </li>
          <li className="flex flex-col grow-0 shrink-0 basis-auto items-center justify-center">
            <img className="w-[550px] h-[450px] bg-cover" src="/slideshow/image-6.png" alt="project" />
          </li>
          <li className="flex flex-col grow-0 shrink-0 basis-auto items-center justify-center">
            <img className="w-[550px] h-[450px] bg-cover" src="/slideshow/image-7.png" alt="project" />
          </li> */}
        </div>
        {/* <ParallaxSlideshow
          images={images}
          direction="left"
          baseVelocity={45}
          autoScroll
        /> */}
      {/* </div> */}
      {/* <div className="progress fixed left-0 right-0 h-1 bg-red-500 bottom-14 scale-x-0"></div> */}
    </section>
  );
};

export default Projects;
