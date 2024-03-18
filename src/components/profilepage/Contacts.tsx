"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { CONTACT_DATA_LIGHT, CONTACT_DATA_DARK } from "../utility/contact-data";

type contactProps = {
  backgroundColor: "light" | "dark";
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 35,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Contacts({ backgroundColor }: contactProps) {
  return (
    <div className="z-[1] max-w-full flex flex-wrap gap-4  my-4">
      {backgroundColor === "light"
        ? CONTACT_DATA_LIGHT.map((contact, index) => (
            <motion.div
              key={contact.type}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Link
                href={
                  contact.type === "gmail"
                    ? `mailto:${contact.data.href}`
                    : contact.data.href
                }
                target="_blank"
                className="group z-[1]"
              >
                <div className="before:bg-dark bg-light text-dark group-hover:text-light border-frame group-hover:border-dark before:transition-all before:ease-in-out before:duration-200 before:content-['']  before:-z-[1] before:h-full before:absolute before:top-0 before:left-[unset] before:right-0 before:w-0 group-hover:before:left-0 group-hover:before:right-[unset] group-hover:before:w-full focus:before:left-0 focus:before:right-[unset] focus:before:w-full relative z-[1] transition-all ease-in-out duration-200  border-2">
                  <div className="flex justify-center items-center gap-2 pl-2 pr-4 py-2">
                    <div className="w-[2rem] h-[2rem]">{contact.data.svg}</div>
                    <p className="font-text font-medium text-justifytext-[.75rem] sm:text-[.875rem]">
                      {contact.data.id}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        : CONTACT_DATA_DARK.map((contact, index) => (
            <motion.div
              key={contact.type}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Link
                key={contact.type}
                href={
                  contact.type === "gmail"
                    ? `mailto:${contact.data.href}`
                    : contact.data.href
                }
                target="_blank"
                className="group"
              >
                <div className="before:bg-light bg-dark text-light group-hover:text-dark border-light before:transition-all before:ease-in-out before:duration-200 before:content-['']  before:-z-[1] before:h-full before:absolute before:top-0 before:left-[unset] before:right-0 before:w-0 group-hover:before:left-0 group-hover:before:right-[unset] group-hover:before:w-full focus:before:left-0 focus:before:right-[unset] focus:before:w-full relative z-[1] transition-all ease-in-out duration-200  border-2">
                  <div className="flex justify-center items-center gap-2 pl-2 pr-4 py-2">
                    <div className="w-[2rem] h-[2rem]">{contact.data.svg}</div>
                    <p className="font-text font-medium text-justifytext-[.75rem] sm:text-[.875rem]">
                      {contact.data.id}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
    </div>
  );
}
