"use client";

import Image from "react-bootstrap/Image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../@/components/ui/3d-card";
import {Link} from "react-router-dom";

export function Projects() {

  const list=[
    {
      "Name":"Code Editor",
    },
    {
      "Name":"Tiny Seeds Landing Page",
    },
    {
      "Name":"Netflix Clone",
    },
    {
      "Name":"Disney Clone",
    },
    {
      "Name":"Memory Game",
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
                  <Image src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="Project Image" />
                </CardItem>
                <div className="flex justify-between items-center mt-[10px]">
                  {/* Hosted Link */}
                  <CardItem translateZ={20} as={Link} href="https://twitter.com/mannupaaji" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal text-white dark:text-white">View Project →</CardItem>
                  {/* Src Code */}
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">Source Code</CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))
        }
      </div>
    </div>
    
  );
}
