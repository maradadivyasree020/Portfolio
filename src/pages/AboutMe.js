import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="px-6 mt-[120px] flex flex-col items-center">

      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-center mb-12"
      >
        About Me
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg mb-10"
      >
        <p className="text-lg md:text-lg text-gray-300 leading-relaxed">
          I am an <span className="text-purple-400 font-semibold">Associate Software Engineer</span> focused on 
          building <span className="text-white font-semibold">scalable backend systems</span> and 
          <span className="text-pink-400 font-semibold"> AI-driven applications</span>.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg 
          hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
        >
          <h5 className="text-xl font-semibold text-purple-400 mb-4">
            🚀 Projects
          </h5>

          <p className="text-gray-300 text-sm leading-relaxed">
            Built applications including a 
            <span className="text-white font-semibold"> Code Editor</span>, 
            <span className="text-white font-semibold"> Real-time Chat Application</span>, and an 
            <span className="text-white font-semibold"> AI-powered Test Case Generator</span>, 
            along with other full-stack and AI-driven projects, focusing on performance, scalability, and clean architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg 
          hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
        >
          <h5 className="text-xl font-semibold text-pink-400 mb-4">
            🤖 Generative AI
          </h5>

          <p className="text-gray-300 text-sm leading-relaxed">
            Developed a 
            <span className="text-purple-400 font-semibold"> RAG-based system</span> integrating 
            <span className="text-white font-semibold"> LLMs</span>, embeddings, and vector databases 
            to generate context-aware outputs and enable intelligent retrieval.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg 
          hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
        >
          <h5 className="text-xl font-semibold text-purple-400 mb-4">
            💼 Experience
          </h5>

          <p className="text-gray-300 text-sm leading-relaxed">
            Currently working at 
            <span className="text-white font-semibold"> Emids</span>, building 
            <span className="text-purple-400 font-semibold"> AI-enabled backend systems</span> using 
            <span className="text-white font-semibold"> Java Spring Boot</span>, 
            designing REST APIs and integrating LLM-based solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg 
          hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
        >
          <h5 className="text-xl font-semibold text-pink-400 mb-4">
            🎯 Focus
          </h5>

          <p className="text-gray-300 text-sm leading-relaxed">
            Passionate about combining 
            <span className="text-white font-semibold"> backend engineering</span> with 
            <span className="text-pink-400 font-semibold"> Generative AI</span> to build 
            scalable, impactful, and production-ready systems.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutMe;