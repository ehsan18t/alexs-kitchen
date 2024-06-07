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
      <head>
        <meta
          name="keywords"
          content="Remote Kitchen, SaaS, food items list, responsive UI, food item management, add food item, edit food item, delete food item, UI library, state management, SEO-friendly, inclusive state management, card format, web development, user-friendly, real-time update, no page refresh, web app"
        />
        <meta
          name="description"
          content="Remote Kitchen offers a responsive, SEO-friendly UI for managing food items. Add, edit, and delete items easily with real-time updates, all in a user-friendly card format."
        />
        <meta name="author" content="Remote Kitchen Development Team" />
        <meta name="robots" content="index, follow" />

        {/* <!-- Open Graph tags for social media sharing --> */}
        <meta
          property="og:title"
          content="Remote Kitchen - Manage Your Food Items Seamlessly"
        />
        <meta
          property="og:description"
          content="Experience the convenience of managing your food items with Remote Kitchen. Add, edit, and delete items in a responsive, real-time UI without page refreshes."
        />
        <meta property="og:site_name" content="Remote Kitchen" />
        <meta
          property="og:image"
          content="https://alexs-kitchen.vercel.app/og-media/preview.jpeg"
        />
        <meta property="og:url" content="https://alexs-kitchen.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* <!-- Google SEO Metadata --> */}
        <meta
          name="google-site-verification"
          content="GOOGLE_SITE_VERIFICATION_CODE"
        />
      </head>
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
