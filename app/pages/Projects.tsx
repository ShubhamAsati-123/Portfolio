"use client";

import React from "react";
import { motion } from "framer-motion";
import { CarouselDemo } from "../components/ProjectCarousel";

const Projects = () => {
  return (
    <section
      className="py-20"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-8 text-center">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl">
            Explore a selection of my recent work, showcasing my skills in web
            development and design.
          </p>
          <CarouselDemo />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
