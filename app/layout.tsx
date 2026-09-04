import type { Metadata } from "next";
import "./globals.css";
import "./global-interactions.css";
import "./theme.css";
import "./dark-theme-overrides.css";
import "./ide-theme-overrides.css";
import "./theme-final-overrides.css";
import "./home-theme-overrides.css";
import "./ide-nav-typography.css";
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
import HomeProductsReplacement from "./components/home-products-replacement";
import IdeBinaryBackground from "./components/ide-binary-background";
import LoadingScreen from "./components/loading-screen";

export const metadata: Metadata = {
  title: "TechCraft Solutions",
  description:
    "TechCraft Solutions — digital product design, software engineering and intelligent technology.",
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
        <GlobalScrollMotion>
          {children}
          <HomeProductsReplacement />
        </GlobalScrollMotion>
      </body>
    </html>
  );
}
