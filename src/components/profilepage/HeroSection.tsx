"use client";

import { motion } from "framer-motion";

import Contacts from "@/components/profilepage/Contacts";
import HeroImage from "@/components/profilepage/HeroImage";
import ChangeSectionButton from "@/components/utility/ChangeSectionButton";

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

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="border-b-2 border-b-dark">
        <motion.h3
          variants={{
            initial: {
              opacity: 0,
            },
            show: {
              opacity: 1,
            },
          }}
          initial="initial"
          animate="show"
          className="font-titles font-semibold text-center text-dark text-[1.5rem] sm:text-[1.75rem] xl:text-[2.5rem] 2xl:text-[3.5rem] mb-2 md:mb-8"
        >
          PROFILE
        </motion.h3>
        <section className="container w-full flex gap-14 2xl:gap-20 flex-col sm:flex-row justify-center md:justify-between">
          <HeroImage />
          <motion.article
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-[38rem] text-justify"
          >
            <motion.h4
              variants={item}
              className="font-titles font-medium text-dark text-[1.25rem] sm:text-[1.5rem] 2xl:text-[1.75rem]"
            >
              SUMMARY
            </motion.h4>
            <motion.div
              variants={{
                initial: { width: 0 },
                show: {
                  width: "3rem",
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              initial="initial"
              animate="show"
              className="w-12 border-2 border-dark mb-2"
            ></motion.div>
            <motion.p
              variants={item}
              className="font-text font-normal text-dark text-[.75rem] sm:text-[.875rem] tracking-wide"
            >
              I&apos;m a Software Engineer currently studying Cyber Security
              Engineering at Batam State Polytechnic. Skilled in various
              technologies and programming languages for software development
              and experienced in creating web applications. Additionally, I
              specialize in analyzing and reporting IT security risks. I&apos;m
              dedicated to contributing my expertise in both software
              engineering and cybersecurity to collaborative projects.
            </motion.p>
            <motion.div
              variants={item}
              id="contact"
              className="w-full border border-btn my-4"
            ></motion.div>
            <motion.h4
              variants={item}
              className="font-titles font-medium text-dark text-[1.25rem] sm:text-[1.5rem] 2xl:text-[1.75rem]"
            >
              CONTACT
            </motion.h4>
            <Contacts backgroundColor="light" />
          </motion.article>
        </section>
      </div>
      <ChangeSectionButton targetSectionPosition="bottom" section="Skills" />
    </section>
  );
}
