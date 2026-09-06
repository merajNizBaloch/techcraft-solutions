import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TechCraft Solutions",
  description:
    "Learn how TechCraft Solutions combines product design, software engineering and AI to build intentional digital products from Balochistan for a wider world.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TechCraft Solutions",
    description:
      "The story, principles and working approach behind TechCraft Solutions.",
    url: "/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
