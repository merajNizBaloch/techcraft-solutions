import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.techcraftsolution.com";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/work`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/work/rehaan-associates`, lastModified: new Date() },
    { url: `${base}/work/field-systems`, lastModified: new Date() },
    { url: `${base}/work/intelligent-products`, lastModified: new Date() },
  ];
}
