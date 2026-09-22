import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Product & Software Services",
  description:
    "Explore TechCraft Solutions services across UI/UX, software engineering, legacy modernization, migrations, business digitization, AI, mobile and cloud systems.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Product & Software Services | TechCraft Solutions",
    description:
      "UI/UX, software engineering, legacy modernization, migrations, AI, mobile, cloud and digital systems delivered as one connected product team.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
