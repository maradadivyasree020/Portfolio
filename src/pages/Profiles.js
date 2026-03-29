import Image from "react-bootstrap/Image";
import React from "react";
import { motion } from "framer-motion";
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

      <motion.h4
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mb-16"
      >
        Profiles
      </motion.h4>

      <div className="flex justify-center">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {list.map((li, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CardContainer className="inter-var">
                <CardBody
                  className="relative group/card w-[18rem] md:w-[20rem] rounded-2xl p-[1px] 
                  bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20
                  hover:scale-105 transition-all duration-300 
                  hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
                >

                  <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-full flex flex-col items-center justify-between">

                    <CardItem
                      translateZ="60"
                      className="text-xl font-semibold text-white tracking-wide"
                    >
                      {li.Name}
                    </CardItem>

                    <CardItem translateZ="100" className="mt-6">
                      <div className="p-[3px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                        <Image
                          src={li.img}
                          className="h-36 w-36 object-contain rounded-full bg-black p-3"
                          alt="Profile"
                        />
                      </div>
                    </CardItem>

                    <CardItem
                      translateZ="70"
                      className="mt-6 text-sm text-gray-300"
                    >
                      Highest Rating
                    </CardItem>

                    <CardItem translateZ="80">
                      <span className="px-4 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
                        {li.rating}
                      </span>
                    </CardItem>

                    <CardItem translateZ="100" className="mt-6">
                      <a
                        href={li.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 text-sm rounded-full border border-white/30 
                        hover:bg-white/10 text-white font-medium 
                        hover:scale-105 transition duration-300"
                      >
                        View Profile →
                      </a>
                    </CardItem>

                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Profiles;