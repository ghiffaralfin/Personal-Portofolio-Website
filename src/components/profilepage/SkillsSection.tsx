"use client";

import { motion } from "framer-motion";

import TechStack from "@/components/profilepage/TechStack";
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

export default function SkillsSection() {
  return (
    <>
      <section
        id="skills"
        className="container relative text-center flex flex-col items-center"
      >
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
          whileInView="show"
          viewport={{ once: true }}
          className="font-titles font-semibold text-center text-dark text-[1.5rem] sm:text-[1.75rem] xl:text-[2.5rem] 2xl:text-[3.5rem] mb-4 sm:mb-6"
        >
          SKILLS
        </motion.h3>
        <section className="flex flex-col gap-16">
          <section className="flex flex-col items-center ">
            <motion.h4
              variants={{
                initial: {
                  opacity: 0,
                },
                show: {
                  opacity: 1,
                },
              }}
              initial="initial"
              whileInView="show"
              viewport={{ once: true }}
              className="font-titles font-medium text-dark text-[1.25rem] sm:text-[1.5rem] 2xl:text-[1.75rem]"
            >
              SOFT SKILLS
            </motion.h4>
            <div className="w-12 border-2 border-dark mb-4"></div>
            <motion.article
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col space-y-4"
            >
              <motion.p
                variants={item}
                className="font-text font-normal text-center text-dark text-[.75rem] sm:text-[.875rem]"
              >
                Excelling in <span className="font-semibold">teamwork</span>, I
                work closely with others to capitalize on our collective
                strengths and accomplish shared goals. My problem-solving
                strategy is centered around{" "}
                <span className="font-semibold">design thinking</span>{" "}
                principles, where I prioritize understanding users needs and
                delivering creative solutions.
              </motion.p>
              <motion.p
                variants={item}
                className="font-text font-normal text-center text-dark text-[.75rem] sm:text-[.875rem]"
              >
                Despite this, my perfectionistic tendencies sometimes cause me
                to become overly fixated on minor details, which may distract
                from the larger objectives. I continuously strive to refine my{" "}
                <span className="font-semibold">task management</span> skills to
                maintain a healthy balance between meticulousness and
                efficiency.
              </motion.p>
            </motion.article>
          </section>
          <section className="flex flex-col items-center">
            <motion.h4
              variants={{
                initial: {
                  opacity: 0,
                },
                show: {
                  opacity: 1,
                },
              }}
              initial="initial"
              whileInView="show"
              viewport={{ once: true }}
              className="font-titles font-medium text-dark text-[1.25rem] sm:text-[1.5rem] 2xl:text-[1.75rem]"
            >
              TECH STACK
            </motion.h4>
            <div className="w-12 border-2 border-dark mb-8"></div>
            <TechStack />
          </section>
        </section>
      </section>
      <ChangeSectionButton targetSectionPosition="top" section="Contact" />
    </>
  );
}
