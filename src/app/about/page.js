import Navbar from "../components/Navbar";

export const metadata = {
  title: "About Us - My Awesome Website",
  description: "Learn more about us and what we do.",
};

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-10">
          About Us
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to the About page! Here, you can learn more about our mission, team, and values.
        </p>
        <div className="h-96 max-h-[400px] w-full overflow-hidden">
        <img
          src="/ap1.jpg"
          alt="Our Team"
          className="mt-6 rounded-lg shadow-lg h-72 w-64"
        />
        </div>
      </main>
    </div>
  );
}