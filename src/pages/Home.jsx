import { Link } from "react-router-dom";
import { FaBook, FaUsers, FaAward, FaGlobe, FaYoutube, FaGooglePlay } from "react-icons/fa";
// Importing your actual images
import schoolBg from "../assets/photos/school-background.png";
import scienceLab from "../assets/photos/science-lab.png";
import sportsDay from "../assets/events/annual-sport-day.png";

const features = [
  {
    icon: <FaBook />,
    title: "NEB Curriculum",
    text: "Comprehensive Nursery to +2 programs designed to build strong academic foundations.",
  },
  {
    icon: <FaUsers />,
    title: "Caring Environment",
    text: "A safe, inclusive, and supportive community where every child feels at home.",
  },
  {
    icon: <FaAward />,
    title: "Experienced Faculty",
    text: "Dedicated teachers who bring out the best in every student.",
  },
  {
    icon: <FaGlobe />,
    title: "Holistic Growth",
    text: "Beyond books: sports, science fairs, and cultural activities for all-round development.",
  },
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "1,200+", label: "Happy Students" },
  { value: "50+", label: "Expert Teachers" },
  { value: "2", label: "Beautiful Campuses" },
];

export default function Home() {
  return (
    <main className="pt-20">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-primary text-white overflow-hidden">
        {/* Using your school background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${schoolBg})` }}
        />
        {/* Dark gradient overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40 text-center">
          <p className="text-secondary font-bold tracking-widest uppercase mb-3 text-sm md:text-base">
            Admissions Open for 2084 B.S.
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight">
            Empowering Minds, <br className="hidden md:block" />
            Shaping Futures
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Welcome to MoonLight Secondary English School. We provide quality
            education from Nursery to +2, rooted in strong values and modern learning.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-secondary text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              to="/academics"
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition"
            >
              Explore Academics
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-heading font-extrabold">{s.value}</p>
              <p className="text-sm font-medium mt-1 text-white/90">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm">
            Why Choose MoonLight?
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 text-primary">
            A Place Where Learning is Joyful
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-light p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl mb-4">
                {f.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-dark">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ACTIVITIES PREVIEW ===== */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-widest text-sm">
                Beyond the Classroom
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 text-primary">
                Our Activities
              </h2>
            </div>
            <Link
              to="/activities"
              className="mt-4 md:mt-0 text-primary font-semibold border-b-2 border-secondary hover:text-secondary transition"
            >
              View All Activities →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Activity 1 */}
            <div className="relative rounded-2xl overflow-hidden group h-72">
              <img
                src={sportsDay}
                alt="Annual Sports Day"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-heading font-bold text-2xl">Annual Sports Day</h3>
                  <p className="text-gray-300 text-sm mt-1">Building teamwork and physical fitness.</p>
                </div>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="relative rounded-2xl overflow-hidden group h-72">
              <img
                src={scienceLab}
                alt="Science Laboratory"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-heading font-bold text-2xl">Science Laboratory</h3>
                  <p className="text-gray-300 text-sm mt-1">Hands-on experiments for curious minds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== YOUTUBE / APP PROMO ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex flex-col md:flex-row items-center">
          <div className="p-10 md:p-14 flex-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Stay Connected With Us
            </h2>
            <p className="text-gray-600 mb-8">
              Watch our latest school events, morning assemblies, and student activities on YouTube.
              Parents can also download our official mobile app to stay updated with notices and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.youtube.com/@MoonlightSchool-Official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#FF0000] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
              >
                <FaYoutube size={20} />
                Subscribe on YouTube
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.eacademynepal.moonlight&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
              >
                <FaGooglePlay size={18} />
                Get the App
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8Ay-B_6Q5R4"
                title="Moonlight School Official Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-primary text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to Join Our Family?</h2>
        <p className="mt-3 mb-8 max-w-xl mx-auto text-white/80">
          We are now accepting applications for the upcoming academic session.
          Visit either of our campuses or apply online today.
        </p>
        <Link
          to="/admissions"
          className="inline-block bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition"
        >
          Start Your Application
        </Link>
      </section>
    </main>
  );
}