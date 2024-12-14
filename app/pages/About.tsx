"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: FaCode, color: "text-blue-400" },
    { name: "Backend Development", icon: FaServer, color: "text-green-400" },
    {
      name: "Mobile App Development",
      icon: FaMobileAlt,
      color: "text-yellow-400",
    },
    { name: "Database Management", icon: FaDatabase, color: "text-purple-400" },
  ];

  const experiences = [
    {
      title: "Frontend Deeveloper",
      company: "Geometrack",
      duration: "Jan 2024 - Feb 2024",
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Indian Institute of Information Technology Pune",
      year: "2018",
    }
  ];

  return (
    <section
      className="py-20"
      id="about"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-between gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="lg:w-2/5"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="relative">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-10 -left-10 w-full h-auto scale-150 text-blue-500 opacity-30"
              >
                <path
                  fill="currentColor"
                  d="M54.1,-64.9C66.7,-53.8,71.4,-33.6,74.6,-13.4C77.8,6.7,79.6,26.8,72.2,43.7C64.9,60.6,48.5,74.3,30.3,79C12.2,83.8,-7.6,79.6,-26,72.5C-44.4,65.4,-61.4,55.3,-71.2,40.2C-81.1,25.1,-83.8,4.9,-80.3,-14.1C-76.9,-33.1,-67.3,-50.9,-52.8,-61.6C-38.4,-72.4,-19.2,-76.2,0.7,-77.1C20.7,-78,41.4,-76,54.1,-64.9Z"
                  transform="translate(100 100)"
                />
              </svg>
              <Image
                src="/images/shubhamasati.png"
                alt="Shubham Asati"
                width={500}
                height={500}
                className="relative rounded-2xl "
              />
            </div>
            <motion.div
              className="mt-32 bg-gray-800 rounded-lg p-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h3 className="text-2xl font-semibold font-playfair text-white mb-4">
                Key Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-2 ${skill.color}`}
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <skill.icon className="w-5 h-5" />
                    <span className="text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-3/5 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-4">
                As a passionate Full Stack Developer, I thrive on creating
                seamless, user-centric digital experiences. My journey in the
                tech world began with a curiosity about the inner workings of
                the web, which has since evolved into a deep-seated expertise in
                both frontend and backend technologies.
              </p>
              <p className="text-lg text-gray-300 font-inter leading-relaxed">
                With a strong foundation in computer science and a continuous
                learning mindset, I stay at the forefront of technological
                advancements. My goal is to leverage my skills to build
                innovative solutions that not only meet but exceed user
                expectations, creating impactful digital experiences that
                resonate with end-users and clients alike.
              </p>
            </div>

            <motion.div
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h3 className="text-2xl font-semibold font-playfair text-white mb-4">
                <FaBriefcase className="inline-block mr-2 text-blue-400" />
                Professional Experience
              </h3>
              {experiences.map((exp, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="text-xl font-semibold text-blue-400">
                    {exp.title}
                  </h4>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.duration}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h3 className="text-2xl font-semibold font-playfair text-white mb-4">
                <FaGraduationCap className="inline-block mr-2 text-green-400" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="text-xl font-semibold text-green-400">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.year}</p>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="/assets/Shubham_Asati_Resume.pdf"
              download="Shubham_Asati_Resume"
              className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 text-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download Full Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
