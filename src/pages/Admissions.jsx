import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const initialForm = { name: "", email: "", phone: "", program: "", message: "" };

export default function Admissions() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Enter a valid email";
    }
    if (!form.phone.trim()) {
      e.phone = "Phone is required";
    } else if (!/^[\d\s+\-()]{7,}$/.test(form.phone)) {
      e.phone = "Enter a valid phone number";
    }
    if (!form.program) e.program = "Please select a program";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
          Admissions
        </p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold">Enroll Now</h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          Apply for Nursery through +2. Our team will respond within 48 hours.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-10">
        {/* Contact Info */}
        <div className="md:col-span-2 bg-primary text-white p-8 rounded-2xl h-fit">
          <h2 className="font-heading font-bold text-2xl mb-6">Contact Information</h2>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-secondary mt-1 shrink-0" />
              <div>
                <span className="font-semibold block mb-1">Main Campus:</span>
                Rapti Rural Municipality-2, Lalmatiya, Dang
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-secondary mt-1 shrink-0" />
              <div>
                <span className="font-semibold block mb-1">River Rapti Branch:</span>
                Rapti Rural Municipality-1, Bhalubang, Dang
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaPhone className="text-secondary mt-1 shrink-0" />
              <span>9765844860</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-secondary mt-1 shrink-0" />
              <span>Moonlightrapti@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="text-secondary mt-1 shrink-0" />
              <span>Mon–Fri, 9:30 AM – 4:00 PM</span>
            </li>
          </ul>

          <h3 className="font-heading font-semibold text-lg mt-8 mb-3">Important Dates</h3>
          <ul className="text-sm space-y-2 text-white/90">
            <li>• New session (2084 B.S.) — Baishakh 1</li>
            <li>• Application deadline — Baishakh 15</li>
            <li>• Entrance exam — Baishakh 20</li>
          </ul>
        </div>

        {/* Form */}
        <div className="md:col-span-3 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">Enquiry submitted!</p>
                <p className="text-sm">Thank you. Our admissions team will contact you within 48 hours.</p>
              </div>
            </div>
          )}

          <h2 className="font-heading font-bold text-2xl mb-6">Admission Enquiry</h2>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Student's Full Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ram Bahadur"
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition ${
                  errors.name ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-primary/40"
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ram@example.com"
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition ${
                    errors.email ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-primary/40"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Guardian's Phone *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="9841XXXXXX"
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition ${
                    errors.phone ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-primary/40"
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Program */}
            <div>
              <label className="block text-sm font-medium mb-1">Applying for Grade/Level *</label>
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 transition ${
                  errors.program ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-primary/40"
                }`}
              >
                <option value="">Select a level</option>
                <option>Nursery</option>
                <option>KG</option>
                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 3</option>
                <option>Class 4</option>
                <option>Class 5</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Class 10</option>
                <option>+2 Management</option>
                <option>+2 Education</option>
              </select>
              {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message (optional)</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Any questions or additional information..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Want to Visit Us First?</h2>
          <p className="text-gray-600 mb-6">
            Drop by during office hours — no appointment needed. We'd love to show you around.
          </p>
          <a
            href="mailto:Moonlightrapti@gmail.com"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition"
          >
            Email Admissions
          </a>
        </div>
      </section>
    </main>
  );
}