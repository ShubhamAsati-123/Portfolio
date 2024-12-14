"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <BackgroundBeams className="opacity-20" />
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="flex flex-col space-y-6 md:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-fira-code text-blue-400">
              Hi, I&apos;m
            </h3>
            <h1 className="text-5xl md:text-7xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Shubham Asati
            </h1>
            <p className="text-lg md:text-xl font-inter text-gray-300 max-w-2xl leading-relaxed">
              A passionate full stack developer with a knack for crafting
              elegant, efficient, and user-centric digital solutions. Let&apos;s
              turn your ideas into reality!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                <Link
                  href="/assets/Shubham_Asati_Resume.pdf"
                  download="Shubham_Asati_Resume"
                >
                  Download Resume
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="Socials flex flex-row md:flex-col justify-center items-center space-x-6 md:space-x-0 md:space-y-6 mt-12 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="https://www.linkedin.com/in/shubham-asati-054ba124b/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin
                size={42}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              />
            </Link>
            <Link
              href="https://github.com/ShubhamAsati-123"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <FaGithubSquare
                size={42}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
