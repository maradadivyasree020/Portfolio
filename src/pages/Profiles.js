"use client";

import Image from "react-bootstrap/Image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../@/components/ui/3d-card";
import cc from "../assets/cc.png";
import lc from "../assets/lc.png";
import hr from "../assets/hr.png";

function Profiles() {
  const list = [
    {
      Name: "CodeChef",
      img: cc,
      rating: "1545",
      link: "https://www.codechef.com/users/divyasree027",
    },
    {
      Name: "LeetCode",
      img: lc,
      rating: "1556",
      link: "https://leetcode.com/u/maradadivyasree/",
    },
    {
      Name: "HackerRank",
      img: hr,
      rating: "NA",
      link: "https://www.hackerrank.com/profile/21l31A05E1",
    },
  ];

  return (
    <div className="pt-[120px] px-6">
      {/* Heading */}
      <h4 className="text-5xl md:text-6xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mb-12">
        Profiles
      </h4>

      {/* Cards */}
      <div className="flex justify-center">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {list.map((li, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody
                className="relative group/card w-[18rem] md:w-[20rem] rounded-2xl p-[1px] 
                bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-violet-500/30 
                hover:scale-105 transition-all duration-300"
              >
                {/* Glass Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-full flex flex-col items-center justify-between">

                  {/* Title */}
                  <CardItem
                    translateZ="50"
                    className="text-xl font-semibold text-white tracking-wide"
                  >
                    {li.Name}
                  </CardItem>

                  {/* Image */}
                  <CardItem translateZ="100" className="mt-6">
                    <Image
                      src={li.img}
                      className="h-40 w-40 object-contain rounded-full shadow-lg group-hover/card:shadow-purple-500/50 transition duration-300"
                      alt="Profile"
                    />
                  </CardItem>

                  {/* Rating */}
                  <CardItem
                    translateZ="60"
                    className="mt-6 text-sm text-gray-300"
                  >
                    Highest Rating:{" "}
                    <span className="text-white font-semibold">
                      {li.rating}
                    </span>
                  </CardItem>

                  {/* Button */}
                  <CardItem translateZ="80" className="mt-4">
                    <a
                      href={li.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-sm rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
                    >
                      View Profile →
                    </a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profiles;