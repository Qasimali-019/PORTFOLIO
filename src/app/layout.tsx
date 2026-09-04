import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qasim Ali — Full-Stack Developer & QA Intern Portfolio",
  description:
    "Interactive Windows 11 themed portfolio of Qasim Ali — Full-Stack Developer and QA & Software Testing Intern based in Islamabad, Pakistan.",
  keywords: [
    "Qasim Ali",
    "Full-Stack Developer",
    "QA Engineer",
    "Software Testing",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Windows 11",
  ],
  openGraph: {
    title: "Qasim Ali — Full-Stack Developer & QA Intern Portfolio",
    description:
      "Explore Qasim Ali's interactive Windows 11 themed portfolio featuring projects, skills, and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#202020] text-white antialiased">{children}</body>
    </html>
  );
}
