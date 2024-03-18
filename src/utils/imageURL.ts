"use server";

import { storage } from "./firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import { getBase64 } from "./getBase64Images";

export type ImageData = {
  url: string;
  base64Url: string | undefined;
};

async function getHeroImageUrl(): Promise<ImageData> {
  const imageRef = ref(
    storage,
    "images/portofolio/hero/professional transparent 2.png"
  );
  const url = await getDownloadURL(imageRef);
  const base64Url = await getBase64(url);

  return { url, base64Url };
}

async function getProjectImagesUrl(): Promise<ImageData[]> {
  const imagesRef = ref(storage, "images/portofolio/projects");

  const response = await listAll(imagesRef);
  const urlPromises = response.items.map((item) => getDownloadURL(item));
  const urls = await Promise.all(urlPromises);
  const base64UrlPromises = urls.map((url) => getBase64(url));
  const base64Urls = await Promise.all(base64UrlPromises);

  const imageDataArray: ImageData[] = urls.map((url, index) => ({
    url: url,
    base64Url: base64Urls[index],
  }));

  return imageDataArray;
}

export { getHeroImageUrl, getProjectImagesUrl };
