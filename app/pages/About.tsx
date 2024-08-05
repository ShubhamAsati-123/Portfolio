import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-24" id="about">
      <div className="my-4 min-h-[calc(100vh-8rem)] flex justify-center items-center ring-1 p-4 md:p-10 rounded-3xl drop-shadow-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:my-12">
          <div className="relative w-full h-auto">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-8 md:bottom-0 left-0 w-full h-auto scale-90 md:scale-125"
            >
              <path
                fill="#A7F0BA"
                d="M54.1,-64.9C66.7,-53.8,71.4,-33.6,74.6,-13.4C77.8,6.7,79.6,26.8,72.2,43.7C64.9,60.6,48.5,74.3,30.3,79C12.2,83.8,-7.6,79.6,-26,72.5C-44.4,65.4,-61.4,55.3,-71.2,40.2C-81.1,25.1,-83.8,4.9,-80.3,-14.1C-76.9,-33.1,-67.3,-50.9,-52.8,-61.6C-38.4,-72.4,-19.2,-76.2,0.7,-77.1C20.7,-78,41.4,-76,54.1,-64.9Z"
                transform="translate(100 100)"
              />
            </svg>
            <div className="flex justify-center items-end w-full">
              <Image
                src="/images/shubhamasati.png"
                alt="Shubham Asati Photo"
                width={1080}
                height={800}
                className="relative w-3/4 md:w-full h-auto"
              />
            </div>
          </div>

          <div className="my-4 md:my-6 mx-2 md:mx-10 flex flex-col gap-4 md:gap-10">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight">
              About Me
            </h2>
            <p className="prose-md md:prose-2xl font-serif ">
              I am a Full Stack Developer with expertise in both frontend and
              backend technologies. My journey in the tech world started with a
              fascination for how things work on the web, which led me to pursue
              a career in web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
