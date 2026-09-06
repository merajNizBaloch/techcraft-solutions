import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TechCraft Solutions",
  description:
    "Talk to TechCraft Solutions about your next website, software product, AI integration, UI/UX project or digital system.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact TechCraft Solutions",
    description:
      "Start a conversation about your next digital product, software or AI project.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
