"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import SectionContainer from "./SectionContainer";
import { Badge } from "./ui/badge";

const Projects = () => {
  return (
    <SectionContainer>
      <div className="mx-auto">
        <Badge variant="outline" className="uppercase py-3 px-8">projects</Badge>
      </div>
      <Image width={1200} height={100} src="/projects.png" />
    </SectionContainer>
  );
};

export default Projects;
