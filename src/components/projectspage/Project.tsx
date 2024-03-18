"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  LoaderSpinnerProjectImages,
  loaderImagesIndicator,
} from "@/components/utility/LoaderSpinner";

import { type projectDataObject } from "@/utils/project-data";
import { type ImageData } from "@/utils/imageURL";

type projectProps = {
  images: ImageData[];
  projectData: projectDataObject;
};

const containerContactVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const childrenContactVariant = {
  hidden: { opacity: 0, y: 65 },
  show: { opacity: 1, y: 0 },
};

const containerImagesVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childrenImagesVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const containerArticleVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      staggerChildren: 0.15,
    },
  },
};

const childrenArticleVariant = {
  hidden: { opacity: 0, y: 65 },
  show: { opacity: 1, y: 0 },
};

export default function Project({ images, projectData }: projectProps) {
  return (
    <section
      className={`w-full flex flex-col-reverse ${
        projectData.imagePosition === "left"
          ? "md:flex-row"
          : "md:flex-row-reverse"
      } justify-between gap-14`}
    >
      <motion.div
        variants={containerImagesVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-[21rem] md:w-[21rem] flex flex-col gap-2"
      >
        {images.length === 0 &&
          loaderImagesIndicator.map((item, index) => (
            <motion.div
              key={item}
              variants={childrenImagesVariant}
              className={`flex ${
                (index === 0 && "justify-end") ||
                (index === 1 && "justify-start") ||
                (index === 2 && "justify-center")
              }`}
            >
              <div
                className={`max-w-[16rem] max-h-[12rem] flex justify-center items-center px-2 ${
                  (index % 2 === 0 && "border-r") || "border-l"
                } border-dark`}
              >
                <div className="my-9 mx-14">
                  <LoaderSpinnerProjectImages />
                </div>
              </div>
            </motion.div>
          ))}
        {images &&
          images.map((item, index) => (
            <div
              key={item.url}
              className={`flex ${
                (index === 0 && "justify-end") ||
                (index === 1 && "justify-start") ||
                (index === 2 && "justify-center")
              }`}
            >
              <div
                className={`max-w-[16rem] max-h-[12rem] flex justify-center items-center px-2 ${
                  (index % 2 === 0 && "border-r") || "border-l"
                } border-dark`}
              >
                <Image
                  width={350}
                  height={175}
                  src={item.url}
                  alt="Project Image "
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={item.base64Url}
                  className="object-contain object-left"
                />
              </div>
            </div>
          ))}
      </motion.div>
      <motion.article
        variants={containerArticleVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-[30rem] lg:max-w-[35rem] 2xl:max-w-[45rem]"
      >
        <motion.h4
          variants={childrenArticleVariant}
          className="font-titles font-semibold text-dark text-[1.25rem] sm:text-[1.5rem] 2xl:text-[1.75rem]"
        >
          {projectData.title}
        </motion.h4>
        <motion.p variants={childrenArticleVariant}>
          <Link
            href={projectData.sourceLink}
            target="_blank"
            className="font-button font-normal text-dark text-[.75rem] sm:text-[.875rem]"
          >
            {"[ "}
            <span className="text-link">Source Link</span>
            {" ]"}
          </Link>
        </motion.p>
        <motion.div
          variants={childrenArticleVariant}
          className="w-12 border-2 border-dark my-2"
        ></motion.div>
        <motion.p
          variants={childrenArticleVariant}
          className="font-titles font-medium text-dark text-[1rem] sm:text-[1.25rem] 2xl:text-[1.5rem] mt-3 mb-2"
        >
          # Objectives and Impact
        </motion.p>
        <motion.p
          variants={childrenArticleVariant}
          className="font-text font-normal text-justify text-dark text-[.75rem] sm:text-[.875rem] tracking-wide"
        >
          {projectData.objectiveAndImpact}
        </motion.p>
        {projectData.features && (
          <>
            <motion.p
              variants={childrenArticleVariant}
              className="font-titles font-medium text-dark text-[1rem] sm:text-[1.25rem] 2xl:text-[1.5rem] mt-3 mb-2"
            >
              # Features
            </motion.p>
            <motion.ol
              variants={containerArticleVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="list-decimal font-text font-normal text-justify text-dark text-[.75rem] sm:text-[.875rem] tracking-wide pl-4"
            >
              <motion.li variants={childrenArticleVariant}>
                Improve bug reporting with a dynamic dashboard that shows
                analytics on report quantity and types, categorized by severity
                levels over specified time periods.
              </motion.li>
              <motion.li variants={childrenArticleVariant}>
                Simplify the reporting process by submitting bug reports with
                assigned severity levels. Access useful features like editing,
                deleting, downloading, and an overview to explore all reports
                from the academic community.
              </motion.li>
              <motion.li variants={childrenArticleVariant}>
                Enhance bug management by incorporating a risk calculator to
                systematically assess bug severity. Also, use the CVE discovery
                function to gain insights into potential vulnerabilities.
              </motion.li>
            </motion.ol>
          </>
        )}
        {projectData.description && (
          <>
            <motion.p
              variants={childrenArticleVariant}
              className="font-titles font-medium text-dark text-[1rem] sm:text-[1.25rem] 2xl:text-[1.5rem] mt-3 mb-2"
            >
              # Description
            </motion.p>
            <motion.p
              variants={childrenArticleVariant}
              className="font-text font-normal text-justify text-dark text-[.75rem] sm:text-[.875rem] tracking-wide"
            >
              {projectData.description}
            </motion.p>
          </>
        )}

        <motion.p
          variants={childrenArticleVariant}
          className="font-titles font-medium text-dark text-[1rem] sm:text-[1.25rem] 2xl:text-[1.5rem] mt-3 mb-2"
        >
          # Tools or Framework
        </motion.p>
        <motion.div
          variants={containerArticleVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-start gap-4 cursor-default"
        >
          {projectData.toolsOrFramework.map((item, index) => (
            <motion.p
              key={index}
              variants={childrenArticleVariant}
              className="inline-block border border-dark font-text font-normal text-nowrap text-dark text-[.75rem] sm:text-[.875rem] tracking-wide py-1 px-3"
            >
              {item}
            </motion.p>
          ))}
        </motion.div>
      </motion.article>
    </section>
  );
}
