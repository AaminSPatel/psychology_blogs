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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
