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
  title: "Auto Ultimate | Vehicles",
  description:
    "Car Rental Dashboard — A modern, scalable, and production-ready Car Rental Dashboard built with Next.js 15 App Router, Server Actions, TypeScript, React 19, and Tailwind CSS",
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
