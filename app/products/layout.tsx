import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Products",
  description:
    "Explore digital products built by TechCraft Solutions, including practical software experiences designed around real-world needs.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Digital Products | TechCraft Solutions",
    description:
      "Practical digital products designed and engineered by TechCraft Solutions.",
    url: "/products",
    type: "website",
  },
};

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
