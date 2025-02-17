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
       <Head>
  {/* ✅ Essential Meta Tags */}
  <title>Psychology Blogs & Manipulation Tricks - Master the Mind</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charSet="UTF-8" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Aamin" />
  <link rel="canonical" href="https://psychology-blogs.vercel.app" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  
  {/* ✅ Favicon */}
  <link rel="icon" type="image/png" href="/logo.png" />

  {/* ✅ Primary SEO Meta Tags */}
  <meta name="description" content="Master the art of persuasion with proven psychological techniques. Our blog explores subconscious influence, social engineering, negotiation skills, and mental tricks used in marketing, leadership, and relationships." />

  <meta 
    name="keywords" 
    content="psychology, manipulation tricks, human behavior, persuasion, mind control, psychological tips, behavioral psychology, cognitive biases, emotional intelligence, influence techniques, subconscious mind, mentalism, NLP, body language, sales psychology, leadership, marketing psychology, self-improvement, confidence building"
  />

  {/* ✅ Open Graph (OG) Meta Tags for Facebook & LinkedIn */}
  <meta property="og:title" content="Psychology Tricks & Mind Manipulation | Unlock the Power of Influence" />
  <meta property="og:description" content="Unlock the power of psychology and manipulation tricks. Learn persuasion techniques, cognitive biases, and mind control strategies for success in personal and professional life." />
  <meta property="og:url" content="https://psychology-blogs.vercel.app" />
  <meta property="og:site_name" content="Psychology Blogs" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://psychology-blogs.vercel.app/logo.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="en_US" />

  {/* ✅ Twitter Card Meta Tags for Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Psychology Blogs & Manipulation Tricks - Master the Mind" />
  <meta name="twitter:description" content="Explore psychology and influence tactics. Learn how to manipulate decisions, decode emotions, and master persuasion in marketing, leadership, and relationships." />
  <meta name="twitter:image" content="https://psychology-blogs.vercel.app/logo.png" />

  {/* ✅ Additional SEO Enhancements */}
  <meta name="language" content="English" />
  <meta name="distribution" content="global" />
  <meta name="rating" content="General" />
  <meta name="geo.region" content="IND" />
  <meta name="geo.placename" content="India" />

  {/* ✅ Structured Data (JSON-LD for Rich Snippets) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Psychology Blogs & Manipulation Tricks",
      "url": "https://psychology-blogs.vercel.app",
      "image": "https://psychology-blogs.vercel.app/logo.png",
      "description": "Unlock the power of psychology and manipulation tricks. Learn persuasion techniques, cognitive biases, and mind control strategies for success in personal and professional life.",
      "publisher": {
        "@type": "Organization",
        "name": "Psychology Blogs",
        "logo": {
          "@type": "ImageObject",
          "url": "https://psychology-blogs.vercel.app/logo.png"
        }
      },
      "author": {
        "@type": "Person",
        "name": "Aamin"
      }
    })}
  </script>

  {/* ✅ Analytics & Tracking Script */}
  <script 
    src="https://cdn.counter.dev/script.js" 
    data-id="95795ebe-d6a8-4887-abef-7dbb03a06eb2" 
    data-utcoffset="6"
  ></script>
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