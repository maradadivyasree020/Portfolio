import React from "react";
import { motion } from "framer-motion";
import {FaJava,FaReact,FaGitAlt,FaDatabase} from "react-icons/fa";
import {SiSpringboot,SiJavascript,SiPython,SiMysql,SiPostman} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      title: "Programming Languages",
      icon: <FaJava className="text-3xl text-purple-400 mb-3 mx-auto" />,
      items: ["Java", "Python", "C++", "C"]
    },
    {
      title: "Backend & Frameworks",
      icon: <SiSpringboot className="text-3xl text-purple-400 mb-3 mx-auto" />,
      items: ["Spring Boot", "REST APIs"]
    },
    {
      title: "Frontend",
      icon: <FaReact className="text-3xl text-purple-400 mb-3 mx-auto" />,
      items: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-3xl text-purple-400 mb-3 mx-auto" />,
      items: ["MySQL","SQL"]
    },
    {
      title: "Testing",
      icon: <SiPostman className="text-3xl text-purple-400 mb-3 mx-auto" />,
      items: ["JUnit", "Mockito"]
    },
    {
      title: "Generative AI",
      icon: <SiPython className="text-3xl text-purple-400 mb-3 mx-auto" />,
      items: [
        "RAG",
        "LLM Integration",
        "Prompt Engineering",
        "Embeddings",
        "Semantic Search",
        "Vector Databases"
      ]
    },
    {
      title: "Tools",
      icon: <FaGitAlt className="text-3xl text-purple-400 mb-3 mx-auto" />,
      items: ["Git", "GitHub", "Postman"]
    }
  ];

  const featuredSkills = [
    "Java",
    "Spring Boot",
    "REST APIs",
    "RAG",
    "LLM Integration"
  ];

  return (
    <div className="mt-[120px] px-6">

      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mb-10"
      >
        Skills
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center gap-4 flex-wrap mb-10"
      >
        {featuredSkills.map((skill, i) => (
          <span
            key={i}
            className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-md hover:scale-105 transition"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Currently working on{" "}
        <span className="text-purple-400 font-semibold">
          AI-powered RAG systems
        </span>{" "}
        and scalable backend services using{" "}
        <span className="text-white font-semibold">Spring Boot</span>.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg 
            hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition duration-300"
          >
            {skill.icon}

            <h5 className="text-lg md:text-xl font-semibold text-purple-400 mb-4 text-center">
              {skill.title}
            </h5>

            <div className="flex flex-wrap justify-center gap-3">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full 
                  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-105 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Skills;