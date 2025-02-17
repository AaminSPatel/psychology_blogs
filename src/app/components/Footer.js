"use client"

import Link from "next/link";
import { useBlogContext } from "./Context";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const { theme } = useBlogContext();

    return (
        <footer
        className={`py-8 px-4 text-center ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
          <div className="mb-4 flex justify-center space-x-4">
          <Link href={"https://www.instagram.com/psycho.112_/"} target="_blank" className="text-xl hover:text-pink-500">
            <FaInstagram/>
          </Link>
          <Link href={"#"} className="text-xl hover:text-pink-500">
            <FaFacebook/>
          </Link>
          <Link href={"#"} className="text-xl hidden hover:text-pink-500">
            📷
          </Link>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Mindful Moments. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href={"#"} className="hover:text-pink-500">
              Privacy Policy
            </Link>
            <Link href={"#"} className="hover:text-pink-500">
              Terms of Service
            </Link>
            
          </div>
        </div>
      
      </footer>
    );
  }