import { useState } from "react";
import { FaTimes } from "react-icons/fa";
// Import all your photos here
import schoolBg from "../assets/photos/school-background.png";
import scienceLab from "../assets/photos/science-lab.png";
import morningPrayer from "../assets/photos/morning-prayer.png";
import sportsDay from "../assets/events/annual-sport-day.png";
import farewell from "../assets/events/farewell-2018.png";
import staffPhoto from "../assets/staff/staff-group.png"; 
// Make sure the staff photo extension (.jpg or .png) matches your actual file!

const images = [
  { src: schoolBg, alt: "Main Campus Building", category: "Campus" },
  { src: sportsDay, alt: "Annual Sports Day", category: "Events" },
  { src: scienceLab, alt: "Science Laboratory", category: "Facilities" },
  { src: morningPrayer, alt: "Morning Prayer Assembly", category: "Daily Life" },
  { src: staffPhoto, alt: "Our Dedicated Staff", category: "Staff" }, 
  { src: farewell, alt: "Farewell 2018", category: "Events" },
];

const categories = ["All", "Campus", "Events", "Facilities", "Staff", "Daily Life"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages = filter === "All" 
    ? images 
    : images.filter((img) => img.category === filter);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
          Our Memories
        </p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold">
          Photo Gallery
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          A glimpse into the vibrant life at MoonLight Secondary English School.
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition ${
                filter === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden cursor-pointer h-48 md:h-64"
              onClick={() => setSelectedImg(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-medium border border-white px-4 py-2 rounded-full backdrop-blur-sm">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-3xl hover:text-secondary transition"
            onClick={() => setSelectedImg(null)}
          >
            <FaTimes />
          </button>
          <img
            src={selectedImg}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
          />
        </div>
      )}
    </main>
  );
}