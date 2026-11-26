import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="pt-20 min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-heading font-extrabold text-primary">404</h1>
      <p className="text-xl text-gray-600 mt-3">Page not found</p>
      <Link
        to="/"
        className="mt-8 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}