import SectionContainer from "./SectionContainer";
import { Badge } from "./ui/badge";
import { ParallaxSlideshow } from "./Slideshow";

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
  return (
    <SectionContainer>
      <div className="mx-auto">
        <Badge variant="outline" className="uppercase py-3 px-8">
          projects
        </Badge>
      </div>
      <div className="mx-auto bg-foreground rounded-xl relative py-4 max-h-[700px] w-full h-full overflow-hidden flex flex-col gap-6">
        <ParallaxSlideshow
          images={images}
          direction="left"
          baseVelocity={45}
          autoScroll
        />
      </div>
    </SectionContainer>
  );
};

export default Projects;
