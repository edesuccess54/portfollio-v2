// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://johndoe.com", lastModified: new Date(), priority: 1 },
    { url: "https://johndoe.com/about", lastModified: new Date(), priority: 0.8 },
    { url: "https://johndoe.com/projects", lastModified: new Date(), priority: 0.8 },
    { url: "https://johndoe.com/contact", lastModified: new Date(), priority: 0.5 },
  ];
}