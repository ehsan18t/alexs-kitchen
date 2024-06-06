import { Footer, Navbar } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex's Kitchen",
  description: "Alex's Kitchen powered by Remote Kitchen",
  other: {
    "darkreader-lock": "light",
    "color-scheme": "light",
    theme: "light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} main-container`}>
        <Providers>
          <Navbar />
          <div className="mt-16">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
