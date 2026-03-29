import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 flex flex-col items-center max-w-[900px]">

        <p className="text-gray-400 text-lg mb-2">
          Hi, I'm
        </p>

        <div className="w-full flex justify-center min-h-[100px]">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center 
          bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500 
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
                delay: 60,
                deleteSpeed: 40,
              }}
            />

          </h1>
        </div>

        <p className="mt-6 text-gray-400 max-w-xl text-sm md:text-base">
          Building scalable backend systems and AI-powered solutions using{" "}
          <span className="text-white font-semibold">Java Spring Boot</span>{" "}
          and{" "}
          <span className="text-purple-400 font-semibold">
            Generative AI
          </span>.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition cursor-pointer"
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition"
          >
            Download Resume
          </a>

        </div>

      </div>

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