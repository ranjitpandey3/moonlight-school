import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGooglePlay,
} from "react-icons/fa";
import logo from "../assets/logo/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 pt-14 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand & Socials */}
        <div>
          <div className="bg-white p-2 rounded-xl inline-block mb-4">
             <img src={logo} alt="MoonLight Logo" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-gray-400 mb-4 italic">
            "Empowering Minds, Shaping Futures"
          </p>
          <div className="flex gap-4 text-lg">
            <a href="https://www.facebook.com/profile.php?id=100076404726647" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-secondary cursor-pointer transition" />
            </a>
            <a href="https://www.youtube.com/@MoonlightSchool-Official" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-secondary cursor-pointer transition" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.eacademynepal.moonlight&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <FaGooglePlay className="hover:text-secondary cursor-pointer transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-secondary transition">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-secondary transition">Academics</Link></li>
            <li><Link to="/faculty" className="hover:text-secondary transition">Faculty</Link></li>
            <li><Link to="/activities" className="hover:text-secondary transition">Activities</Link></li>
            <li><Link to="/gallery" className="hover:text-secondary transition">Gallery</Link></li>
            <li><Link to="/admissions" className="hover:text-secondary transition">Admissions</Link></li>
          </ul>
        </div>

        {/* Campuses */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Our Campuses</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-secondary mt-1 shrink-0" />
              <div>
                <span className="text-white font-medium block">Main Campus</span>
                Rapti Rural Municipality-2, Lalmatiya, Dang
              </div>
            </li>
            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-secondary mt-1 shrink-0" />
              <div>
                <span className="text-white font-medium block">River Rapti Branch</span>
                Rapti Rural Municipality-1, Bhalubang, Dang
              </div>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <FaPhone className="text-secondary shrink-0" />
              9765844860
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-secondary shrink-0" />
              Moonlightrapti@gmail.com
            </li>
          </ul>
          
          {/* App Download Button in Footer */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.eacademynepal.moonlight&pcampaignid=web_share" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 bg-white text-dark px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition w-full"
          >
            <FaGooglePlay className="text-primary" />
            Download App
          </a>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} MoonLight Secondary English School. All rights reserved.
      </div>
    </footer>
  );
}