import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo/logo.jpg"; // Importing your logo

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/faculty", label: "Faculty" }, // <-- Add this
  { to: "/activities", label: "Activities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo & Name */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            <img src={logo} alt="MoonLight Logo" className="h-10 w-auto md:h-12" />
          </div>
          <div className="hidden lg:block">
            <h1 className="font-heading font-bold text-lg text-primary leading-tight">
              MoonLight Secondary
            </h1>
            <p className="text-xs text-secondary font-semibold tracking-wider uppercase">
              English School
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-7 font-medium text-sm lg:text-base">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-semibold"
                    : "text-gray-700 hover:text-primary transition"
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <Link
            to="/admissions"
            className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition shadow-md text-sm lg:text-base"
          >
            Apply Now
          </Link>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-3 shadow-lg absolute w-full">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-1 ${isActive ? "text-secondary font-semibold" : "text-gray-700"}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <Link
            to="/admissions"
            onClick={() => setOpen(false)}
            className="mt-2 bg-primary text-white text-center py-2.5 rounded-full font-semibold"
          >
            Apply Now
          </Link>
        </ul>
      )}
    </header>
  );
}