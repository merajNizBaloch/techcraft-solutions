import type { Metadata } from "next";
import "./globals.css";
import "./global-interactions.css";
import "./theme.css";
import "./dark-theme-overrides.css";
import "./ide-theme-overrides.css";
import "./theme-final-overrides.css";
import "./home-theme-overrides.css";
import "./ide-nav-typography.css";
import "./home-products-cleanup.css";
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
import "./components/loading-screen.css";
import Navbar from "./components/navbar";
import GlobalMouseEffect from "./components/global-mouse-effect";
import GlobalScrollMotion from "./components/global-scroll-motion";
import HomePerformance from "./components/home-performance";
import HomeProductsReplacement from "./components/home-products-replacement";
import IdeBinaryBackground from "./components/ide-binary-background";
import LoadingScreen from "./components/loading-screen";
import SeoStructuredData from "./components/seo-structured-data";

const siteUrl = "https://www.techcraftsolution.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TechCraft Solutions — Design, Engineering & AI",
    template: "%s | TechCraft Solutions",
  },
  description:
    "TechCraft Solutions designs and engineers digital products, websites, software systems and AI-powered experiences.",
  applicationName: "TechCraft Solutions",
  authors: [{ name: "TechCraft Solutions" }],
  creator: "TechCraft Solutions",
  publisher: "TechCraft Solutions",
  keywords: [
    "TechCraft Solutions",
    "software house",
    "UI UX design",
    "web development",
    "software development",
    "AI solutions",
    "digital products",
    "Pakistan software house",
    "Balochistan software house",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TechCraft Solutions",
    title: "TechCraft Solutions — Design, Engineering & AI",
    description:
      "Digital product design, software engineering and intelligent technology from TechCraft Solutions.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCraft Solutions — Design, Engineering & AI",
    description:
      "Digital product design, software engineering and intelligent technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `(() => {
  try {
    const saved = localStorage.getItem("techcraft-theme");
    if (saved === "dark" || saved === "ide") {
      document.documentElement.dataset.theme = saved;
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  } catch {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <IdeBinaryBackground />
        <Navbar />
        <GlobalMouseEffect />
        <HomePerformance />
        <SeoStructuredData />
        <GlobalScrollMotion>
          {children}
          <HomeProductsReplacement />
        </GlobalScrollMotion>
      </body>
    </html>
  );
}