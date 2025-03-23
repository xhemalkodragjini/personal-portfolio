import Image from "next/image";
import Badge from "./Badge";

export default function ExperienceCard({ company, logo, role, location, duration, skills }) {
  return (
    <div className="flex flex-col md:flex-row items-start bg-white p-6 mb-6">
      <div className="w-60 h-40 relative mr-12 mb-4 md:mb-0">
        <Image src={logo} alt={company} fill className="object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-light">{role}</h3>
        <div className="text-gray-500 text-sm mt-7 flex flex-wrap items-center gap-x-4">
          <span>📅 {duration}</span>
          <span>📍 {location}</span>
        </div>
        <div className="mt-7 flex flex-wrap">
          {skills.map((skill, index) => (
            <Badge key={index} text={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
