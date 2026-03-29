import React from "react";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin
} from "@tabler/icons-react";

export function Fotter() {
  const links = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-7 w-7" />,
      href: "https://github.com/maradadivyasree020",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-7 w-7" />,
      href: "https://www.linkedin.com/in/marada-divya-sree-72b164255/",
    },
    {
      title: "Gmail",
      icon: <IconBrandGmail className="h-7 w-7" />,
      href: "mailto:maradadivyasree@gmail.com",
    },
  ];

  return (
    <div className="mt-[150px] px-6 pb-16 flex flex-col items-center">

      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-white mb-4"
      >
        Let’s Connect
      </motion.h4>

      <p className="text-gray-400 text-center mb-10 max-w-md">
        Feel free to reach out for collaborations, opportunities, or just a chat about tech 🚀
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-6 p-4 rounded-full 
        bg-gradient-to-r from-purple-500/10 via-white/5 to-pink-500/10 
        backdrop-blur-xl border border-white/20 shadow-lg"
      >
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
            className="group relative flex items-center justify-center h-12 w-12 rounded-full 
            text-white hover:scale-110 transition duration-300"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-md transition"></div>

            <div className="relative z-10">
              {link.icon}
            </div>

            <span className="absolute bottom-[-2.2rem] text-xs bg-black text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
              {link.title}
            </span>
          </a>
        ))}
      </motion.div>

      <div className="w-full max-w-md h-[1px] bg-white/10 my-10"></div>

      <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
        Marada Divya Sree
      </p>

      <p className="text-gray-500 text-sm mt-2">
        © {new Date().getFullYear()} All rights reserved
      </p>

    </div>
  );
}