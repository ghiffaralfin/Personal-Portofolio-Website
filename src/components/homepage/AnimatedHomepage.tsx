"use client";

import { motion } from "framer-motion";
import InitProfileButton from "@/components/homepage/InitProfileButton";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      staggerChildren: 0.25,
      ease: "easeInOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 75 },
  show: { opacity: 1, y: 0 },
};

export default function AnimatedHomepage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col gap-5 md:gap-6 2xl:gap-10 items-center"
    >
      <motion.p
        variants={item}
        className="font-text font-normal text-dark text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]"
      >
        Hi there, I’m
      </motion.p>
      <motion.h1
        variants={item}
        className="font-titles font-bold text-center text-dark text-[2.75rem] md:text-[4.5rem] lg:text-[6rem] 2xl:text-[8rem] leading-none"
      >
        GHIFFAR ALFIN FAIZ
      </motion.h1>
      <motion.p
        variants={item}
        className="font-text font-normal text-center text-dark text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem]"
      >
        Ready to engage in collaborative teamwork within{" "}
        <span className="font-bold"> Software Engineering</span>
      </motion.p>
      <motion.div variants={item}>
        <InitProfileButton />
      </motion.div>
    </motion.div>
  );
}
