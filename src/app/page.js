import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "My Awesome Website - Home",
  description: "This is the homepage of my awesome website built with Next.js and Tailwind CSS.",
  keywords: "Next.js, Tailwind CSS, SEO, React",
};

export default function Home() {
  
  return (
    <div>
      <Navbar/>
    <main>
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome to My Website!
      </h1>
    </main>
    <Footer/>
    </div>
  );
}