import Image from "react-bootstrap/Image";
import React from "react";
import { motion } from "framer-motion";
import ce from "../assets/ce.png";
import tc from "../assets/tc.png";
import url from "../assets/url.png";

const Projects = () => {
  const list = [
    {
      name: "AI Test Case Generator",
      img: tc,
      srccode: "https://github.com/maradadivyasree020/testcases_given",
      link: "https://github.com/maradadivyasree020/testcases_given",
      architecture: [
        ["User Input", "Requirements"],
        ["UI (Diff Viewer + Test Case Panel)"],
        ["API Layer"],
        ["Change Detection"],
        ["LLM (Generate Updated Test Cases)"],
        ["Test Case Output"],
      ],
    },
    {
      name: "URL Shortener Service",
      img: url,
      srccode: "https://github.com/maradadivyasree020/UrlShortner",
      link: "https://github.com/maradadivyasree020/UrlShortner",
      architecture: [
        ["User Input", "Long URL"],
        ["UI / Client"],
        ["API Layer (Spring Boot)"],
        ["Short URL Generation (MurmurHash + Timestamp)"],
        ["Database (MySQL - URL Mapping)"],
        ["Short URL Response"],
        ["Redirection (Short URL → Original URL)"],
        ["Expiration Check (Default / Custom Time)"],
      ],
    },
    {
      name: "Code Editor",
      img: ce,
      srccode: "https://github.com/maradadivyasree020/CodeEditor",
      link: "https://maradadivyasree020.github.io/CodeEditor/",
      architecture: [
        ["User Code"],
        ["Monaco Editor (HTML/CSS/JS Highlighting)"],
        ["Run Trigger"],
        ["Execution Engine"],
        ["Validation + Output / Errors"],
      ],
    }
  ];

  return (
    <div className="pt-[120px] px-6 flex flex-col items-center gap-32 bg-black">

      <motion.h4
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 pb-2"
      >
        Projects
      </motion.h4>

      {list.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="w-full max-w-6xl"
        >
          <div
            className="rounded-2xl border border-white/20 
            bg-gradient-to-br from-purple-500/10 via-white/5 to-pink-500/10
            backdrop-blur-xl shadow-2xl px-6 md:px-10 py-10 min-h-[500px] 
            flex flex-col justify-between transition-all duration-500 
            hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
            style={{ transformStyle: "preserve-3d" }}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const rotateY = (x / rect.width - 0.5) * 10;
              const rotateX = (0.5 - y / rect.height) * 10;

              card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
            }}
          >

            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              {project.name}
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-start gap-10 flex-1">

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[55%]"
              >
                <Image
                  src={project.img}
                  className="w-full max-w-xl rounded-xl shadow-xl hover:scale-105 transition"
                  alt="Project"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[40%]"
              >
                <div className="flex flex-col items-center w-full max-w-xs">

                  <div className="flex gap-3 flex-wrap justify-center">
                    {project.architecture[0].map((item, i) => (
                      <div key={i} className="node">{item}</div>
                    ))}
                  </div>

                  <div className="line"></div>

                  {project.architecture.slice(1, -1).map((row, i) => (
                    <React.Fragment key={i}>
                      <div className="node">{row[0]}</div>
                      <div className="line"></div>
                    </React.Fragment>
                  ))}

                  <div className="flex flex-wrap justify-center gap-3 mt-2">
                        {project.architecture.at(-1).map((item, i) => (
                          <motion.div key={i} className="node"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item}
                          </motion.div>
                        ))}
                  </div>

                </div>
              </motion.div>

            </div>

            <div className="flex justify-center gap-4 mt-10">

              <a
                href={project.srccode}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-lg border border-white/30 
                text-white hover:bg-white/10 transition hover:scale-105"
              >
                Code
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 hover:scale-105 transition"
              >
                Live →
              </a>
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;