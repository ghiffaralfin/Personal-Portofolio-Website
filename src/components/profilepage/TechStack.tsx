"use client";

import TECH_STACK from "../utility/techstack-data";

import { motion } from "framer-motion";

import type { techStackProperties } from "../utility/techstack-data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      ease: "easeInOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 65 },
  show: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full flex flex-wrap justify-center items-center gap-4"
    >
      {TECH_STACK.map((items: techStackProperties, index) => (
        <motion.div
          key={items.techname}
          variants={item}
          className="cursor-default flex items-center space-x-3 w-[14rem] h-[3.75rem] transition-all ease-in-out bg-light shadow-md shadow-gray-300 hover:shadow-dark border border-frame hover:border-dark p-2"
        >
          <div className="w-[4.5rem] h-full border-r border-frame flex justify-center items-center">
            {items.svg}
          </div>
          <p className="font-text font-medium text-justify text-[.875rem] sm:text-[1rem]">
            {items.techname}
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
}
