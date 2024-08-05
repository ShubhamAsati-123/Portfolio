import React from "react";
import { CarouselDemo } from "../components/ProjectCarousel";

const Projects = () => {
  return (
    <div className="pt-24" id="projects">
      <div className="my-4 min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center ring-1 p-2 md:p-10 rounded-3xl drop-shadow-lg shadow-lg">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight mb-4 md:mb-8">
          Projects
        </h2>
        <div className="px-8">
          <CarouselDemo />
        </div>
      </div>
    </div>
  );
};

export default Projects;
