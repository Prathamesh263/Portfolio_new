import type { Metadata } from "next";
import { Orbitron, Sora, Manrope } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Prathamesh Satbhai - Gaming Universe Portfolio",
  description: "Crafting Digital Experiences with Code + Creativity. Explore my gaming-inspired portfolio showcasing innovative web development projects.",
  keywords: ["Prathamesh Satbhai", "Portfolio", "Web Developer", "Gaming", "Next.js", "React", "Frontend"],
  authors: [{ name: "Prathamesh Satbhai" }],
  openGraph: {
    title: "Prathamesh Satbhai - Gaming Universe Portfolio",
    description: "Crafting Digital Experiences with Code + Creativity",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${sora.variable} ${manrope.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
