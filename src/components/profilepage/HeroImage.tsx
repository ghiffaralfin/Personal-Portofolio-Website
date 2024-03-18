"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import LoaderSpinner from "../utility/LoaderSpinner";

import { getHeroImageUrl } from "@/utils/imageURL";
import type { ImageData } from "@/utils/imageURL";

export default function HeroImage() {
  const [imageSrc, setImageSrc] = useState<ImageData>();

  useEffect(() => {
    async function fetchImageURL() {
      const dataImage = await getHeroImageUrl();
      setImageSrc(dataImage);
    }
    fetchImageURL();
  }, []);

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
        },
        show: { opacity: 1 },
      }}
      initial="initial"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`max-w-[30rem] max-h-[40rem] flex justify-center items-center ${
        !imageSrc && "border-y-2 border-gray-500"
      }`}
    >
      {!imageSrc && (
        <div className="sm:px-6 lg:px-20">
          <LoaderSpinner />
        </div>
      )}
      {imageSrc && (
        <Image
          src={imageSrc.url}
          width={486}
          height={632}
          alt="Personal Hero Image"
          loading="lazy"
          placeholder="blur"
          blurDataURL={imageSrc.base64Url}
          className="object-contain pb-4 border-b-2 border-dark sm:p-0 sm:border-none"
        />
      )}
    </motion.div>
  );
}
