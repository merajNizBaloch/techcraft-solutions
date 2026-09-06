import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Product & Software Services",
  description:
    "Explore TechCraft Solutions services across UI/UX, web and software engineering, AI integrations, mobile experiences, cloud foundations and digital systems.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Product & Software Services | TechCraft Solutions",
    description:
      "UI/UX, software engineering, AI, mobile, cloud and digital systems delivered as one connected product team.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
