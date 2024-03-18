import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/profile", "/projects"],
      disallow: "/private/",
    },
    sitemap: "https://ghiffaralfin.vercel.app/sitemap.xml",
  };
}
