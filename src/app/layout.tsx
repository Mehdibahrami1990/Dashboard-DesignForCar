import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
  display: "swap",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

export const metadata: Metadata = {
  title: "Made by Mehdi | Dashboard Design For a Car Rental Service",
  description:
    "Explore the portfolio of Mehdi Bahrami — a Frontend Developer passionate about building high-performance, user-centered web experiences with React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
