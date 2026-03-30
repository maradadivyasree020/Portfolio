import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center h-screen px-4 overflow-hidden bg-black text-white">

      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full px-6"
      >

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg mb-4"
        >
          Hi, I'm
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="inline-block max-w-[90%] md:max-w-[1000px]
          rounded-2xl border border-white/10 
          bg-white/5 backdrop-blur-xl 
          shadow-[0_0_30px_rgba(168,85,247,0.15)]
          px-8 py-6"
        >

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center 
            bg-gradient-to-r from-purple-300 via-violet-400 to-pink-300 
            bg-clip-text text-transparent">

            <Typewriter
              options={{
                strings: [
                  "Marada Divya Sree",
                  "Backend Engineer",
                  "Java Developer",
                  "AI Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                pauseFor: 1500,
              }}
            />

          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-gray-400 max-w-xl text-sm md:text-base leading-relaxed"
        >
          Building scalable backend systems and AI-powered solutions using{" "}
          <span className="text-white font-semibold">Java Spring Boot</span>{" "}
          and{" "}
          <span className="text-purple-300 font-semibold">
            Generative AI
          </span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 
            text-white font-medium hover:scale-105 hover:shadow-lg 
            transition cursor-pointer"
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-xl border border-white/20 
            bg-white/10 backdrop-blur-md text-white 
            hover:bg-white/20 transition"
          >
            Download Resume
          </a>

        </motion.div>

      </motion.div>

      {/* 🖱 Scroll Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center text-gray-400 animate-bounce">
        <span className="text-sm mb-2">Scroll</span>
        <div className="w-5 h-9 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 mt-2 rounded-full"></div>
        </div>
      </div>

    </div>
  );
};

export default Header;