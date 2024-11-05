"use client";

import Image from "react-bootstrap/Image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../@/components/ui/3d-card";
// import {a} from "react-router-dom";
import cc from "../assets/cc.png"
import lc from "../assets/lc.png"
import hr from "../assets/hr.png"

function Profiles() {

  const list=[
    {
      "Name":"CodeChef",
      "img":cc,
      "rating":"1545",
      "link":"https://www.codechef.com/users/divyasree027"
    },
    {
      "Name":"LeetCode",
      "img":lc,
      "rating":"1556",
      "link":"https://leetcode.com/u/maradadivyasree/"
    },
    {
      "Name":"HackerRank",
      "img":hr,
      "rating":"NA",
      "link":"https://www.hackerrank.com/profile/21l31A05E1",
    },
  ]

  return (
    <div className="pt-[120px]">
      <h4 className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-[length:250px_100%] leading-tight pb-2">Profiles</h4>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          list.map((li)=>(
            <CardContainer className="inter-var">
              <CardBody className="bg-white/20 backdrop-blur-md text-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white/10 dark:border-white/[0.2] border-white/30 w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                {/* Heading */}
                <CardItem translateZ="50" className="text-xl font-bold  text-white">{li.Name}</CardItem>
                {/* Image */}
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image src={li.img} height="1000" width="1000" className="h-80 w-full object-cover rounded-full group-hover/card:shadow-xl" alt="Profile Image" />
                </CardItem>
                <div className="flex flex-col justify-between items-center mt-[20px]">
                  {/* Hosted Link */}
                  <CardItem className="text-sm font-normal text-white ">Highest Rating: {li.rating}</CardItem>
                  <a translateZ={20} href={li.link} target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal text-white dark:text-white">View</a>
                  </div>
              </CardBody>
            </CardContainer>
          ))
        }
      </div>
    </div>
    
  );
}

export default Profiles
