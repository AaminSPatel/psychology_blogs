"use client"; // Mark this as a Client Component
import React, { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // Initialize theme state with a safe default value
  const [theme, setTheme] = useState("light");

  // Use useEffect to handle client-side logic
  useEffect(() => {
    // Check localStorage for the saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme); // Update the state with the saved theme
  }, []);

  // Update the theme in localStorage and apply it to the document
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <BlogContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);