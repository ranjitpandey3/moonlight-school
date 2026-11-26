import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaUserGraduate, FaAward } from "react-icons/fa";
import staffPhoto from "../assets/staff/staff-group.png";

export default function Faculty() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
          Meet Our Team
        </p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold">
          Our Faculty & Staff
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          Dedicated educators who bring passion, experience, and warmth into every classroom.
        </p>
      </section>

      {/* Main Photo + Message */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-10">
          <img
            src={staffPhoto}
            alt="MoonLight School Staff"
            className="w-full h-auto object-cover max-h-[600px]"
          />
        </div>
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
            One Team, One Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At MoonLight Secondary English School, our greatest strength is our people. 
            From our early childhood educators to our +2 subject specialists, our team 
            works together to create a nurturing, disciplined, and inspiring environment 
            for every student.
          </p>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="bg-light py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
            <FaChalkboardTeacher className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="font-heading font-bold text-xl text-primary mb-2">60+ Teachers</h3>
            <p className="text-gray-600 text-sm">Qualified, experienced, and continuously trained educators.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
            <FaUserGraduate className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="font-heading font-bold text-xl text-primary mb-2">1:25 Ratio</h3>
            <p className="text-gray-600 text-sm">Small class sizes ensure personalized attention for every child.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
            <FaAward className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="font-heading font-bold text-xl text-primary mb-2">Proven Results</h3>
            <p className="text-gray-600 text-sm">Consistent 100% SEE pass rate and top +2 board results.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-dark text-center py-16 px-6">
        <h2 className="text-3xl font-heading font-bold">Want to Join Our Team?</h2>
        <p className="mt-3 mb-8 max-w-xl mx-auto text-dark/80">
          We are always looking for passionate educators. Reach out to us.
        </p>
        <Link
          to="/admissions"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}