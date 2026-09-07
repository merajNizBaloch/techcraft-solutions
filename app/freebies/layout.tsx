import type { Metadata } from "next";
import "./freebies-catalog.css";

export const metadata: Metadata = {
  title: "Free Tools & Resources",
  description:
    "Use TechCraft Solutions free digital tools and resources for everyday file, image, document and productivity tasks.",
  alternates: { canonical: "/freebies" },
  openGraph: {
    title: "Free Tools & Resources | TechCraft Solutions",
    description:
      "Practical free tools and resources for everyday digital work.",
    url: "/freebies",
    type: "website",
  },
};

export default function FreebiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
