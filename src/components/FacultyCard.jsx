import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function FacultyCard({ member }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 group">
      <div className="overflow-hidden relative">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-4 gap-4">
          <FaLinkedin className="text-white text-xl hover:text-secondary cursor-pointer transition" />
          <FaTwitter className="text-white text-xl hover:text-secondary cursor-pointer transition" />
          <FaEnvelope className="text-white text-xl hover:text-secondary cursor-pointer transition" />
        </div>
      </div>
      <div className="p-5 text-center">
        <h3 className="font-heading font-bold text-lg">{member.name}</h3>
        <p className="text-sm text-secondary font-medium mt-1">
          {member.role}
        </p>
        <p className="text-xs text-gray-500 mt-1">Dept. of {member.dept}</p>
      </div>
    </div>
  );
}