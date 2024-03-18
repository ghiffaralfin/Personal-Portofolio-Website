"use client";

import { motion } from "framer-motion";

import ProjectSection from "@/components/projectspage/ProjectSection";
import Contacts from "@/components/profilepage/Contacts";

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

export default function AnimatedProjectpage() {
  return (
    <>
      <section className="container w-full mt-16 sm:mt-20">
        <motion.h3
          variants={{
            initial: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            },
          }}
          initial="initial"
          animate="show"
          className="font-titles font-semibold text-center text-dark text-[1.5rem] sm:text-[1.75rem] xl:text-[2.5rem] 2xl:text-[3.5rem]"
        >
          PROJECT
        </motion.h3>
        <motion.p
          variants={{
            initial: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.25,
                ease: "easeInOut",
              },
            },
          }}
          initial="initial"
          animate="show"
          className="font-text font-normal text-center text-dark text-[.75rem] sm:text-[.875rem]"
        >
          Achieved project milestones aligned with institutional or
          organizational requirements, propelled by effective{" "}
          <span className="font-semibold">team collaboration</span>
        </motion.p>
        <ProjectSection />
      </section>
      <section className="w-full bg-dark mt-16 py-12">
        <div className="container flex flex-col justify-center items-center text-center">
          <h4 className="font-titles font-medium text-light text-[1.25rem] sm:text-[1.5rem] 2xl:text-[1.75rem]">
            CONTACT
          </h4>
          <div className="w-12 border-2 border-light mb-2"></div>
          <Contacts backgroundColor="dark" />
        </div>
      </section>
    </>
  );
}
