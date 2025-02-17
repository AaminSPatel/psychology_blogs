"use client";
import React, { useEffect, useState } from "react";
import { FaBrain, FaHeart, FaSmile, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams} from "next/navigation";
import blogs from "../../components/BlogPost";
import { useBlogContext } from "../../components/Context";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";

const BlogPage = () => {
 // const router = useRouter();
  const { id } = useParams(); // Get the `id` from the URL query params
  const [post, setPost] = useState(null);
  const { theme } = useBlogContext(); // Access theme from context
//console.log(router);

  useEffect(() => {
    // Ensure `id` is available and is a valid number
    if (id && !isNaN(parseInt(id))) {
      const blogId = parseInt(id); // Convert `id` to a number
      const blog = blogs.find((blog) => blog.id === blogId); // Find the blog post
      if (blog) {
        setPost(blog); // Set the blog post if found
      } else {
        console.error("Blog post not found for ID:", id);
      }
    }
  }, [id]); // Re-run the effect when `id` changes

  // If `post` is not yet loaded, show a loading state
  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
       {/* Add SEO Metadata */}

<Head>
  <title>{post.title} - Psychology Insights & Mind Tricks</title>
  <meta 
    name="description" 
    content={`${post.description} Learn how to improve mental clarity, reduce stress, and gain a deeper understanding of human behavior.`} 
  />
  <meta 
    name="keywords" 
    content="mindfulness, psychology, mental health, self-improvement, emotional intelligence, brain science, cognitive behavior, stress management, focus, meditation, self-awareness, decision-making, mental clarity, psychology tricks"
  />
  
  {/* Open Graph (OG) for social media */}
  <meta property="og:title" content={post.title} />
  <meta 
    property="og:description" 
    content={`${post.description} Discover practical ways to master mindfulness and enhance mental well-being.`} 
  />
  <meta property="og:image" content={ "https://psychology-blogs.vercel.app/default-image.jpg"} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={`https://psychology-blogs.vercel.app/blog/${post.id}`} />
  <meta property="og:site_name" content="Psychology Blogs" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={post.title} />
  <meta 
    name="twitter:description" 
    content={`${post.description} Learn to master mindfulness and enhance emotional regulation.`} 
  />
  <meta name="twitter:image" content={ "https://psychology-blogs.vercel.app/default-image.jpg"} />
</Head>

      <div
        className={`min-h-screen font-sans transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        {/* Blog Section */}
        <section className="container mx-auto px-6 py-12 max-w-3xl">
          <motion.h2
            className="text-4xl philosopher font-bold text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {post.title}
          </motion.h2>

          <motion.p
            className="text-lg text-center popin mb-6 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {post.description}
          </motion.p>

          {/* Benefits Section */}
          <motion.div
            className={`shadow-lg rounded-lg p-6 mb-6 roboto transition-colors duration-300 ${
              theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <FaBrain className="mr-2 text-pink-500" /> Key Benefits
            </h3>
            <ul className="list-none space-y-2">
              {post.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Example Section */}
          <motion.div
            className={`shadow-lg roboto rounded-lg p-6 mb-6 transition-colors duration-300 ${
              theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-2 flex items-center ">
              <FaHeart className="mr-2 text-pink-500" /> Real-Life Example
            </h3>
            <p>{post.example}</p>
          </motion.div>

          {/* Why It Works Section */}
          <motion.div
            className={`shadow-lg roboto rounded-lg p-6 transition-colors duration-300 ${
              theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              <FaSmile className="mr-2 text-pink-500" /> Why It Works
            </h3>
            <p>{post.whyItWorks}</p>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;