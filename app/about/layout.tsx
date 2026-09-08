import type { Metadata } from "next";
import "./dev-canvas.css";

export const metadata: Metadata = {
  title: "DevCanvas — TechCraft Solutions",
  description:
    "Explore DevCanvas, the TechCraft Solutions story of product design, engineering, culture and useful technology shaped by roots in Balochistan.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "DevCanvas — TechCraft Solutions",
    description:
      "A visual story of how TechCraft turns Balochistan-inspired craft, product thinking and engineering into useful digital products.",
    url: "/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
