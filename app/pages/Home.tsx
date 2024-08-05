import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="">
      <BackgroundBeams />
      <div
        className=" my-4 flex flex-col md:flex-row h-[calc(100vh-12rem)] md:min-h-[calc(100vh-7rem)]"
        id="home"
      >
        <div className="flex flex-col justify-center flex-grow space-y-4 z-20">
          <h3 className="text-3xl md:text-4xl font-mono">Hi, I&apos;m</h3>
          <span className="text-5xl md:text-7xl font-bold font-serif">
            Shubham Asati
          </span>
          <p className="text-base md:text-xl font-mono">
            I&apos;m a full stack developer. I love to build things that make a
            difference.
          </p>
          <Button className="w-32 my-10">
            <Link
              href="assets/Shubham_Asati_Resume.pdf"
              download="Shubham_Asati_Resume"
            >
              My Resume
            </Link>
          </Button>
        </div>
        <div className="Socials flex flex-row md:flex-col justify-center items-center h-16 md:h-auto md:w-20 md:space-y-4 z-20">
          <Link href="https://www.linkedin.com/in/shubham-asati-054ba124b/">
            <FaLinkedin size={36} className="hover:shadow-md" />
          </Link>
          <Link href="https://github.com/ShubhamAsati-123">
            <FaGithubSquare size={36} className="hover:shadow-md" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
