"use client";

import { useEffect, useState } from "react";

import {
  divideImagesIntoObjects,
  type ImageObject,
} from "@/utils/dividedImageUrls";

import {
  bugReport,
  dbSec,
  aesrsa,
  riskAssessment,
  ddosApp,
} from "@/utils/project-data";
import Project from "./Project";

export default function ProjectSection() {
  const [images, setImages] = useState<ImageObject>({
    aesrsa: [],
    bugReport: [],
    dbsec: [],
    ddosApp: [],
    riskAssessment: [],
  });

  useEffect(() => {
    async function getImageUrls() {
      const urls = await divideImagesIntoObjects();
      setImages(urls);
      console.log(urls);
    }
    getImageUrls();
  }, []);

  return (
    <section className="flex flex-col gap-20 md:gap-32 mt-8 md:mt-16 2xl:mt-20 mb-16">
      <Project images={images.bugReport} projectData={bugReport} />
      <Project images={images.dbsec} projectData={dbSec} />
      <Project images={images.aesrsa} projectData={aesrsa} />
      <Project images={images.riskAssessment} projectData={riskAssessment} />
      <Project images={images.ddosApp} projectData={ddosApp} />
    </section>
  );
}
