"use client"

import Link from "next/link";
import { useBlogContext } from "./Context";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
    const { theme, toggleTheme } = useBlogContext();
    return (
          <header
            className={`p-4 flex justify-between items-center border-b ${
              theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
          >
            <h1 className="text-2xl font-bold text-pink-500">Mindful Moments</h1>
      
            <div className="flex items-center justify-center gap-3 px-3">
              <Link href={"/"} className="hover:text-pink-500">
                Home
              </Link>
              <Link href={"/blogs"} className="hover:text-pink-500">
                Blog
              </Link>
              <div className="flex justify-end">
                <button
                  onClick={toggleTheme}
                  className=" text-pink-400 hover:text-white px-2 py-1 rounded-lg hover:bg-pink-600 transition"
                >
                  {theme === "light" ? (
                    <FaMoon className="my-1 " />
                  ) : (
                    <FaSun className="my-1" />
                  )}
                </button>
              </div>
            </div>
          </header>
        );
      };
      