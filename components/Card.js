import Image from "next/image";
import Badge from "./Badge";

export default function Card({ organization, logo, title, location, duration, skills }) {
  return (
    <div className="flex flex-col md:flex-row items-start p-6 mb-6 w-full">
      <div className="w-60 h-20 relative mr-12 mb-4 md:mb-0 md:mr-6">
        <Image src={logo} alt={organization} fill className="object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-light">{title}</h3>
        <div className="text-gray-500 text-sm mt-7 flex flex-wrap items-center gap-x-4">
          <span>📅 {duration}</span>
          <span>📍 {location}</span>
        </div>
        {skills &&
          (
            <div className="mt-7 flex flex-wrap">
              {skills.map((skill, index) => (
                <Badge key={index} text={skill} />
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
}
