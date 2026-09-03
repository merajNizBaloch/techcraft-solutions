import type { Metadata } from "next";
import "./globals.css";
import "./global-interactions.css";
import "./theme.css";
import "./dark-theme-overrides.css";
import "./ide-theme-overrides.css";
import "./about/about-position.css";
import "./products/products.css";
import "./products-home.css";
import "./products-animations.css";
import "./freebies/freebies.css";
import "./freebies/freebie-factory.css";
import "./freebies/freebies-hero-unique.css";
import "./contact/contact.css";
import "./contact/satellite.css";
import "./portfolio/portfolio.css";
import "./portfolio/portfolio-refinements.css";
import "./portfolio/portfolio-hero-fix.css";
import "./portfolio/portfolio-vision.css";
import "./team/team.css";
import Navbar from "./components/navbar";
import GlobalMouseEffect from "./components/global-mouse-effect";
import GlobalScrollMotion from "./components/global-scroll-motion";
import HomeProductsReplacement from "./components/home-products-replacement";
import IdeBinaryBackground from "./components/ide-binary-background";

export const metadata: Metadata = {
  title: "TechCraft Solutions",
  description:
    "TechCraft Solutions — digital product design, software engineering and intelligent technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <IdeBinaryBackground />
        <Navbar />
        <GlobalMouseEffect />
        <GlobalScrollMotion>
          {children}
          <HomeProductsReplacement />
        </GlobalScrollMotion>
      </body>
    </html>
  );
}
