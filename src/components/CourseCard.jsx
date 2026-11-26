export default function CourseCard({ course }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col">
      <div className="text-4xl mb-4">{course.icon}</div>
      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
        {course.level}
      </span>
      <h3 className="font-heading font-bold text-xl mt-1 mb-2">
        {course.title}
      </h3>
      <p className="text-gray-600 text-sm flex-1 leading-relaxed">
        {course.desc}
      </p>
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
        <span className="text-gray-500">⏱ {course.duration}</span>
        <button className="text-primary font-semibold hover:text-secondary transition">
          Details →
        </button>
      </div>
    </div>
  );
}