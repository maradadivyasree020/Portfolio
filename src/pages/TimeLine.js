import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const Timeline = () => {
  return (
    <div className="mt-[150px] px-6 flex flex-col items-center">

      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mb-20"
      >
        Timeline
      </motion.h4>

      <div className="relative w-full max-w-5xl">

        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-violet-500 -translate-x-1/2" />

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex justify-start w-full md:w-1/2 pr-8"
        >
          <div className="relative w-full">

            <div className="absolute -right-4 top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg">
              
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FaGraduationCap className="text-purple-400" />
                B.Tech
              </h3>

              <p className="text-gray-300 mt-2">
                Vignan's Institute of Information Technology
              </p>

              <p className="text-purple-400 mt-2 text-sm">
                2021 – 2025
              </p>

              <p className="mt-4 text-sm text-gray-300">
                Built a strong foundation in programming, data structures, and software development.
              </p>

            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex justify-end w-full md:w-1/2 ml-auto pl-8"
        >
          <div className="relative w-full">

            <div className="absolute -left-4 top-6 w-4 h-4 bg-pink-500 rounded-full border-4 border-black"></div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg">
              
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FaBriefcase className="text-pink-400" />
                Associate Software Engineer
              </h3>

              <p className="text-gray-300 mt-2">
                Emids Technologies
              </p>

              <p className="text-purple-400 mt-2 text-sm">
                June 2025 – Present
              </p>

              <ul className="mt-4 text-gray-300 text-sm space-y-2 list-disc list-inside">
                <li>Developed scalable REST APIs using Spring Boot</li>
                <li>Built RAG-based test case generator using LLMs & vector DB</li>
                <li>Implemented unit testing using JUnit for reliability</li>
              </ul>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Timeline;