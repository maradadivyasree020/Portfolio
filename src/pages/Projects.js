// "use client";

// import Image from "react-bootstrap/Image";
// import React from "react";
// import ce from "../assets/ce.png";
// import tc from "../assets/tc.png";

// const Projects = () => {
//   const list = [
//     {
//       name: "Code Editor",
//       img: ce,
//       srccode: "https://github.com/maradadivyasree020/CodeEditor",
//       link: "https://maradadivyasree020.github.io/CodeEditor/",
//       architecture: [
//         ["User Code"],
//         ["Monaco Editor (HTML/CSS/JS Highlighting)"],
//         ["Run Trigger"],
//         ["Execution Engine"],
//         ["Validation + Output / Errors"],
//       ],
//     },
//     {
//       name: "AI Test Case Generator",
//       img: tc,
//       srccode: "https://github.com/maradadivyasree020/testcases_given",
//       link: "https://github.com/maradadivyasree020/testcases_given",
//       architecture: [
//         ["User Input", "Requirements"],
//         ["UI (Diff Viewer + Test Case Panel)"],
//         ["API Layer"],
//         ["Change Detection (Old vs New Code)"],
//         ["LLM (Generate Updated Test Cases Only)"],
//         ["Test Case Output"],
//       ],
//     },
//   ];

//   return (
//     <div className="pt-[120px] px-6 flex flex-col items-center gap-32 bg-black">
//       <h4 className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-[length:250px_100%] leading-tight pb-2">Projects</h4>
//       {list.map((project, index) => {
//         if (!project) return null;

//         return (
//           <div key={index} className="w-full max-w-6xl">

//             {/* GLASS CONTAINER */}
//             <div
//               className="
//                 w-full
//                 rounded-2xl
//                 border border-white/20
//                 bg-white/10
//                 backdrop-blur-xl
//                 shadow-2xl
//                 px-6 md:px-10 py-10
//                 min-h-[500px]
//                 flex flex-col justify-between
//               "
//             >

//               {/* TITLE */}
//               <h2 className="text-2xl md:text-3xl font-bold mb-8">
//                 {project.name}
//               </h2>

//               {/* MAIN CONTENT */}
//               <div className="flex flex-col md:flex-row justify-between items-start gap-10 flex-1">

//                 {/* LEFT IMAGE */}
//                 <div className="w-full md:w-[55%] flex justify-start">
//                   <Image
//                     src={project.img}
//                     className="w-full max-w-md rounded-xl shadow-lg"
//                     alt="Project"
//                   />
//                 </div>

//                 {/* RIGHT ARCHITECTURE */}
//                 <div className="w-full md:w-[40%] flex justify-end">
//                   <div className="flex flex-col items-center w-full max-w-xs">
// {/* 
//                     <p className="text-gray-300 mb-6 text-lg">
//                       Architecture
//                     </p> */}

//                     {/* TOP */}
//                     <div className="flex gap-3 flex-wrap justify-center">
//                       {project.architecture[0].map((item, i) => (
//                         <div key={i} className="node">{item}</div>
//                       ))}
//                     </div>

//                     <div className="line"></div>

//                     {/* MIDDLE */}
//                     {project.architecture.slice(1, -1).map((row, i) => (
//                       <React.Fragment key={i}>
//                         <div className="node">{row[0]}</div>
//                         <div className="line"></div>
//                       </React.Fragment>
//                     ))}

//                     {/* BOTTOM */}
//                     <div className="flex flex-col items-center">
//                       <div className="line"></div>

//                       <div className="flex flex-wrap justify-center gap-3">
//                         {project.architecture.at(-1).map((item, i) => (
//                           <div key={i} className="node">{item}</div>
//                         ))}
//                       </div>
//                     </div>


//                   </div>
//                 </div>

//               </div>

//               {/* BUTTONS (ALWAYS BOTTOM CENTER) */}
//               <div className="flex justify-center gap-4 mt-10">
//                 <a
//                   href={project.srccode}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-5 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition"
//                 >
//                   Code
//                 </a>

//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
//                 >
//                   Live →
//                 </a>
//               </div>

//             </div>

//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Projects;


"use client";

import Image from "react-bootstrap/Image";
import React from "react";
import ce from "../assets/ce.png";
import tc from "../assets/tc.png";

const Projects = () => {
  const list = [
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
    },
    {
      name: "AI Test Case Generator",
      img: tc,
      srccode: "https://github.com/maradadivyasree020/testcases_given",
      link: "https://github.com/maradadivyasree020/testcases_given",
      architecture: [
        ["User Input", "Requirements"],
        ["UI (Diff Viewer + Test Case Panel)"],
        ["API Layer"],
        ["Change Detection (Old vs New Code)"],
        ["LLM (Generate Updated Test Cases Only)"],
        ["Test Case Output"],
      ],
    },
  ];

  return (
    <div className="pt-[120px] px-6 flex flex-col items-center gap-32 bg-black">
      
      {/* Heading */}
      <h4 className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 pb-2">
        Projects
      </h4>

      {list.map((project, index) => {
        if (!project) return null;

        return (
          <div key={index} className="w-full max-w-6xl">

            {/* 3D CARD */}
            <div
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-6 md:px-10 py-10 min-h-[500px] flex flex-col justify-between transition-all duration-500"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.5s ease",
              }}
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

              {/* TITLE */}
              <h2
                className="text-2xl md:text-3xl font-bold mb-8 text-white"
                style={{ transform: "translateZ(30px)" }}
              >
                {project.name}
              </h2>

              {/* CONTENT */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-10 flex-1">

                {/* IMAGE */}
                <div
                  className="w-full md:w-[55%] flex justify-start"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <Image
                    src={project.img}
                    className="w-full max-w-md rounded-xl shadow-lg"
                    alt="Project"
                  />
                </div>

                {/* ARCHITECTURE */}
                <div
                  className="w-full md:w-[40%] flex justify-end"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <div className="flex flex-col items-center w-full max-w-xs">

                    {/* TOP */}
                    <div className="flex gap-3 flex-wrap justify-center">
                      {project.architecture[0].map((item, i) => (
                        <div key={i} className="node">{item}</div>
                      ))}
                    </div>

                    <div className="line"></div>

                    {/* MIDDLE */}
                    {project.architecture.slice(1, -1).map((row, i) => (
                      <React.Fragment key={i}>
                        <div className="node">{row[0]}</div>
                        <div className="line"></div>
                      </React.Fragment>
                    ))}

                    {/* BOTTOM */}
                    <div className="flex flex-col items-center">
                      <div className="line"></div>
                      <div className="flex flex-wrap justify-center gap-3">
                        {project.architecture.at(-1).map((item, i) => (
                          <div key={i} className="node">{item}</div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* BUTTONS */}
              <div
                className="flex justify-center gap-4 mt-10"
                style={{ transform: "translateZ(40px)" }}
              >
                <a
                  href={project.srccode}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition"
                >
                  Code
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
                >
                  Live →
                </a>
              </div>

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Projects;