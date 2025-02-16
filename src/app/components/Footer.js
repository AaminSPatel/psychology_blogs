export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Awesome Website. All rights reserved.</p>
          <div className="mt-4">
            <a href="/privacy" className="text-gray-400 hover:text-white mx-2">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  }