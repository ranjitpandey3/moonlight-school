import { activities } from "../data/activities";
import { FaCalendarAlt } from "react-icons/fa";

export default function Activities() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
          Beyond the Classroom
        </p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold">
          School Activities
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          At MoonLight, we believe education goes beyond textbooks. Explore our events,
          sports, and creative programs.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <FaCalendarAlt />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}