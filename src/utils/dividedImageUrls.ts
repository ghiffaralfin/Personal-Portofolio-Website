"use server";

import { getProjectImagesUrl, type ImageData } from "./imageURL";

export interface ImageObject {
  aesrsa: ImageData[];
  bugReport: ImageData[];
  dbsec: ImageData[];
  ddosApp: ImageData[];
  riskAssessment: ImageData[];
}

export async function divideImagesIntoObjects(): Promise<ImageObject> {
  const imageDataArray: ImageData[] = await getProjectImagesUrl();

  const dividedImages: ImageObject = {
    aesrsa: [],
    bugReport: [],
    dbsec: [],
    ddosApp: [],
    riskAssessment: [],
  };

  imageDataArray.forEach((image, index) => {
    const categoryIndex = Math.floor(index / 3);
    const categoryKey = Object.keys(dividedImages)[
      categoryIndex
    ] as keyof ImageObject;
    dividedImages[categoryKey].push(image);
  });

  return dividedImages;
}
