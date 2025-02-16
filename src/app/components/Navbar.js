export default function Navbar() {
    return (
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-xl font-bold">
            My Website
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-200">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }