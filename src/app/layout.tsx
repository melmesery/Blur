import type { Metadata } from "next";
import { Sansita as Font } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const font = Font({
  subsets: ["latin"],
  weight: "400"
});

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blur",
  description: "Image gallery with Nexj.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#F3F3F1]`}>
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
