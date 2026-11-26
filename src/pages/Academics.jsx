import { useState } from "react";
import { Link } from "react-router-dom";
import { academics } from "../data/academics";

const filters = ["All", "Nursery–10", "+2"];

export default function Academics() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? academics : academics.filter((c) => c.level === active);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
          Our Programs
        </p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold">
          Academic Levels
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          From Nursery to +2 Management & Education — quality education at every step.
        </p>
      </section>

      {/* Filter + Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition ${
                active === f
                  ? "bg-primary text-white shadow-md"
                  : "bg-light text-dark hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                {c.level}
              </span>
              <h3 className="font-heading font-bold text-xl mt-1 mb-2">
                {c.title}
              </h3>
              <p className="text-gray-600 text-sm flex-1 leading-relaxed">
                {c.desc}
              </p>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                <span className="text-gray-500">⏱ {c.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-dark text-center py-16 px-6">
        <h2 className="text-3xl font-heading font-bold">Not Sure Where to Start?</h2>
        <p className="mt-3 mb-8 max-w-xl mx-auto text-dark/80">
          Visit our campus or call us — we'll help you pick the right class.
        </p>
        <Link
          to="/admissions"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Talk to Admissions
        </Link>
      </section>
    </main>
  );
}