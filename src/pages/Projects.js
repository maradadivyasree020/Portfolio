"use client";

import Image from "react-bootstrap/Image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../@/components/ui/3d-card";
import ce from "../assets/ce.png"
import lp from "../assets/lp.png"
import nc from "../assets/nc.png"
import dc from "../assets/dc.png"
import mg from "../assets/mg.png"

const Projects = () => {
  const list=[
    {
      "Name":"Code Editor",
      "img":ce,
      "srccode":"https://github.com/maradadivyasree020/CodeEditor",
      "link":"https://maradadivyasree020.github.io/CodeEditor/",
    },
    {
      "Name":"Tiny Seeds Landing Page",
      "img":lp,
      "srccode":"https://github.com/maradadivyasree020/landing_mern",
      "link":"https://landing-mern.vercel.app/",
    },
    {
      "Name":"Netflix Clone",
      "img":nc,
      "srccode":"https://github.com/maradadivyasree020/Netflix_clone",
      "link":"https://netflix-clone-gules-ten.vercel.app/",
    },
    {
      "Name":"Disney Clone",
      "img":dc,
      "srccode":"https://github.com/maradadivyasree020/disney-clone",
      "link":"https://disneyclone-beta.vercel.app/",
    },
    {
      "Name":"Memory Game",
      "img":mg,
      "srccode":"https://github.com/maradadivyasree020/MemoryGame",
      "link":"https://maradadivyasree020.github.io/MemoryGame/",
    },
  ]

  return (
    <div className="pt-[120px]">
      <h4 className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-[length:250px_100%] leading-tight pb-2">Projects</h4>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          list.map((li)=>(
            <CardContainer className="inter-var">
              <CardBody className="bg-white/20 backdrop-blur-md text-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white/10 dark:border-white/[0.2] border-white/30 w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                {/* Heading */}
                <CardItem translateZ="50" className="text-xl font-bold  text-white">{li.Name}</CardItem>
                {/* Image */}
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image src={li.img} height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Project Image" />
                </CardItem>
                <div className="flex justify-between items-center mt-[10px]">
                  {/* Src Code */}
                  <a translateZ={20} href={li.srccode} target="__blank" className="px-4 py-2 rounded-xl text-lg font-normal text-white dark:text-white">View Code</a>
                  {/* Hosted Link */}
                  <a translateZ={20} href={li.link} target="__blank" className="px-4 py-2 rounded-xl text-lg font-normal text-white dark:text-white">View Project →</a>
                  </div>
              </CardBody>
            </CardContainer>
          ))
        }
      </div>
    </div>
    
  );
}

export default Projects
