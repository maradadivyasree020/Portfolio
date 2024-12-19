import React from "react";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin
} from "@tabler/icons-react";

export function Fotter() {
  const links = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-8 w-8 text-white" />, // Set icon color to white
      href: "https://github.com/maradadivyasree020/disney-clone",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-8 w-8 text-white" />, // Set icon color to white
      href: "https://www.linkedin.com/in/marada-divya-sree-72b164255/",
    },
    {
      title: "Gmail",
      icon: <IconBrandGmail className="h-8 w-8 text-white" />, // Set icon color to white
      href: "mailto:maradadivyasree@gmail.com",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[35rem] w-full">
      {/* Glass Effect Container */}
      <div className="flex space-x-6 p-6 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-lg">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
            className="relative group flex items-center justify-center h-12 w-12 rounded-full hover:bg-white/20 transition duration-300"
          >
            {link.icon}
            {/* Tooltip for Hover */}
            <span className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-medium px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
              {link.title}
            </span>
          </a>
        ))}
      </div>
      <p className="mt-8 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Marada Divya Sree</p>
    </div>
  );
}
