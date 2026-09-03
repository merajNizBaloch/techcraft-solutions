import type { Metadata } from "next";
import "./globals.css";
import "./accessibility.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techcraftsolution.com"),
  title: {
    default: "TechCraft — Digital Design & Software Engineering",
    template: "%s — TechCraft",
  },
  description:
    "TechCraft is a digital studio from Balochistan combining product design, software engineering, AI and modern digital systems.",
  applicationName: "TechCraft",
  keywords: [
    "TechCraft",
    "software development",
    "UI UX design",
    "web development",
    "AI solutions",
    "digital products",
    "Balochistan",
    "Pakistan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "TechCraft",
    title: "TechCraft — Digital Design & Software Engineering",
    description:
      "Product design, software engineering, AI and digital systems crafted from Balochistan for modern businesses.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCraft — Digital Design & Software Engineering",
    description:
      "Product design, software engineering, AI and digital systems by TechCraft.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
