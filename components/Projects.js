"use client";

import Image from "next/image";
import { Button } from "./ui/button";

const Projects = () => {
    return (
        <section class="w-screen flex flex-col items-center justify-center px-48 pt-16 gap-8">
                <Button className="px-12" variant="outline">projects</Button>
                <Image width={1200} height={100} src="/projects.png" />
        </section>
    )
};

export default Projects;