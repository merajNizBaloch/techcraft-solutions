import type { Metadata } from "next";
import "./globals.css";
import NavRouter from "../components/nav-router";

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
        <NavRouter />
        {children}
      </body>
    </html>
  );
}
