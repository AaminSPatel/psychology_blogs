import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BlogProvider } from "./components/Context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.js
export const metadata = {
  title: "Psychology Blogs & Manipulation Tricks - Master the Mind",
  icon:'https://psychology-blogs.vercel.app/logo.png',
  description:
    "Explore the fascinating world of psychology and manipulation tricks. Learn how to understand human behavior, influence others, and master the art of persuasion.",
  keywords: [
    "psychology",
    "manipulation tricks",
    "human behavior",
    "persuasion",
    "mind control",
    "psychological tips",
    "behavioral psychology",
  ],
  authors: [{ name: "Aamin", url: "https://psychology-blogs.vercel.app" }],
  openGraph: {
    title: "Psychology Blogs & Manipulation Tricks - Master the Mind",
    description:
      "Explore the fascinating world of psychology and manipulation tricks. Learn how to understand human behavior, influence others, and master the art of persuasion.",
    url: "https://psychology-blogs.vercel.app",
    siteName: "Psychology Blogs",
    images: [
      {
        url: "https://psychology-blogs.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Psychology Blogs & Manipulation Tricks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychology Blogs & Manipulation Tricks - Master the Mind",
    description:
      "Explore the fascinating world of psychology and manipulation tricks. Learn how to understand human behavior, influence others, and master the art of persuasion.",
    images: ["https://psychology-blogs.vercel.app/logo.png"],
  },
  other: {
    "google-site-verification": "Gw0kKrcBORBSuCsj5fpyVGYEYahY47h7CpJufGEWshY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BlogProvider>
           {children}
        </BlogProvider>
       
      </body>
    </html>
  );
}
