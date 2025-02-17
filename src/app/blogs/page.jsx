"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaSort, FaSun, FaMoon } from "react-icons/fa";
import blogsData from "../components/BlogPost"; // Ensure this path is correct
import { useBlogContext } from "../components/Context"; // Ensure this path is correct
import Link from "next/link";
import Navbar from "../components/Navbar"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct
import Head from "next/head";

const BlogList = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedBenefit, setSelectedBenefit] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const { theme, toggleTheme } = useBlogContext(); // Get theme state & toggle function

  // Extract unique benefits from the blogsData
  const uniqueBenefits = [...new Set(blogsData.flatMap((blog) => blog.benefits))];

  // Filter and sort blogs based on search query, selected benefit, and sort order
  useEffect(() => {
    let filteredBlogs = blogsData.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedBenefit ? blog.benefits.includes(selectedBenefit) : true) &&
        (selectedType ? blog.type === selectedType : true)
    );

    if (sortOrder === "asc") {
      filteredBlogs.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      filteredBlogs.sort((a, b) => b.title.localeCompare(a.title));
    }

    setBlogs(filteredBlogs);
    setCurrentPage(1); // Reset to the first page after filtering/sorting
  }, [searchQuery, sortOrder, selectedBenefit, selectedType]);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <>
      <Navbar />
       {/* Add SEO Metadata */}
        {/* SEO Metadata */}
      <Head>
        <title>Psychology Blogs & Mind Tricks - Master the Mind</title>
        <meta name="description" content="Discover a collection of psychology blogs, mind tricks, and behavioral insights to help you understand and influence human behavior." />
        <meta name="keywords" content="psychology, manipulation tricks, human behavior, persuasion, psychology blogs, influence, mental tricks, psychological tips, behavioral psychology, social psychology, cognitive science, emotional intelligence" />
        <meta name="author" content="Aamin" />
        <meta property="og:title" content="Psychology Blogs & Mind Tricks - Master the Mind" />
        <meta property="og:description" content="Explore the fascinating world of psychology with expert insights, real-life examples, and powerful manipulation techniques." />
        <meta property="og:url" content="https://psychology-blogs.vercel.app/blog" />
        <meta property="og:site_name" content="Psychology Blogs" />
        <meta property="og:image" content="https://psychology-blogs.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psychology Blogs & Mind Tricks - Master the Mind" />
        <meta name="twitter:description" content="Discover expert insights and powerful psychological techniques to master the mind." />
        <meta name="twitter:image" content="https://psychology-blogs.vercel.app/og-image.jpg" />
      </Head>
      <div
        className={`${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        } min-h-screen p-6`}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6 philosopher">
            Psychology Blogs
          </h1>

          {/* Filter & Sorting Section */}
          <div
            className={`${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } shadow-lg rounded-lg p-6 mb-6`}
          >
            <div className="grid md:grid-cols-4 gap-4 items-center">
              {/* Search Bar */}
              <div className="relative w-full">
                <FaSearch className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search blog..."
                  className={`${
                    theme === "dark"
                      ? "bg-gray-700 text-white border-gray-700"
                      : "border-gray-300"
                  } w-full p-3 pl-10 rounded-lg border focus:ring-2 focus:ring-pink-500`}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Sorting */}
              <select
                className={`${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-700"
                    : "border-gray-300"
                } w-full p-3 rounded-lg border focus:ring-2 focus:ring-pink-500`}
                onChange={(e) => setSortOrder(e.target.value)}
                value={sortOrder}
              >
                <option value="">Sort by</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>

              {/* Benefits Filter */}
              <select
                className={`${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-700"
                    : "border-gray-300"
                } w-full p-3 rounded-lg border focus:ring-2 focus:ring-pink-500`}
                onChange={(e) => setSelectedBenefit(e.target.value)}
                value={selectedBenefit}
              >
                <option value="">Filter by Benefit</option>
                {uniqueBenefits.map((benefit, index) => (
                  <option key={index} value={benefit}>
                    {benefit}
                  </option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                className={`${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-700"
                    : "border-gray-300"
                } w-full p-3 rounded-lg border focus:ring-2 focus:ring-pink-500`}
                onChange={(e) => setSelectedType(e.target.value)}
                value={selectedType}
              >
                <option value="">Filter by Type</option>
                {/* Add options for types if available */}
              </select>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 sm:pt-10 pt-5">
            {currentBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                className={`${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300`}
              >
                <div className="p-6">
                  <h2 className="text-xl popin font-semibold mb-2 line-clamp-1">
                    {blog.title}
                  </h2>
                  <p className="mb-4 line-clamp-3 roboto">{blog.description}</p>
                  <Link
                    href={`/blog/${blog.id}`} // Ensure this matches your dynamic route
                    className="inline-block px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-14 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`${
                  theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-300"
                } px-4 py-2 rounded-full hover:bg-pink-500 transition`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogList;