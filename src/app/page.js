"use client"
import { useBlogContext } from "./components/Context";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { FaBrain, FaHeart, FaArrowRight,   FaRegEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
//import { useBlogContext } from "./components/Context";
import React, { useState } from "react";
import Link from "next/link";
import blogs from "./components/BlogPost";
import Head from "next/head";

/* export const metadata = {
  title: "My Awesome Website - Home",
  description: "This is the homepage of my awesome website built with Next.js and Tailwind CSS.",
  keywords: "Next.js, Tailwind CSS, SEO, React",
};
 */
export default function Home() {
  const { theme } = useBlogContext(); // Get theme state & toggle function

  return (
    <div>
      <Navbar/>
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
  <meta 
    name="description" 
    content="Unlock the power of psychology and human behavior with our in-depth blogs. From persuasion techniques and cognitive biases to social engineering and emotional intelligence, we break down complex psychological concepts into easy-to-understand insights. Whether you're interested in mastering body language, improving communication skills, or learning psychological tricks used in marketing and sales, our blogs provide actionable knowledge to help you navigate everyday situations with confidence and awareness."
  />
  <meta 
    name="keywords" 
    content="psychology, manipulation tricks, human behavior, persuasion, mind control, psychological tips, behavioral psychology, cognitive biases, emotional intelligence, influence techniques, subconscious mind, mentalism, NLP, body language, sales psychology, leadership, marketing psychology, self-improvement, confidence building"
  />

  {/* ✅ Open Graph (OG) Meta Tags for Facebook & LinkedIn */}
  <meta property="og:title" content="Psychology Blogs & Manipulation Tricks - Master the Mind" />
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

  <script src="https://cdn.counter.dev/script.js" data-id="95795ebe-d6a8-4887-abef-7dbb03a06eb2" data-utcoffset="6"></script>
</Head>

    <main>
    <div className={theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
          {/* Hero Section */}
          <section className="relative text-center py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-r  ${theme =='light' ? ' text-gray-900 from-pink-100 via-purple-100 to-indigo-100': 'text-white from-pink-950 via-purple-950 to-indigo-950'}   opacity-20 blur-3xl`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        {/* Icons & Heading */}
        <div className="flex justify-center space-x-4 mb-4 text-pink-500">
          <FaBrain className="text-5xl animate-pulse" />
          <FaHeart className="text-5xl animate-bounce" />
        </div>

        <h2 className={`text-5xl font-bold philosopher ${theme =='light' ? ' text-gray-900': 'text-white'}  mb-4`}>
          Welcome to <span className="text-pink-500">Mindful Moments</span>
        </h2>

        <p className={`max-w-2xl mx-auto text-lg popin leading-relaxed  ${theme =='light' ? ' text-gray-900': 'text-white'} `}>
          Discover insightful psychology blogs on mental health, mindfulness, and self-improvement. 
          Join us on a journey towards mental wellness and emotional balance.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <Link
            href="/blogs"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-md shadow-lg hover:bg-pink-600 transition duration-300"
          >
            Explore Blogs <FaArrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center oxanium">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0,6).map((post, index) => (
            <div
              key={index}
              className={`group shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
              }`}
            >
              <div className={`relative flex items-center justify-start h-20 ${theme === "dark" ? "bg-gray-700" : "bg-red-100"}`}>
                <h3 className="text-xl px-6 font-bold text-pink-500 line-clamp-1 popin">{post.title}</h3>
              </div>
              <div className="p-6 ">
                <p className={theme === "dark" ? "text-gray-300 line-clamp-3 roboto" : "text-gray-700 line-clamp-3 roboto"}>{post.description}</p>
                <Link href={`/blog/${post.id}`} className="hover:text-pink-500">
                  <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

   {/* Contact Section */}
 <ContactForm theme={theme}/>

    </div>
    </main>
    <Footer/>
    </div>
  );
}


const ContactForm = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message,setMessage] = useState('')
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setMessage(result.message);
      if (response.ok) {
       // console.log(response);
        
        setIsSent(true);
        setTimeout(() => setIsSent(false), 5000); // Reset after 5 seconds
        setMessage('');

        fetch("/api/contact")
  .then((res) => res.json())
  .then((data) => console.log(data));

        //setFormData({ name: "", email: "", message: "" }); // Clear form
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      id="contact"
      className={`py-12 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center oxanium">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4">
          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 text-center md:text-left h-72 flex items-start justify-start flex-col">
            <h3 className="text-2xl popin font-semibold mb-4">Get in Touch</h3>
            <p className="text-lg mb-4 roboto">
              Have any questions, feedback, or collaboration ideas? Feel free to
              reach out to us, and we’ll get back to you as soon as possible.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-pink-500 text-2xl pl-3 pt-1">
                <FaRegEnvelope size={18} />
              </span>
              <a
                href="mailto:locomail112@gmail.com"
                className="text-lg font-medium hover:text-pink-500 transition"
              >
                locomail112@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full bg-transparent border-b-2 py-2 ${
                    theme === "dark"
                      ? "border-gray-400 focus:border-pink-500"
                      : "border-gray-600 focus:border-pink-500"
                  } focus:outline-none`}
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full bg-transparent border-b-2 py-2 ${
                    theme === "dark"
                      ? "border-gray-400 focus:border-pink-500"
                      : "border-gray-600 focus:border-pink-500"
                  } focus:outline-none`}
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full bg-transparent border-b-2 py-2 ${
                    theme === "dark"
                      ? "border-gray-400 focus:border-pink-500"
                      : "border-gray-600 focus:border-pink-500"
                  } focus:outline-none`}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
              >
                {isSent ? `Message Sent ✅` : `Send Message`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

