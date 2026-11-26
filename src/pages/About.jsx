import { Link } from "react-router-dom";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import scienceLab from "../assets/photos/science-lab.png";

const values = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    text: "To provide affordable, quality education rooted in Nepali culture while preparing students for global opportunities.",
  },
  {
    icon: <FaEye />,
    title: "Our Vision",
    text: "To be a model community school in Dang — where every child discovers their potential and builds a bright future.",
  },
  {
    icon: <FaHeart />,
    title: "Our Values",
    text: "Discipline, curiosity, respect for elders, and service to the community — the values that shape good citizens.",
  },
];

const milestones = [
  { year: "2049 B.S.", text: "MoonLight Secondary English School founded in Lalmatiya, Dang." },
  { year: "2052 B.S.", text: "Expanded with a new branch: River Rapti English School in Bhalubang." },
  { year: "2075 B.S.", text: "Celebrated our first batch of 100% SEE pass graduates with distinction." },
  { year: "2082 B.S.", text: "Serving 1,200+ students across two campuses with modern facilities." },
];

const stats = [
  { value: "1,200+", label: "Students" },
  { value: "25+", label: "Years" },
  { value: "60+", label: "Teachers" },
  { value: "2", label: "Campuses" },
];

export default function About() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
          About Us
        </p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold">
          Our Story
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          Empowering minds and shaping futures in Dang since 2049 B.S.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={scienceLab}
          alt="Science Lab at MoonLight"
          className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
        />
        <div>
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
            Quality Education in Dang
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            MoonLight Secondary English School has been a pillar of education in 
            Rapti Rural Municipality since 2049 B.S. With our branch, River Rapti 
            English School (est. 2052 B.S.), we have grown into a trusted community 
            of learners and educators.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our campuses feature well-equipped science and computer labs, libraries, 
            sports grounds, and safe environments — ensuring that every student has 
            the tools they need to succeed.
          </p>
          <Link
            to="/academics"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Explore Our Programs
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-light py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-heading font-extrabold text-primary">{s.value}</p>
              <p className="text-sm text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm">
            What Drives Us
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Mission, Vision & Values
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary/20 text-secondary text-2xl mb-4">
                {v.icon}
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-dark text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
              Milestones in Our History
            </h2>
          </div>
          <div className="relative border-l-2 border-secondary/40 ml-4 pl-8 space-y-10">
            {milestones.map((m, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-secondary border-4 border-dark" />
                <p className="text-secondary font-heading font-bold text-xl">{m.year}</p>
                <p className="text-gray-300 mt-1">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-dark text-center py-16 px-6">
        <h2 className="text-3xl font-heading font-bold">Want to Be Part of Our Family?</h2>
        <p className="mt-3 mb-8 max-w-xl mx-auto text-dark/80">
          Visit us during school hours or call to schedule a campus tour.
        </p>
        <Link to="/admissions" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition">
          Contact Us
        </Link>
      </section>
    </main>
  );
}